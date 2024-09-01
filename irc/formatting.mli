module Color : sig
  type t =
    | White
    | Black
    | Blue
    | Green
    | Red
    | Brown
    | Magenta
    | Orange
    | Yellow
    | Light_green
    | Cyan
    | Light_cyan
    | Light_blue
    | Pink
    | Grey
    | Light_grey
    | Extended of int
    | Default

  val of_int : int -> t
end

module Color_command : sig
  type 'a t = Reset | Fg of 'a | Fg_bg of 'a * 'a
end

module Token : sig
  type t =
    | Bold
    | Italics
    | Underline
    | Strikethrough
    | Monospace
    | Color of Color.t Color_command.t
    | Hex_color of int Color_command.t
    | Reverse_color
    | Reset
    | Text of string

  val to_string : t -> string
end

val parse : string -> Token.t array

val to_string : Token.t array -> string
val strip : Token.t array -> string
