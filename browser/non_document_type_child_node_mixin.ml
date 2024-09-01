module Make (T : sig
  type t
end) =
struct
  external previous_element_sibling : T.t -> Private.element option
    = "previousElementSibling"
  [@@mel.get] [@@mel.return nullable]

  external next_element_sibling : T.t -> Private.element option
    = "nextElementSibling"
  [@@mel.get] [@@mel.return nullable]
end
