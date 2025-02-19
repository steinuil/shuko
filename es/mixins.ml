module Unsafe = struct
  let iterator : 'a =
    [%mel.raw {js|function(t) { return t[Symbol.iterator](); }|js}]
end

module Symbol_iterator (T : sig
  type t
  type value
end) =
struct
  (** Returns a new iterator object. *)
  let iterator : T.t -> T.value Iterator.t = Unsafe.iterator

  external as_iterable : T.t -> T.value Iterable.t = "%identity"
end

module Symbol_async_iterator (T : sig
  type t
  type value
end) =
struct
  let async_iterator : T.t -> T.value Async_iterator.t = Unsafe.iterator

  external as_async_iterable : T.t -> T.value Async_iterable.t = "%identity"
end

module Value_iterable (T : sig
  type t
  type value
end) =
struct
  external keys : T.t -> int Iterator.t = "keys" [@@mel.send]
  external values : T.t -> T.value Iterator.t = "values" [@@mel.send]

  include Symbol_iterator (struct
    type nonrec t = T.t
    type nonrec value = T.value
  end)
end

module Pair_iterable (T : sig
  type t
  type key
  type value
end) =
struct
  external entries : T.t -> (T.key * T.value) Iterator.t = "entries"
  [@@mel.send]

  external values : T.t -> T.value Iterator.t = "values" [@@mel.send]
  external keys : T.t -> T.key Iterator.t = "keys" [@@mel.send]

  include Symbol_iterator (struct
    type nonrec t = T.t
    type nonrec value = T.key * T.value
  end)
end
