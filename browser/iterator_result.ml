type 'a t

external done_ : _ t -> bool option = "done" [@@mel.get] [@@mel.return nullable]
external value : 'a t -> 'a option = "value" [@@mel.get] [@@mel.return nullable]
