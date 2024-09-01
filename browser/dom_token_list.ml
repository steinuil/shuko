type t

external length : t -> int = "length" [@@mel.get]

external item : int -> string option = "item"
[@@mel.send.pipe: t] [@@mel.return nullable]

external contains : string -> bool = "contains" [@@mel.send.pipe: t]

external add : string array -> unit = "add"
[@@mel.send.pipe: t] [@@mel.variadic]

external remove : string array -> unit = "remove"
[@@mel.send.pipe: t] [@@mel.variadic]

external toggle : string -> ?toggle:bool -> unit = "toggle" [@@mel.send.pipe: t]

external replace : token:string -> new_token:string -> unit = "replace"
[@@mel.send.pipe: t]

external supports : string -> bool = "supports" [@@mel.send.pipe: t]
external to_string : string = "toString" [@@mel.send.pipe: t]

include Iterable.Value (struct
  type nonrec t = t
  type value = string
end)
