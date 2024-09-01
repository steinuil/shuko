type t

module Make (T : sig
  type t
end) =
struct
  external item : int -> Private.node option = "item"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external length : T.t -> int = "length" [@@mel.get]

  include Iterable.Value (struct
    type nonrec t = T.t
    type value = Private.node
  end)
end

include Make (struct
  type nonrec t = t
end)
