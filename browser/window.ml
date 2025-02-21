type t = Private.window

external window : t = "window"
external document : t -> Document.t = "document" [@@mel.get]

(* TODO inherits EventTarget *)
