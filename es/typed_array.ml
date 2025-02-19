module Make (T : sig
  type t
  type value
end) =
struct
  external bytes_per_element : T.t -> int = "BYTES_PER_ELEMENT" [@@mel.get]
end
