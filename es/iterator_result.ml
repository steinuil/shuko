type 'a t
(** An object implementing the IteratorResult protocol. Returned from iterator
    protocol methods. *)

external done_ : _ t -> bool option = "done"
[@@mel.get] [@@mel.return nullable]
(** A value that's [Some false] or [None] if the iterator was able to produce
    the next value in the sequence.

    Has the value [Some true] if the iterator has completed its sequence. *)

external value : 'a t -> 'a option = "value"
[@@mel.get] [@@mel.return nullable]
(** Any value returned by the iterator. *)
