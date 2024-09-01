type t

include Event.Make (struct
  type nonrec t = t
end)

(* TODO constructor *)

external was_clean : t -> bool = "wasClean" [@@mel.get]
external code : t -> int = "code" [@@mel.get]
external reason : t -> string = "reason" [@@mel.get]
