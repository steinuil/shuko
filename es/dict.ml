type 'a t

external empty : unit -> 'a t = ""
[@@mel.obj]
(** Creates an empty dictionary. *)

external get : 'a t -> key:string -> 'a option = ""
[@@mel.get_index] [@@mel.return undefined_to_opt]
(** Gets an element from the array at the given [index]. *)

external set : 'a t -> key:string -> value:'a -> unit = ""
[@@mel.set_index]
(** Sets the item at [index] to [value]. *)

external entries : 'a t -> (string * 'a) Iterator.t = "entries" [@@mel.send]
external values : 'a t -> 'a Iterator.t = "values" [@@mel.send]
external keys : 'a t -> 'a Iterator.t = "keys" [@@mel.send]
