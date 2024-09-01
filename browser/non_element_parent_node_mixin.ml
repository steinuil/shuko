module Make (T : sig
  type t
end) =
struct
  external get_element_by_id : string -> Private.element option
    = "getElementById"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]
end
