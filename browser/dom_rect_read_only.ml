type t

external create :
  ?x:float -> ?y:float -> ?width:float -> ?height:float -> unit -> t
  = "DOMRectReadOnly"
[@@mel.new]

module Make (T : sig
  type t
end) =
struct
  external x : T.t -> float = "x" [@@mel.get]
  external y : T.t -> float = "y" [@@mel.get]
  external width : T.t -> float = "width" [@@mel.get]
  external height : T.t -> float = "height" [@@mel.get]
  external top : T.t -> float = "top" [@@mel.get]
  external right : T.t -> float = "right" [@@mel.get]
  external bottom : T.t -> float = "bottom" [@@mel.get]
  external left : T.t -> float = "left" [@@mel.get]
  external to_json : Js.Json.t = "toJSON" [@@mel.send.pipe: T.t]
end

include Make (struct
  type nonrec t = t
end)
