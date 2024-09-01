type t
type event_init

external event_init :
  ?bubbles:bool -> ?cancelable:bool -> ?composed:bool -> unit -> event_init = ""
[@@mel.obj]

external create : string -> ?init:event_init -> unit -> t = "Event" [@@mel.new]

module Phase = struct
  type t = None | Capturing | At_target | Bubbling

  let to_int = function
    | None -> 0
    | Capturing -> 1
    | At_target -> 2
    | Bubbling -> 3

  let of_int = function
    | 0 -> None
    | 1 -> Capturing
    | 2 -> At_target
    | 3 -> Bubbling
    | e -> invalid_arg ("Unknown event phase: " ^ Js.Int.toString e)
end

module Make (T : sig
  type t
end) =
struct
  external to_event : T.t -> t = "%identity"

  let create ?bubbles ?cancelable ?composed type_ =
    create type_ ~init:(event_init ?bubbles ?cancelable ?composed ()) ()

  external type_ : T.t -> string = "type" [@@mel.get]

  external target : T.t -> Private.event_target option = "target"
  [@@mel.get] [@@mel.return nullable]

  external current_target : T.t -> Private.event_target option = "currentTarget"
  [@@mel.get] [@@mel.return nullable]

  external event_phase : T.t -> int = "eventPhase" [@@mel.get]

  let event_phase event = Phase.of_int (event_phase event)

  external stop_propagation : unit = "stopPropagation" [@@mel.send.pipe: t]

  external stop_immediate_propagation : unit = "stopImmediatePropagation"
  [@@mel.send.pipe: t]

  external bubbles : T.t -> bool = "bubbles" [@@mel.get]
  external cancelable : T.t -> bool = "cancelable" [@@mel.get]
  external prevent_default : unit = "preventDefault" [@@mel.send.pipe: t]
  external default_prevented : T.t -> bool = "defaultPrevented" [@@mel.get]
  external composed : T.t -> bool = "composed" [@@mel.get]
  external is_trusted : T.t -> bool = "isTrusted" [@@mel.get]
  external timestamp : T.t -> float = "timeStamp" [@@mel.get]
end

include Make (struct
  type nonrec t = t
end)
