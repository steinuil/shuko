(** Safe integer operations for working with JS integer [Number]s. *)

type t = int

external max_safe_integer : t = "MAX_SAFE_INTEGER"
[@@mel.scope "Number"]
(** The maximum safe integer in JavaScript (2{^ 53} - 1). *)

external min_safe_integer : t = "MIN_SAFE_INTEGER"
[@@mel.scope "Number"]
(** The minimum safe integer in JavaScript (-(2{^ 53} - 1)). *)

external unsafe_of_string : string -> ?radix:int -> t = "parseInt"
[@@mel.scope "Number"]
(** Parses a string containing a number literal using parseInt.
    @return NaN on failure. *)

external as_float : t -> float = "%identity"
(** Casts an int value to float performing no conversion. *)

external to_string : ?radix:t -> (t[@mel.this]) -> string = "toString"
[@@mel.send]
(** Returns a string representing the specified object in the specified radix
    ("base"). *)

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

external clz32 : t -> t = "clz32"
[@@mel.scope "Math"]
(** Returns the number of leading zero bits of the 32-bit integer input. *)

external abs : t -> t = "abs"
[@@mel.scope "Math"]
(** Returns the absolute value of the input. *)

external imul : t -> t = "imul"
[@@mel.scope "Math"]
(** Returns the result of the 32-bit integer multiplication of the inputs. *)

external max : t array -> t = "max"
[@@mel.scope "Math"] [@@mel.variadic]
(** Returns the largest of zero or more numbers. *)

external min : t array -> t = "min"
[@@mel.scope "Math"] [@@mel.variadic]
(** Returns the smallest of zero or more numbers. *)

external sign : t -> t = "sign"
[@@mel.scope "Math"]
(** Returns the sign of the input, indicating whether it is positive, negative,
    or zero. *)
