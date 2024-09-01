type t

external create : unit -> t = "Headers" [@@mel.new]
external of_object : < .. > Js.t -> t = "Headers" [@@mel.new]
external of_dict : string Js.Dict.t -> t = "Headers" [@@mel.new]
external of_array : (string * string) array -> t = "Headers" [@@mel.new]

external append : name:string -> value:string -> unit = "append"
[@@mel.send.pipe: t]

external delete : string -> unit = "delete" [@@mel.send.pipe: t]

external get : string -> string option = "get"
[@@mel.send.pipe: t] [@@mel.return nullable]

external has : string -> bool = "has" [@@mel.send.pipe: t]
external set : name:string -> value:string -> unit = "set" [@@mel.send.pipe: t]

include Iterable.Pair (struct
  type nonrec t = t
  type key = string
  type value = string
end)
