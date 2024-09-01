type t

external length : t -> int = "length" [@@mel.get]

external item : int -> Private.element option = "item"
[@@mel.send.pipe: t] [@@mel.return nullable]

external named_item : string -> Private.element option = "namedItem"
[@@mel.send.pipe: t] [@@mel.return nullable]
