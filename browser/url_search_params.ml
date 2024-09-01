type t

external create : unit -> t = "URLSearchParams" [@@mel.new]
external of_string : string -> t = "URLSearchParams" [@@mel.new]
external of_array : (string * string) array -> t = "URLSearchParams" [@@mel.new]
external of_dict : string Js.Dict.t -> t = "URLSearchParams" [@@mel.new]
external size : t -> int = "size" [@@mel.get]

external append : name:string -> value:string -> unit = "append"
[@@mel.send.pipe: t]

external delete : name:string -> ?value:string -> unit -> unit = "delete"
[@@mel.send.pipe: t]

external get : string -> string option = "get"
[@@mel.send.pipe: t] [@@mel.return nullable]

external get_all : string -> string array = "getAll" [@@mel.send.pipe: t]

external has : name:string -> ?value:string -> unit -> bool = "has"
[@@mel.send.pipe: t]

external set : name:string -> value:string -> unit = "set" [@@mel.send.pipe: t]
external sort : unit = "sort" [@@mel.send.pipe: t]

include Iterable.Pair (struct
  type nonrec t = t
  type key = string
  type value = string
end)

external to_string : string = "toString" [@@mel.send.pipe: t]
