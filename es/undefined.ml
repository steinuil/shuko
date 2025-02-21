(** The primitive value [undefined]. *)

type +'a t = 'a Private.undefined

external undefined : 'a t = "#undefined"
external nullable : 'a Private.nullable = "#undefined"
