module Ending_type = struct
  type t = Transparent | Native

  let to_string = function Transparent -> "transparent" | Native -> "native"

  let of_string = function
    | "transparent" -> Transparent
    | "native" -> Native
    | e -> invalid_arg ("Unknown EndingType: " ^ e)
end

module Make (T : sig
  type t
end) =
struct
  external size : T.t -> int = "size" [@@mel.get]
  external type_ : T.t -> string = "type" [@@mel.get]

  external slice : ?start:int -> ?_end:int -> ?content_type:string -> T.t
    = "slice"
  [@@mel.send.pipe: T.t]

  external stream : Readable_stream.t = "stream" [@@mel.send.pipe: T.t]
  external text : string Js.Promise.t = "text" [@@mel.send.pipe: T.t]

  external array_buffer : Array_buffer.t Js.Promise.t = "arrayBuffer"
  [@@mel.send.pipe: T.t]
end

type t
type init

include Make (struct
  type nonrec t = t
end)

external init : ?type_:string -> ?endings:string -> unit -> init = ""
[@@mel.obj]

external create : _ -> init -> t = "Blob" [@@mel.new]

let of_blob ?type_ ?endings (blob : t) =
  create blob
    (init ?type_ ?endings:(Option.map Ending_type.to_string endings) ())

let of_buffer_source ?type_ ?endings (buffer_source : Buffer_source.t) =
  create buffer_source
    (init ?type_ ?endings:(Option.map Ending_type.to_string endings) ())

let of_string ?type_ ?endings (string : string) =
  create string
    (init ?type_ ?endings:(Option.map Ending_type.to_string endings) ())

let create ?type_ ?endings () =
  create Js.undefined
    (init ?type_ ?endings:(Option.map Ending_type.to_string endings) ())
