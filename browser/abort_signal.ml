type t

(* TODO include EventTarget *)

external abort : ?reason:'a -> unit -> t = "abort" [@@mel.scope "AbortSignal"]
external timeout : ms:float -> t = "timeout" [@@mel.scope "AbortSignal"]
external any : t array -> t = "_any" [@@mel.scope "AbortSignal"]
external aborted : t -> bool = "aborted" [@@mel.get]

(* FIXME is there a better way to do this? *)
external reason : t -> 'a = "reason" [@@mel.get]
external throw_if_aborted : 'a = "throwIfAborted" [@@mel.send.pipe: t]

(* TODO onabort *)
