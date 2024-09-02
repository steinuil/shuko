type t

external make : unit -> t = "AbortController" [@@mel.new]
external signal : t -> Abort_signal.t = "signal" [@@mel.get]
external abort : ?reason:'a -> unit = "abort" [@@mel.send.pipe: t]
