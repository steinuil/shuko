module Make (T : sig
  type t
end) =
struct
  external assigned_slot : T.t -> Html_slot_element.t = "assignedSlot"
  [@@mel.get]
end
