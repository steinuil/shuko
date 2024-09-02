type t

external name : t -> string = "name" [@@mel.get]
external value : t -> float = "value" [@@mel.get]
