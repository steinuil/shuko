type 'a t

external next : 'a t -> 'a Iterator_result.t Js.Promise.t = "next" [@@mel.send]
