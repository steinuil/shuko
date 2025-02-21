module Console = Console

type timeout_id

external set_timeout :
  f:((unit -> _)[@mel.uncurry]) -> delay_ms:int -> timeout_id = "setTimeout"

external clear_timeout : timeout_id -> unit = "clearTimeout"

type interval_id

external set_interval :
  f:((unit -> _)[@mel.uncurry]) -> delay_ms:int -> interval_id = "setInterval"

external clear_interval : interval_id -> unit = "clearInterval"

type animation_frame_id

external request_animation_frame :
  f:((unit -> _)[@mel.uncurry]) -> animation_frame_id = "requestAnimationFrame"

external cancel_animation_frame : animation_frame_id -> unit
  = "cancelAnimationFrame"

type idle_callback_id
type idle_callback_options = { timeout : int }

external request_idle_callback :
  f:((unit -> _)[@mel.uncurry]) ->
  ?options:idle_callback_options ->
  idle_callback_id = "requestIdleCallback"

external cancel_idle_callback : idle_callback_id -> unit = "cancelIdleCallback"
