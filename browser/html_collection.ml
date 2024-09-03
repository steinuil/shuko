type t

module Make (T : sig
  type t
end) =
struct
  external to_html_collection : T.t -> t = "%identity"
  external length : T.t -> int = "length" [@@mel.get]

  external item : int -> Private.element option = "item"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external named_item : string -> Private.element option = "namedItem"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  include Iterable.Symbol_iterator (struct
    type nonrec t = T.t
    type value = Private.element
  end)
end

include Make (struct
  type nonrec t = t
end)
