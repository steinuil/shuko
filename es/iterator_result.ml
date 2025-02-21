type 'a t
(** An object implementing the IteratorResult protocol. Returned from iterator
    protocol methods. *)

external done_ : _ t -> bool option = "done"
[@@mel.get] [@@mel.return undefined_to_opt]
(** A value that's [Some false] or [None] if the iterator was able to produce
    the next value in the sequence.

    Has the value [Some true] if the iterator has completed its sequence. *)

external value : 'a t -> 'a option = "value"
[@@mel.get] [@@mel.return undefined_to_opt]
(** Any value returned by the iterator. *)

external continue : value:'a -> 'a t = ""
[@@mel.obj]
(** Construct an iterator result that returns a value. *)

(** Construct an iterator result that stops the iterator. *)
let stop () : 'a t = [%mel.raw {|{ done: true }|}]
