type +'a t = 'a Private.nullable

external null : 'a t = "#null"
external undefined : 'a t = "#undefined"
external is_nullable : 'a t -> bool = "#is_nullable"
external unsafe_get : 'a t -> 'a = "%identity"
external make : 'a -> 'a t = "%identity"
