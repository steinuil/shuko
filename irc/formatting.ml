module Color = struct
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

  let of_int = function
    | 0 -> White
    | 1 -> Black
    | 2 -> Blue
    | 3 -> Green
    | 4 -> Red
    | 5 -> Brown
    | 6 -> Magenta
    | 7 -> Orange
    | 8 -> Yellow
    | 9 -> Light_green
    | 10 -> Cyan
    | 11 -> Light_cyan
    | 12 -> Light_blue
    | 13 -> Pink
    | 14 -> Grey
    | 15 -> Light_grey
    | 99 -> Default
    | num when num >= 16 && num <= 98 -> Extended num
    | other -> invalid_arg ("Unknown color code: " ^ Js.Int.toString other)

  let of_string = function
    | "0" | "00" -> White
    | "1" | "01" -> Black
    | "2" | "02" -> Blue
    | "3" | "03" -> Green
    | "4" | "04" -> Red
    | "5" | "05" -> Brown
    | "6" | "06" -> Magenta
    | "7" | "07" -> Orange
    | "8" | "08" -> Yellow
    | "9" | "09" -> Light_green
    | "10" -> Cyan
    | "11" -> Light_cyan
    | "12" -> Light_blue
    | "13" -> Pink
    | "14" -> Grey
    | "15" -> Light_grey
    | "99" -> Default
    | other -> Extended (int_of_string other)

  let to_string = function
    | White -> "0"
    | Black -> "1"
    | Blue -> "2"
    | Green -> "3"
    | Red -> "4"
    | Brown -> "5"
    | Magenta -> "6"
    | Orange -> "7"
    | Yellow -> "8"
    | Light_green -> "9"
    | Cyan -> "10"
    | Light_cyan -> "11"
    | Light_blue -> "12"
    | Pink -> "13"
    | Grey -> "14"
    | Light_grey -> "15"
    | Extended c -> Js.Int.toString c
    | Default -> "99"
end

let string_of_hex_color c =
  Js.Int.toString ~radix:16 c |> Utils.pad_start ~length:6 ~pad_string:"0"

module Color_command = struct
  type 'a t = Reset | Fg of 'a | Fg_bg of 'a * 'a

  let to_string string_of_color = function
    | Reset -> ""
    | Fg fg -> string_of_color fg
    | Fg_bg (fg, bg) -> string_of_color fg ^ "," ^ string_of_color bg
end

module Token = struct
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

  let to_string = function
    | Bold -> "\x02"
    | Italics -> "\x1d"
    | Underline -> "\x1f"
    | Strikethrough -> "\x1e"
    | Monospace -> "\x11"
    | Color c -> "\x03" ^ Color_command.to_string Color.to_string c
    | Hex_color c -> "\x04" ^ Color_command.to_string string_of_hex_color c
    | Reverse_color -> "\x16"
    | Reset -> "\x0f"
    | Text str -> str
end

let parse_color_format_with re of_string message i =
  let rest = Js.String.slice ~start:i message in
  match Js.Re.exec re ~str:rest with
  | None -> (Color_command.Reset, i)
  | Some m -> (
      let captures = Js.Re.captures m in
      let fg = captures.(1) |> Js.Nullable.toOption in
      let bg = captures.(3) |> Js.Nullable.toOption in
      match (fg, bg) with
      | None, _ -> (Reset, i)
      | Some fg, None ->
          let i = i + Js.String.length fg in
          let fg = of_string fg in
          (Fg fg, i)
      | Some fg, Some bg ->
          let i = i + Js.String.length fg + 1 + Js.String.length bg in
          let fg = of_string fg in
          let bg = of_string bg in
          (Fg_bg (fg, bg), i))

let parse_color_format =
  parse_color_format_with [%mel.re {re|/^([0-9]{1,2})(,([0-9]{1,2}))?/|re}]
    Color.of_string

let color_of_hex_string str = int_of_string ("0x" ^ str)

let parse_hex_color_format =
  parse_color_format_with
    [%mel.re {re|/^([0-9A-Fa-f]{6})(,([0-9A-Fa-f]{6}))?/|re}]
    color_of_hex_string

let parse message =
  let out : Token.t array = [||] in
  let rec parse in_string i =
    if i >= Js.String.length message then (
      match in_string with
      | None -> out
      | Some str_i ->
          let str =
            Js.String.slice ~start:str_i ~end_:(Js.String.length message)
              message
          in
          if str <> "" then Js.Array.push ~value:(Token.Text str) out |> ignore;
          out)
    else
      let char = Js.String.charAt ~index:i message in
      let prev_i = i in
      let code, i =
        match char with
        | "\x02" -> (Some Token.Bold, i)
        | "\x1d" -> (Some Italics, i)
        | "\x1f" -> (Some Underline, i)
        | "\x1e" -> (Some Strikethrough, i)
        | "\x11" -> (Some Monospace, i)
        | "\x03" ->
            let color, i = parse_color_format message (i + 1) in
            (Some (Color color), i - 1)
        | "\x04" ->
            let color, i = parse_hex_color_format message (i + 1) in
            (Some (Hex_color color), i - 1)
        | "\x16" -> (Some Reverse_color, i)
        | "\x0f" -> (Some Reset, i)
        | _ -> (None, i)
      in
      match (code, in_string) with
      | None, Some _ -> parse in_string (i + 1)
      | None, None -> parse (Some i) (i + 1)
      | Some code, Some str_i ->
          let str = Js.String.slice ~start:str_i ~end_:prev_i message in
          Js.Array.push ~value:(Token.Text str) out |> ignore;
          Js.Array.push ~value:code out |> ignore;
          parse None (i + 1)
      | Some code, None ->
          Js.Array.push ~value:code out |> ignore;
          parse None (i + 1)
  in
  parse None 0

let to_string parts =
  Js.Array.map ~f:Token.to_string parts |> Js.Array.join ~sep:""

let strip =
  Js.Array.reduce
    ~f:(fun str -> function Token.Text t -> str ^ t | _ -> str)
    ~init:""
