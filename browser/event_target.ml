type t = Private.event_target

external create : unit -> t = "EventTarget" [@@mel.new]
