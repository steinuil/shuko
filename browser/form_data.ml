type t

external create :
  ?form:Html_form_element.t -> ?submitter:Html_element.t -> unit -> t
  = "FormData"
[@@mel.new]

external append_string : name:string -> value:string -> unit = "append"
[@@mel.send.pipe: t]

external append_blob : name:string -> ?filename:string -> value:Blob.t -> unit
  = "append"
[@@mel.send.pipe: t]

external delete : string -> unit = "delete" [@@mel.send.pipe: t]

type entry_value

let entry_value : entry_value -> [> `String of string | `File of File.t ] =
 fun t ->
  if Js.typeof t = "string" then `String (Obj.magic t) else `File (Obj.magic t)

external get : string -> entry_value option = "get"
[@@mel.send.pipe: t] [@@mel.return nullable]

let get name t = Option.map entry_value (get name t)

external get_all : string -> entry_value array = "getAll" [@@mel.send.pipe: t]

let get_all name t = Array.map entry_value (get_all name t)

external has : string -> bool = "has" [@@mel.send.pipe: t]

external set_string : name:string -> value:string -> unit = "set"
[@@mel.send.pipe: t]

external set_blob : name:string -> ?filename:string -> value:Blob.t -> unit
  = "set"
[@@mel.send.pipe: t]

include Iterable.Pair (struct
  type nonrec t = t
  type key = string
  type value = entry_value
end)
