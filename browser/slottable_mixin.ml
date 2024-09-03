module Make (T : sig
  type t
end) =
struct
  external assigned_slot : T.t -> Private.html_slot_element = "assignedSlot"
  [@@mel.get]
end
