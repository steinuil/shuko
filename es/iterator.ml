type 'a t = 'a Private.iterator

external next : 'a t -> 'a Iterator_result.t = "next" [@@mel.send]
external as_iterable : 'a t -> 'a Iterable.t = "%identity"
