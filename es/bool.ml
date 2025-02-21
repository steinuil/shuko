(** Operations on JavaScript booleans. *)

type t = bool

external to_string : t -> string = "toString" [@@mel.send]
