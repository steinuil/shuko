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

external of_entries : (string * 'a) array -> 'a t = "fromEntries"
[@@mel.scope "Object"]
(** Returns a new dict from an iterable of (key, value) pairs. *)

external entries : 'a t -> (string * 'a) array = "entries"
[@@mel.scope "Object"]

external values : 'a t -> 'a array = "values" [@@mel.scope "Object"]
external keys : 'a t -> 'a array = "keys" [@@mel.scope "Object"]
