type t

external length : t -> int = "length" [@@mel.get]

external item : int -> Dom_rect.t option = "item"
[@@mel.send.pipe: t] [@@mel.return nullable]

include Iterable.Symbol_iterator (struct
  type nonrec t = t
  type value = Dom_rect.t
end)
