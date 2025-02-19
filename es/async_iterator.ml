type 'a t

external next : 'a t -> 'a Iterator_result.t Promise.t = "next" [@@mel.send]
