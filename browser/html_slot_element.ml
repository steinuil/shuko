type t = Private.html_slot_element

external create : unit -> t = "HTMLSlotElement" [@@mel.new]

include Html_element.Make (struct
  type nonrec t = t
end)

external name : t -> string = "name" [@@mel.get]
external set_name : t -> string -> unit = "name" [@@mel.set]

type assigned_nodes_options

external assigned_nodes_options :
  ?flatten:bool -> unit -> assigned_nodes_options = ""
[@@mel.obj]

external assigned_nodes : assigned_nodes_options -> Node.t array
  = "assignedNodes"
[@@mel.send.pipe: t]

let assigned_nodes ?flatten =
  assigned_nodes (assigned_nodes_options ?flatten ())

external assigned_elements : assigned_nodes_options -> Element.t array
  = "assignedElements"
[@@mel.send.pipe: t]

let assigned_elements ?flatten =
  assigned_elements (assigned_nodes_options ?flatten ())

(* TODO assign *)
