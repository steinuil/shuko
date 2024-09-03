def snake_case id
  # Group characters based on casing
  words = id.chars
    .chunk_while { |pc, nc|
      (pc =~ /[A-Z]/ && nc =~ /[A-Z]/) || (pc =~ /[a-z]/ && nc =~ /[a-z]/)
    }
    .map(&:join)
    .to_a

  words.map.with_index do |word, i|
    prev = words[i - 1] if i > 0

    unless prev
      if word =~ /[a-z]+/
        word
      elsif word.size > 1
        word[..-2]
      else
        nil
      end
    else
      if prev =~ /[A-Z]+/
        prev[-1] + word
      elsif !words[i + 1]
        word
      elsif word.size > 1
        word[..-2]
      else
        nil
      end
    end
  end.compact.map(&:downcase).join("_")
end

def conv_type type
  case type
  when /[Ss]tring$/ then "string"
  when "boolean" then "bool"
  when "double" then "float"
  when "long" then "int"
  else
    snake_case(type).capitalize + ".t"
  end
end

STDIN.readlines("\n").each do |line|
  line = line.split(" ")
  next if line.empty?

  is_readonly = line[-4] == "readonly" || line[-5] == "readonly"
  orig_name = line[-1][..-2]
  type = line[-2]

  name = snake_case orig_name
  type = conv_type type

  puts "external #{name} : t -> #{type} = \"#{orig_name}\" [@@mel.get]"
  unless is_readonly
    puts "external set_#{name} : t -> #{type} -> unit = \"#{orig_name}\" [@@mel.set]"
  end
end
