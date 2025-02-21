(** Mutable single-type dictionaries.

    An abstraction over JavaScript objects. *)

type 'a t
(** A JavaScript [Object] representing the [Dict]. *)

external empty : unit -> 'a t = ""
[@@mel.obj]
(** Creates an empty dictionary. *)

external of_array : (string * 'a) array -> 'a t = "fromEntries"
[@@mel.scope "Object"]
(** Returns a new dict from an array of (key, value) pairs. *)

external of_iterable : (string * 'a) Private.iterable -> 'a t = "fromEntries"
[@@mel.scope "Object"]
(** Returns a new dict from an iterable of (key, value) pairs. *)

external get : 'a t -> key:string -> 'a option = ""
[@@mel.get_index] [@@mel.return undefined_to_opt]
(** Gets an element from the array at the given [index]. *)

external set : 'a t -> key:string -> value:'a -> 'a = ""
[@@mel.set_index]
(** Sets the item at [index] to [value]. Returns the value that was set. *)

external ( .%[] ) : 'a t -> string -> 'a option = ""
[@@mel.get_index] [@@mel.return undefined_to_opt]
(** Convenience alias to {!get}, can be used as [dict.%["a"]]. *)

external ( .%[]<- ) : 'a t -> string -> 'a -> 'a = ""
[@@mel.set_index]
(** Convenience alias to {!set}, can be used as [dict.%["a"] <- value]. *)

external entries : 'a t -> (string * 'a) array = "entries"
[@@mel.scope "Object"]
(** Returns an array containing the Dict's (key, value) pairs. *)

external values : 'a t -> 'a array = "values"
[@@mel.scope "Object"]
(** Returns an array containing the values of the Dict. *)

external keys : 'a t -> 'a array = "keys"
[@@mel.scope "Object"]
(** Returns an array containing the keys of the Dict. *)
