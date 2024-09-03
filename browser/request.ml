module Method = struct
  type t =
    | Get
    | Head
    | Post
    | Put
    | Delete
    | Connect
    | Options
    | Trace
    | Patch
    | Other of string

  let to_string = function
    | Get -> "GET"
    | Head -> "HEAD"
    | Post -> "POST"
    | Put -> "PUT"
    | Delete -> "DELETE"
    | Connect -> "CONNECT"
    | Options -> "OPTIONS"
    | Trace -> "TRACE"
    | Patch -> "PATCH"
    | Other method_ -> method_

  let of_string = function
    | "GET" -> Get
    | "HEAD" -> Head
    | "POST" -> Post
    | "PUT" -> Put
    | "DELETE" -> Delete
    | "CONNECT" -> Connect
    | "OPTIONS" -> Options
    | "TRACE" -> Trace
    | "PATCH" -> Patch
    | method_ -> Other method_
end

module Destination = struct
  type t =
    | Default
    | Audio
    | AudioWorklet
    | Document
    | Embed
    | Font
    | Frame
    | IFrame
    | Image
    | Json
    | Manifest
    | Object
    | PaintWorklet
    | Report
    | Script
    | SharedWorker
    | Style
    | Track
    | Video
    | Worker
    | Xslt

  let to_string = function
    | Default -> ""
    | Audio -> "audio"
    | AudioWorklet -> "audioworklet"
    | Document -> "document"
    | Embed -> "embed"
    | Font -> "font"
    | Frame -> "frame"
    | IFrame -> "iframe"
    | Image -> "image"
    | Json -> "json"
    | Manifest -> "manifest"
    | Object -> "object"
    | PaintWorklet -> "paintworklet"
    | Report -> "report"
    | Script -> "script"
    | SharedWorker -> "sharedworker"
    | Style -> "style"
    | Track -> "track"
    | Video -> "video"
    | Worker -> "worker"
    | Xslt -> "xslt"

  let of_string = function
    | "" -> Default
    | "audio" -> Audio
    | "audioworklet" -> AudioWorklet
    | "document" -> Document
    | "embed" -> Embed
    | "font" -> Font
    | "frame" -> Frame
    | "iframe" -> IFrame
    | "image" -> Image
    | "json" -> Json
    | "manifest" -> Manifest
    | "object" -> Object
    | "paintworklet" -> PaintWorklet
    | "report" -> Report
    | "script" -> Script
    | "sharedworker" -> SharedWorker
    | "style" -> Style
    | "track" -> Track
    | "video" -> Video
    | "worker" -> Worker
    | "xslt" -> Xslt
    | e -> invalid_arg ("Unknown RequestDestination: " ^ e)
end

module ReferrerPolicy = struct
  type t =
    | Default
    | NoReferrer
    | NoReferrerWhenDowngrade
    | SameOrigin
    | Origin
    | StrictOrigin
    | OriginWhenCrossOrigin
    | StrictOriginWhenCrossOrigin
    | UnsafeUrl

  let to_string = function
    | Default -> ""
    | NoReferrer -> "no-referrer"
    | NoReferrerWhenDowngrade -> "no-referrer-when-downgrade"
    | SameOrigin -> "same-origin"
    | Origin -> "origin"
    | StrictOrigin -> "strict-origin"
    | OriginWhenCrossOrigin -> "origin-when-cross-origin"
    | StrictOriginWhenCrossOrigin -> "strict-origin-when-cross-origin"
    | UnsafeUrl -> "unsafe-url"

  let of_string = function
    | "" -> Default
    | "no-referrer" -> NoReferrer
    | "no-referrer-when-downgrade" -> NoReferrerWhenDowngrade
    | "same-origin" -> SameOrigin
    | "origin" -> Origin
    | "strict-origin" -> StrictOrigin
    | "origin-when-cross-origin" -> OriginWhenCrossOrigin
    | "strict-origin-when-cross-origin" -> StrictOriginWhenCrossOrigin
    | "unsafe-url" -> UnsafeUrl
    | e -> invalid_arg ("Unknown ReferrerPolicy: " ^ e)
end

module Mode = struct
  type t = Navigate | SameOrigin | NoCors | Cors

  let to_string = function
    | Navigate -> "navigate"
    | SameOrigin -> "same-origin"
    | NoCors -> "no-cors"
    | Cors -> "cors"

  let of_string = function
    | "navigate" -> Navigate
    | "same-origin" -> SameOrigin
    | "no-cors" -> NoCors
    | "cors" -> Cors
    | e -> invalid_arg ("Unknown RequestMode: " ^ e)
end

module Credentials = struct
  type t = Omit | SameOrigin | Include

  let to_string = function
    | Omit -> "omit"
    | SameOrigin -> "same-origin"
    | Include -> "include"

  let of_string = function
    | "omit" -> Omit
    | "same-origin" -> SameOrigin
    | "include" -> Include
    | e -> invalid_arg ("Unknown RequestCredentials: " ^ e)
end

module Cache = struct
  type t = Default | NoStore | Reload | NoCache | ForceCache | OnlyIfCached

  let to_string = function
    | Default -> "default"
    | NoStore -> "no-store"
    | Reload -> "reload"
    | NoCache -> "no-cache"
    | ForceCache -> "force-cache"
    | OnlyIfCached -> "only-if-cached"

  let of_string = function
    | "default" -> Default
    | "no-store" -> NoStore
    | "reload" -> Reload
    | "no-cache" -> NoCache
    | "force-cache" -> ForceCache
    | "only-if-cached" -> OnlyIfCached
    | e -> invalid_arg ("Unknown RequestCache: " ^ e)
end

module Redirect = struct
  type t = Follow | Error | Manual

  let to_string = function
    | Follow -> "follow"
    | Error -> "error"
    | Manual -> "manual"

  let of_string = function
    | "follow" -> Follow
    | "error" -> Error
    | "manual" -> Manual
    | e -> invalid_arg ("Unknown RequestRedirect: " ^ e)
end

type t
type init

external init :
  ?method_:string ->
  ?body:Body.t ->
  ?headers:Headers.t ->
  ?referrer:string ->
  ?referrerPolicy:string ->
  ?mode:string ->
  ?credentials:string ->
  ?cache:string ->
  ?redirect:string ->
  ?integrity:string ->
  ?keepalive:bool ->
  ?signal:Abort_signal.t ->
  unit ->
  init = ""
[@@mel.obj]

external create : string -> ?init:init -> unit -> t = "Request" [@@mel.new]

let create url ?method_ ?body ?headers ?referrer ?referrer_policy ?mode
    ?credentials ?cache ?redirect ?integrity ?keepalive ?signal () =
  create url
    ~init:
      (init ?method_ ?headers ?body ?referrer
         ?referrerPolicy:(Option.map ReferrerPolicy.to_string referrer_policy)
         ?mode:(Option.map Mode.to_string mode)
         ?credentials:(Option.map Credentials.to_string credentials)
         ?cache:(Option.map Cache.to_string cache)
         ?redirect:(Option.map Redirect.to_string redirect)
         ?integrity ?keepalive ?signal ())
    ()

external method_ : t -> string = "method" [@@mel.get]

let method_ req = Method.of_string (method_ req)

external url : t -> string = "url" [@@mel.get]
external headers : t -> Headers.t = "headers" [@@mel.get]
external destination : t -> string = "destination" [@@mel.get]

let destination req = Destination.of_string (destination req)

external referrer : t -> string = "referrer" [@@mel.get]
external referrer_policy : t -> string = "referrerPolicy" [@@mel.get]

let referrer_policy req = ReferrerPolicy.of_string (referrer_policy req)

external mode : t -> string = "mode" [@@mel.get]

let mode req = Mode.of_string (mode req)

external credentials : t -> string = "credentials" [@@mel.get]

let credentials req = Credentials.of_string (credentials req)

external cache : t -> string = "cache" [@@mel.get]

let cache req = Cache.of_string (cache req)

external redirect : t -> string = "redirect" [@@mel.get]

let redirect req = Redirect.of_string (redirect req)

external integrity : t -> string = "integrity" [@@mel.get]
external keepalive : t -> bool = "keepalive" [@@mel.get]
external is_reload_navigation : t -> bool = "isReloadNavigation" [@@mel.get]
external is_history_navigation : t -> bool = "isHistoryNavigation" [@@mel.get]
external signal : t -> Abort_signal.t = "signal" [@@mel.get]
external copy : t -> t = "clone" [@@mel.send]

include Body_mixin.Make (struct
  type nonrec t = t
end)
