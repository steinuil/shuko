type 'a iterable
type 'a async_iterable

external to_array : 'a iterable -> 'a array = "from" [@@mel.scope "Array"]
external to_set : 'a iterable -> 'a Js.Set.t = "Set" [@@mel.new]

module Symbol_iterator (T : sig
  type t
  type value
end) =
struct
  let iterator : T.t -> T.value Iterator.t =
    [%mel.raw {js|function(t) { return t[Symbol.iterator](); }|js}]

  external to_iterable : T.t -> T.value iterable = "%identity"
end

module Symbol_async_iterator (T : sig
  type t
  type value
end) =
struct
  let async_iterator : T.t -> T.value Async_iterator.t =
    [%mel.raw {js|function(t) { return t[Symbol.asyncIterator](); }|js}]

  external to_async_iterable : T.t -> T.value async_iterable = "%identity"
end

module Value (T : sig
  type t
  type value
end) =
struct
  external keys : int Iterator.t = "keys" [@@mel.send.pipe: T.t]
  external values : T.value Iterator.t = "values" [@@mel.send.pipe: T.t]

  include Symbol_iterator (struct
    type nonrec t = T.t
    type nonrec value = T.value
  end)
end

module Pair (T : sig
  type t
  type key
  type value
end) =
struct
  external entries : (T.key * T.value) Iterator.t = "entries"
  [@@mel.send.pipe: T.t]

  external values : T.value Iterator.t = "values" [@@mel.send.pipe: T.t]
  external keys : T.key Iterator.t = "keys" [@@mel.send.pipe: T.t]

  include Symbol_iterator (struct
    type nonrec t = T.t
    type nonrec value = T.key * T.value
  end)
end
