[@@@mel.config { flags = [| "-unboxed-types" |] }]

module Number = Number

module String = struct
  type t = string
end

module Float = struct
  type t = float

  external epsilon : float = "EPSILON" [@@mel.scope "Number"]
end

module Int = struct
  type t = int

  external is_nan : int -> bool = "isNaN" [@@mel.scope "Number"]

  external to_exponential : ?digits:int -> string = "toExponential"
  [@@mel.send.pipe: int]

  external to_precision : ?digits:int -> string = "toPrecision"
  [@@mel.send.pipe: int]

  external to_string : ?radix:int -> string = "toString" [@@mel.send.pipe: t]
  external unsafe_from_string : string -> int = "Number"
  external is_integer : int -> bool = "isInteger" [@@mel.scope "Number"]

  external is_safe_integer : int -> bool = "isSafeInteger"
  [@@mel.scope "Number"]

  external to_float : int -> float = "%identity"
  external ( = ) : int -> int -> bool = "%equal"
  external ( <> ) : int -> int -> bool = "%notequal"
  external equal : int -> int -> bool = "%equal"
  external ( < ) : int -> int -> bool = "%lessthan"
  external ( > ) : int -> int -> bool = "%greaterthan"
  external ( <= ) : int -> int -> bool = "%lessequal"
  external ( >= ) : int -> int -> bool = "%greaterequal"
  external compare : int -> int -> int = "%compare"
  external ( + ) : int -> int -> int = "%addint"
  external ( - ) : int -> int -> int = "%subint"
  external ( ~- ) : int -> int = "%negint"
  external ( * ) : int -> int -> int = "%mulint"
  external ( / ) : int -> int -> int = "%divint"
  external ( ** ) : int -> int -> int = "pow" [@@mel.scope "Math"]
  external ( lsl ) : int -> int -> int = "%lslint"
  external ( lor ) : int -> int -> int = "%orint"
  external ( land ) : int -> int -> int = "%andint"
  external ( mod ) : int -> int -> int = "%modint"
  external ( lsr ) : int -> int -> int = "%lsrint"
  external ( lxor ) : int -> int -> int = "%xorint"
  external ( asr ) : int -> int -> int = "%asrint"
  external abs : int -> int = "abs" [@@mel.scope "Math"]
  external clz32 : int -> int = "clz32" [@@mel.scope "Math"]
end
