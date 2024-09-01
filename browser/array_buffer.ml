type t
type create_options

external create_options : ?maxByteLength:int -> unit -> create_options = ""
[@@mel.obj]

external create : length:int -> ?options:create_options -> unit -> t
  = "ArrayBuffer"
[@@mel.new]

let create ~length ?max_byte_length () =
  create ~length
    ?options:
      (Option.map
         (fun max_byte_length ->
           create_options ~maxByteLength:max_byte_length ())
         max_byte_length)
    ()

external is_view : 'a -> bool = "isView" [@@mel.scope "ArrayBuffer"]
external byte_length : t -> int = "byteLength" [@@mel.get]
external detached : t -> bool = "detached" [@@mel.get]
external max_byte_length : t -> int = "maxByteLength" [@@mel.get]
external resizable : t -> bool = "resizable" [@@mel.get]
external to_string : string = "toString" [@@mel.send.pipe: t]
external resize : int -> unit = "resize" [@@mel.send.pipe: t]

external slice : ?start:int -> ?end_:int -> unit -> t = "slice"
[@@mel.send.pipe: t]

external transfer : ?new_byte_length:int -> unit -> t = "transfer"
[@@mel.send.pipe: t]

external transfer_to_fixed_length : ?new_byte_length:int -> unit -> t
  = "transferToFixedLength"
[@@mel.send.pipe: t]
