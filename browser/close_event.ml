type t

include Event.Make (struct
  type nonrec t = t
end)

type init

external init :
  ?wasClean:bool ->
  ?code:int ->
  ?reason:string ->
  ?bubbles:bool ->
  ?cancelable:bool ->
  ?composed:bool ->
  unit ->
  init = ""

external create : string -> init -> t = "CloseEvent" [@@mel.new]

let create ?was_clean ?code ?reason ?bubbles ?cancelable ?composed type_ =
  create type_
    (init ?wasClean:was_clean ?code ?reason ?bubbles ?cancelable ?composed ())

external was_clean : t -> bool = "wasClean" [@@mel.get]
external code : t -> int = "code" [@@mel.get]
external reason : t -> string = "reason" [@@mel.get]
