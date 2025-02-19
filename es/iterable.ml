type 'a t = 'a Private.iterable

external to_array : 'a t -> 'a array = "from" [@@mel.scope "Array"]
external to_set : 'a t -> 'a Private.set = "Set" [@@mel.new]

(* let iterator : 'a t -> 'a Iterator.t = Mixins.Unsafe.iterator *)
