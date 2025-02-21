type 'a t = 'a Private.iterable

external to_array : 'a t -> 'a array = "from" [@@mel.scope "Array"]
external to_set : 'a t -> 'a Private.set = "Set" [@@mel.new]

external group_by : 'a t -> f:(('a -> string)[@mel.uncurry]) -> 'a array Dict.t
  = "groupBy"
[@@mel.scope "Object"]
(** Group the items in the iterable into a Dict using the key returned by
    calling [f] on each item of the array. *)

external group_byi :
  'a t -> f:(('a -> int -> string)[@mel.uncurry]) -> 'a array Dict.t = "groupBy"
[@@mel.scope "Object"]
(** Group the items in the iterable into a Dict using the key returned by
    calling [f] on each item of the array. *)

let iterator : 'a t -> 'a Private.iterator = Mixins.Unsafe.iterator
