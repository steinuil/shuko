type t

external result_type : t -> int = "resultType" [@@mel.get]
external number_value : t -> float = "numberValue" [@@mel.get]
external string_value : t -> string = "stringValue" [@@mel.get]
external boolean_value : t -> bool = "booleanValue" [@@mel.get]

external single_node_value : t -> Private.node option = "singleNodeValue"
[@@mel.get] [@@mel.return nullable]

external invalid_iterator_state : t -> bool = "invalidIteratorState" [@@mel.get]
external snapshot_length : t -> int = "snapshotLength" [@@mel.get]

external iterate_next : t -> Private.node option = "iterateNext"
[@@mel.send] [@@mel.return nullable]

external snapshot_item : int -> Private.node option = "snapshotItem"
[@@mel.send.pipe: t] [@@mel.return nullable]

(* TODO can we make a nicer type-safe API? *)
