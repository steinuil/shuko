type t

(* TODO inherits EventTarget *)

external create : string -> ?protocols:string array -> unit -> t = "WebSocket"
[@@mel.new]

external url : t -> string = "url" [@@mel.get]

module Ready_state = struct
  type t = Connecting | Open | Closing | Closed

  let of_int = function
    | 0 -> Connecting
    | 1 -> Open
    | 2 -> Closing
    | 3 -> Closed
    | e -> invalid_arg ("Unknown WebSocket ReadyState: " ^ Js.Int.toString e)

  let to_int = function
    | Connecting -> 0
    | Open -> 1
    | Closing -> 2
    | Closed -> 3
end

external ready_state : t -> int = "readyState" [@@mel.get]

let ready_state s = Ready_state.of_int (ready_state s)

external buffered_amount : t -> int = "bufferedAmount" [@@mel.get]
external extensions : t -> string = "extensions" [@@mel.get]
external protocol : t -> string = "protocol" [@@mel.get]

external close : ?code:int -> ?reason:string -> unit -> unit = "close"
[@@mel.send.pipe: t]

external binary_type : t -> Binary_type.t = "binaryType" [@@mel.get]
external set_binary_type : t -> Binary_type.t -> unit = "binaryType" [@@mel.set]

external add_event_listener :
  ([ `_open of Event.t -> unit
   | `error of Event.t -> unit
   | `close of Close_event.t -> unit
   | `message of Message_event.t -> unit ]
  [@mel.string]) ->
  unit = "addEventListener"
[@@mel.send.pipe: t]

external remove_event_listener :
  ([ `_open of Event.t -> unit
   | `error of Event.t -> unit
   | `close of Close_event.t -> unit
   | `message of Message_event.t -> unit ]
  [@mel.string]) ->
  unit = "addEventListener"
[@@mel.send.pipe: t]

(* TODO send_buffer_source *)

external send_blob : Blob.t -> unit = "send" [@@mel.send.pipe: t]
external send_string : string -> unit = "send" [@@mel.send.pipe: t]
