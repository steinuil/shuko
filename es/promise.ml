type 'a t

external make :
  ((resolve:(('a -> unit)[@u]) -> reject:((_ -> unit)[@u]) -> _)[@mel.uncurry]) ->
  'a t = "Promise"
[@@mel.new]

external resolve : 'a -> 'a t = "resolve" [@@mel.scope "Promise"]
external reject : _ -> 'a t = "reject" [@@mel.scope "Promise"]

external flat_then :
  f:('a -> 'b t) -> ?catch:('err -> 'b t) -> ('a t[@mel.this]) -> 'b t = "then"
[@@mel.send]

external then_ :
  f:('a -> 'b) -> ?catch:('err -> 'b t) -> ('a t[@mel.this]) -> 'b t = "then"
[@@mel.send]

external flat_catch : f:('err -> 'b t) -> ('a t[@mel.this]) -> 'b t = "catch"
[@@mel.send]

external catch : f:('err -> 'b) -> ('a t[@mel.this]) -> 'b t = "catch"
[@@mel.send]

external flatten : 'a t t -> 'a t = "%identity"

external finally : f:(unit -> _) -> ('a t[@mel.this]) -> 'a t = "finally"
[@@mel.send]
