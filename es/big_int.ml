(** Arbitrary-precision unsigned integers. *)

type t

external of_int : int -> t = "BigInt"
(** Creates a BigInt from an int. *)

external of_string : string -> t = "BigInt"
(** Parses a string into a BigInt. *)

external as_int_n : t -> bits:int -> int = "asIntN"
[@@mel.scope "BigInt"]
(** Clamps a BigInt value to a signed integer value. *)

external as_uint_n : t -> bits:int -> int = "asUintN"
[@@mel.scope "BigInt"]
(** Clamps a BitInt value to an unsigned integer value. *)

external to_string : ?radix:int -> (t[@mel.this]) -> string = "toString"
[@@mel.send]
(** Returns a string representing the BigInt value in the specified radix
    ("base"). *)

external to_locale_string :
  ?locales:string ->
  ?options:Intl.number_format_options ->
  (t[@mel.this]) ->
  string = "toLocaleString"
[@@mel.send]
(** Returns a string with a language-sensitive representation of the BigInt. *)

external ( = ) : t -> t -> bool = "%equal"
external ( <> ) : t -> t -> bool = "%notequal"
external equal : t -> t -> bool = "%equal"
external ( < ) : t -> t -> bool = "%lessthan"
external ( > ) : t -> t -> bool = "%greaterthan"
external ( <= ) : t -> t -> bool = "%lessequal"
external ( >= ) : t -> t -> bool = "%greaterequal"
external compare : t -> t -> t = "%compare"
external ( + ) : t -> t -> t = "%addint"
external ( - ) : t -> t -> t = "%subint"
external ( ~- ) : t -> t = "%negint"
external ( * ) : t -> t -> t = "%mulint"
external ( / ) : t -> t -> t = "%divint"
external ( ** ) : t -> t -> t = "pow" [@@mel.scope "Math"]
external ( lsl ) : t -> t -> t = "%lslint"
external ( lor ) : t -> t -> t = "%orint"
external ( land ) : t -> t -> t = "%andint"
external ( mod ) : t -> t -> t = "%modint"
external ( lsr ) : t -> t -> t = "%lsrint"
external ( lxor ) : t -> t -> t = "%xorint"
external ( asr ) : t -> t -> t = "%asrint"
