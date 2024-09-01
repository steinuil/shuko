type t

(* TODO constructor *)

external data : t -> 'a = "data" [@@mel.get]
external origin : t -> string = "origin" [@@mel.get]
external last_event_id : t -> string = "lastEventId" [@@mel.get]

(* TODO *)
