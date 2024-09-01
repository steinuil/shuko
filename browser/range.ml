type t

external create : unit -> t = "Range" [@@mel.new]

external common_ancestor_container : t -> Private.node
  = "commonAncestorContainer"
[@@mel.get]

external set_start : Private.node -> offset:int -> unit = "setStart"
[@@mel.send.pipe: t]

external set_end : Private.node -> offset:int -> unit = "setEnd"
[@@mel.send.pipe: t]

external set_start_before : Private.node -> unit = "setStartBefore"
[@@mel.send.pipe: t]

external set_start_after : Private.node -> unit = "setStartAfter"
[@@mel.send.pipe: t]

external set_end_before : Private.node -> unit = "setEndBefore"
[@@mel.send.pipe: t]

external set_end_after : Private.node -> unit = "setEndAfter"
[@@mel.send.pipe: t]

external collapse : ?to_start:bool -> unit = "collapse" [@@mel.send.pipe: t]
external select_node : Private.node -> unit = "selectNode" [@@mel.send.pipe: t]

external select_node_contents : Private.node -> unit = "selectNodeContents"
[@@mel.send.pipe: t]

module CompareStrategy = struct
  type t = Start_to_start | Start_to_end | End_to_end | End_to_start

  let to_int = function
    | Start_to_start -> 0
    | Start_to_end -> 1
    | End_to_end -> 2
    | End_to_start -> 3

  let of_int = function
    | 0 -> Start_to_start
    | 1 -> Start_to_end
    | 2 -> End_to_end
    | 3 -> End_to_start
    | e -> invalid_arg ("Unknown compare strategy: " ^ Js.Int.toString e)
end

external compare_boundary_points : strategy:int -> source:t -> int
  = "compareBoundaryPoints"
[@@mel.send.pipe: t]

let compare_boundary_points ~strategy ~source range =
  compare_boundary_points
    ~strategy:(CompareStrategy.to_int strategy)
    ~source range

external delete_contents : unit = "deleteContents" [@@mel.send.pipe: t]

external extract_contents : Document_fragment.t = "extractContents"
[@@mel.send.pipe: t]

external clone_contents : Document_fragment.t = "cloneContents"
[@@mel.send.pipe: t]

external insert_node : Private.node -> unit = "insertNode" [@@mel.send.pipe: t]

external surround_contents : Private.node -> unit = "surroundContents"
[@@mel.send.pipe: t]

external clone_range : t = "cloneRange" [@@mel.send.pipe: t]
external detach : unit = "detach" [@@mel.send.pipe: t]

external is_point_in_range : Private.node -> offset:int -> bool
  = "isPointInRange"
[@@mel.send.pipe: t]

external compare_point : Private.node -> offset:int -> int = "comparePoint"
[@@mel.send.pipe: t]

external intersects_node : Private.node -> bool = "intersectsNode"
[@@mel.send.pipe: t]

external to_string : string = "toString" [@@mel.send.pipe: t]

include Abstract_range.Make (struct
  type nonrec t = t
end)

(* TODO *)

external create_contextual_fragment : string -> Document_fragment.t
  = "createContextualFragment"
[@@mel.send.pipe: t]
