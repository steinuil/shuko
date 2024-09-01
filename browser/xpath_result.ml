type t

module Type = struct
  type t =
    | Any
    | Number
    | String
    | Boolean
    | Unordered_node_iterator
    | Ordered_node_iterator
    | Unordered_node_snapshot
    | Ordered_node_snapshot
    | Any_ordered_node
    | First_ordered_node

  let to_int = function
    | Any -> 0
    | Number -> 1
    | String -> 2
    | Boolean -> 3
    | Unordered_node_iterator -> 4
    | Ordered_node_iterator -> 5
    | Unordered_node_snapshot -> 6
    | Ordered_node_snapshot -> 7
    | Any_ordered_node -> 8
    | First_ordered_node -> 9

  let of_int = function
    | 0 -> Any
    | 1 -> Number
    | 2 -> String
    | 3 -> Boolean
    | 4 -> Unordered_node_iterator
    | 5 -> Ordered_node_iterator
    | 6 -> Unordered_node_snapshot
    | 7 -> Ordered_node_snapshot
    | 8 -> Any_ordered_node
    | 9 -> First_ordered_node
    | e -> invalid_arg ("Unknown XPathResult type: " ^ Js.Int.toString e)
end

external result_type : t -> int = "resultType" [@@mel.get]
external number_value : t -> float = "numberValue" [@@mel.get]
external string_value : t -> string = "stringValue" [@@mel.get]
external boolean_value : t -> bool = "booleanValue" [@@mel.get]

external single_node_value : t -> Private.node option = "singleNodeValue"
[@@mel.get] [@@mel.return nullable]

external invalid_iterator_state : t -> bool = "invalidIteratorState" [@@mel.get]
external snapshot_length : t -> int = "snapshotLength" [@@mel.get]

external iterate_next : Private.node option = "iterateNext"
[@@mel.send.pipe: t] [@@mel.return nullable]

external snapshot_item : int -> Private.node option = "snapshotItem"
[@@mel.send.pipe: t] [@@mel.return nullable]

(* TODO can we make a nicer type-safe API? *)
