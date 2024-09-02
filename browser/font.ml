type t

external name : t -> string = "name" [@@mel.get]
external glyphs_rendered : t -> int = "glyphsRendered" [@@mel.get]
