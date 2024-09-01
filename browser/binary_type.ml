type t = Blob | Array_buffer

let to_string = function Blob -> "blob" | Array_buffer -> "arraybuffer"

let of_string = function
  | "blob" -> Blob
  | "arraybuffer" -> Array_buffer
  | e -> invalid_arg ("Unknown BinaryType: " ^ e)
