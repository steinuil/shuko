type t

include Character_data.Make (struct
  type nonrec t = t
end)

external target : t -> string = "target" [@@mel.get]

(* TODO LinkStyle *)
