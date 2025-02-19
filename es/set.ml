type 'a t = 'a Private.set

external empty : unit -> 'a t = "Set"
[@@mel.new]
(** Creates a new [Set] object. *)

external of_iterable : 'a Iterable.t -> 'a t = "Set"
[@@mel.new]
(** Create a new [Set] object from the values in the {!Iterable.t}. *)

external size : _ t -> int = "size"
[@@mel.get]
(** The number of values in the set. *)

external has : 'a -> ('a t[@mel.this]) -> bool = "has"
[@@mel.send]
(** Returns a boolean asserting whether an element is present with the given
    value in the set or not. *)

external add : 'a -> ('a t[@mel.this]) -> 'a t = "add"
[@@mel.send]
(** Inserts a new element with a specified value in to a set, if there isn't an
    element with the same value already in the set. *)

external clear : ('a t[@mel.this]) -> unit = "clear"
[@@mel.send]
(** Removes all elements from the set. *)

external delete : 'a -> ('a t[@mel.this]) -> bool = "delete"
[@@mel.send]
(** Removes the element associated to the [value] and returns a boolean
    asserting whether an element was successfully removed or not.
    {{!has} has value} will return [false] afterwards. *)

external for_each : f:('a -> _) -> ('a t[@mel.this]) -> unit = "forEach"
[@@mel.send]
(** Calls [f] once for each value present in the set, in insertion order. *)

external union : other:'a t -> ('a t[@mel.this]) -> 'a t = "union"
[@@mel.send]
(** Takes a set and returns a new set containing elements which are in either or
    both of this set and the given set. *)

external difference : other:'a t -> ('a t[@mel.this]) -> 'a t = "difference"
[@@mel.send]
(** Takes a set and returns a new set containing elements in this set but not in
    the [other] set. *)

external symmetric_difference : other:'a t -> ('a t[@mel.this]) -> 'a t
  = "symmetricDifference"
[@@mel.send]
(** Takes a set and returns a new set containing elements which are in either
    this set or the given set, but not in both. *)

external intersection : other:'a t -> ('a t[@mel.this]) -> 'a t = "intersection"
[@@mel.send]
(** Takes a set and returns a new set containing elements in both this set and
    the given set. *)

external is_disjoint_from : other:'a t -> ('a t[@mel.this]) -> bool
  = "isDisjointFrom"
[@@mel.send]
(** Takes a set and returns a boolean indicating if this set has no elements in
    common with the given set. *)

external is_subset_of : other:'a t -> ('a t[@mel.this]) -> bool = "isSubsetOf"
[@@mel.send]
(** Takes a set and returns a boolean indicating if all elements of this set are
    in the given set. *)

external is_superset_of : other:'a t -> ('a t[@mel.this]) -> bool
  = "isSupersetOf"
[@@mel.send]
(** Takes a set and returns a boolean indicating if all elements of the given
    set are in this set. *)

(** {2 Iterator impls} *)

external as_iterable : 'a t -> 'a Iterable.t = "%identity"
(** Cast to {!Iterable.t}. *)

external values : 'a t -> 'a Iterator.t = "values"
[@@mel.send]
(** Returns a new iterator object that yields the values for each element in the
    set in insertion order. *)

(** Returns a new iterator object that yields the values for each element in the
    set in insertion order. *)
let iterator : 'a t -> 'a Iterator.t = Mixins.Unsafe.iterator
