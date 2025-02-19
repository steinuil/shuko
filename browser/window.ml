type t = Private.window

external window : t = "window"
external document : t -> Document.t = "document" [@@mel.get]

external set_timeout : f:((unit -> _)[@mel.uncurry]) -> delay:int -> int
  = "setTimeout"

(* TODO inherits EventTarget *)
