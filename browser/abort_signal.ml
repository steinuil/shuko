type t

external aborted : t -> bool = "aborted" [@@mel.get]

(* external reason : t -> *)
external throw_if_aborteed : 'a = "throwIfAborted" [@@mel.send.pipe: t]
