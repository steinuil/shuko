type +'a t = 'a Private.null

external null : 'a t = "#null"
external to_option : 'a t -> 'a option = "#null_to_opt"
external is_null : 'a t -> bool = "#is_nullable"
