type t
type config

external config :
  ?allowElements:string array ->
  ?blockElements:string array ->
  ?dropElements:string array ->
  ?allowAttributes:string array Js.Dict.t ->
  ?dropAttributes:string array Js.Dict.t ->
  ?allowCustomElements:bool ->
  ?allowUnknownMarkup:bool ->
  ?allowComments:bool ->
  unit ->
  config = ""
[@@mel.obj]

external create : ?config:config -> unit -> t = "Sanitizer" [@@mel.new]

let create ?allow_elements ?block_elements ?drop_elements ?allow_attributes
    ?drop_attributes ?allow_custom_elements ?allow_unknown_markup
    ?allow_comments () =
  create
    ~config:
      (config ?allowElements:allow_elements ?blockElements:block_elements
         ?dropElements:drop_elements ?allowAttributes:allow_attributes
         ?dropAttributes:drop_attributes
         ?allowCustomElements:allow_custom_elements
         ?allowUnknownMarkup:allow_unknown_markup ?allowComments:allow_comments
         ())
    ()

external sanitize_document : Private.document -> Document_fragment.t
  = "sanitize"
[@@mel.send.pipe: t]

external sanitize_document_fragment : Document_fragment.t -> Document_fragment.t
  = "sanitize"
[@@mel.send.pipe: t]

external sanitize_for : Private.element -> string -> Private.element option
  = "sanitizeFor"
[@@mel.send.pipe: t] [@@mel.return nullable]

(* TODO getConfiguration? getDefaultConfiguration? *)
