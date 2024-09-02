type t

(* TODO include StyleSheet *)

type init

external init :
  ?baseURL:string -> ?media:string -> ?disabled:bool -> unit -> init = ""
[@@mel.obj]

external create : init -> t = "CSSStyleSheet" [@@mel.new]

(* TODO ownerRule, cssRules, insertRule *)

external delete_rule : int -> unit = "deleteRule" [@@mel.send.pipe: t]
external replace : string -> t Js.Promise.t = "replace" [@@mel.send.pipe: t]
external replace_sync : string -> unit = "replaceSync" [@@mel.send.pipe: t]

(* TODO rules *)

external add_rule : ?selector:string -> ?style:string -> ?index:int -> int
  = "addRule"
[@@mel.send.pipe: t]

external remove_rule : ?index:int -> unit = "removeRule" [@@mel.send.pipe: t]
