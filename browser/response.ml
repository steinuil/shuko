type t
type init

external init :
  ?status:int -> ?statusText:string -> headers:Headers.t -> unit -> init = ""
[@@mel.obj]

external create : ?body:Body.t -> ?init:init -> unit -> t = "Response"
[@@mel.new]

let create ?body ?status ?status_text ?headers () =
  create ?body
    ?init:
      (Option.map
         (fun headers -> init ?status ?statusText:status_text ~headers ())
         headers)
    ()

external error : unit -> t = "error" [@@mel.scope "Response"]

external redirect : string -> ?status:int -> unit -> t = "redirect"
[@@mel.scope "Response"]

external of_json : Js.Json.t -> ?init:init -> unit -> t = "json"
[@@mel.scope "Response"]

external type_ :
  t -> [ `basic | `cors | `default | `error | `opaque | `opaqueredirect ]
  = "type"
[@@mel.get]

external url : t -> string = "url" [@@mel.get]
external redirected : t -> bool = "redirected" [@@mel.get]
external status : t -> int = "status" [@@mel.get]
external ok : t -> bool = "ok" [@@mel.get]
external status_text : t -> string = "statusText" [@@mel.get]
external headers : t -> Headers.t = "headers" [@@mel.get]
external copy : t -> t = "clone" [@@mel.send]

include Body_mixin.Make (struct
  type nonrec t = t
end)
