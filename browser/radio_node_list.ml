type t

include Node_list.Make (struct
  type nonrec t = t
end)

external value : t -> string = "value" [@@mel.get]
