external log : 'a -> unit = "log" [@@mel.scope "console"]

external log_many : 'a array -> unit = "log"
[@@mel.scope "console"] [@@mel.variadic]

external debug : 'a -> unit = "debug" [@@mel.scope "console"]

external debug_many : 'a array -> unit = "debug"
[@@mel.scope "console"] [@@mel.variadic]

external info : 'a -> unit = "info" [@@mel.scope "console"]

external info_many : 'a array -> unit = "info"
[@@mel.scope "console"] [@@mel.variadic]

external warn : 'a -> unit = "warn" [@@mel.scope "console"]

external warn_many : 'a array -> unit = "warn"
[@@mel.scope "console"] [@@mel.variadic]

external error : 'a -> unit = "error" [@@mel.scope "console"]

external error_many : 'a array -> unit = "error"
[@@mel.scope "console"] [@@mel.variadic]

external assert_ : bool -> message:'a -> unit = "assert" [@@mel.scope "console"]

external assert_many : bool -> messages:'a array -> unit = "assert"
[@@mel.scope "console"] [@@mel.variadic]

external clear : unit -> unit = "clear" [@@mel.scope "console"]
external count : ?label:string -> unit -> unit = "count" [@@mel.scope "console"]

external count_reset : ?label:string -> unit -> unit = "countReset"
[@@mel.scope "console"]

external dir : 'a -> unit = "dir" [@@mel.scope "console"]
external dirxml : 'a -> unit = "dirxml" [@@mel.scope "console"]
external group : ?label:string -> unit -> unit = "group" [@@mel.scope "console"]

external group_end : ?label:string -> unit -> unit = "group_end"
[@@mel.scope "groupEnd"]

external table : 'a -> unit = "table" [@@mel.scope "console"]
external time : ?label:string -> unit -> unit = "time" [@@mel.scope "console"]

external time_end : ?label:string -> unit -> unit = "timeEnd"
[@@mel.scope "console"]

external time_log : ?label:string -> unit -> unit = "timeLog"
[@@mel.scope "console"]

external trace : unit -> unit = "trace" [@@mel.scope "console"]
