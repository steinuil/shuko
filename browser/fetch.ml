external fetch : string -> ?init:Request.init -> unit -> Response.t Js.Promise.t
  = "fetch"

let fetch url ?method' ?body headers ?referrer ?referrer_policy ?mode
    ?credentials ?cache ?redirect ?integrity ?keepalive ?signal () =
  fetch url
    ~init:
      (Request.init ?_method:method' ?headers ?body ?referrer
         ?referrerPolicy:
           (Option.map Request.ReferrerPolicy.to_string referrer_policy)
         ?mode:(Option.map Request.Mode.to_string mode)
         ?credentials:(Option.map Request.Credentials.to_string credentials)
         ?cache:(Option.map Request.Cache.to_string cache)
         ?redirect:(Option.map Request.Redirect.to_string redirect)
         ?integrity ?keepalive ?signal ())
    ()
