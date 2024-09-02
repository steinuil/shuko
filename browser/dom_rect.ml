type t

include Dom_rect_read_only.Make (struct
  type nonrec t = t
end)

external create :
  ?x:float -> ?y:float -> ?width:float -> ?height:float -> unit -> t = "DOMRect"
[@@mel.new]

external of_read_only : Dom_rect_read_only.t -> t = "fromRect"
[@@mel.scope "DOMRect"]

external to_read_only : t -> Dom_rect_read_only.t = "fromRect"
[@@mel.scope "DOMRectReadOnly"]

external copy : t -> t = "fromRect" [@@mel.scope "DOMRect"]
external set_x : t -> float -> unit = "x" [@@mel.set]
external set_y : t -> float -> unit = "y" [@@mel.set]
external set_width : t -> float -> unit = "width" [@@mel.set]
external set_height : t -> float -> unit = "height" [@@mel.set]
