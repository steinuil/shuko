type t

external length : t -> int = "length" [@@mel.get]

external item : int -> Attr.t option = "item"
[@@mel.send.pipe: t] [@@mel.return nullable]

external get_named_item : string -> Attr.t option = "getNamedItem"
[@@mel.send.pipe: t] [@@mel.return nullable]

external get_named_item_ns : ?namespace:string -> string -> Attr.t option
  = "getNamedItemNS"
[@@mel.send.pipe: t] [@@mel.return nullable]

external set_named_item : Attr.t -> Attr.t option = "setNamedItem"
[@@mel.send.pipe: t] [@@mel.return nullable]

external set_named_item_ns : Attr.t -> Attr.t option = "setNamedItemNS"
[@@mel.send.pipe: t] [@@mel.return nullable]

external remove_named_item : string -> Attr.t = "removeNamedItem"
[@@mel.send.pipe: t]

external remove_named_item_ns : ?namespace:string -> string -> Attr.t
  = "removeNamedItemNS"
[@@mel.send.pipe: t]
