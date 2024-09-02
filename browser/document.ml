type t

include Node.Make (struct
  type nonrec t = t
end)

external document : t = "document"
external create : unit -> t = "Document" [@@mel.new]

external implementation : t -> Dom_implementation.t = "implementation"
[@@mel.get]

external url : t -> string = "URL" [@@mel.get]
external document_uri : t -> string = "documentURI" [@@mel.get]
external compat_mode : t -> string = "compatMode" [@@mel.get]
external character_set : t -> string = "characterSet" [@@mel.get]
external content_type : t -> string = "contentType" [@@mel.get]
external doctype : t -> Document_type.t = "doctype" [@@mel.get]
external document_element : t -> Private.element = "documentElement" [@@mel.get]

external get_elements_by_tag_name : string -> Html_collection.t
  = "getElementsByTagName"
[@@mel.send.pipe: t]

external get_elements_by_tag_name_ns :
  namespace:string -> local_name:string -> Html_collection.t
  = "getElementsByTagNameNS"
[@@mel.send.pipe: t]

external get_elements_by_class_name : string -> Html_collection.t
  = "getElementsByClassName"
[@@mel.send.pipe: t]

type element_creation_options

external element_creation_options : is:string -> element_creation_options = ""
[@@mel.obj]

external create_element :
  string -> ?options:element_creation_options -> unit -> Private.element
  = "createElement"
[@@mel.send.pipe: t]

external create_element_ns :
  string ->
  string ->
  ?options:element_creation_options ->
  unit ->
  Private.element = "createElementNS"
[@@mel.send.pipe: t]

(* TOOD wrap create_element_ns *)

let create_element ?is local_name document =
  create_element local_name
    ?options:(Option.map (fun is -> element_creation_options ~is) is)
    () document

external create_document_fragment : t -> Document_fragment.t
  = "createDocumentFragment"
[@@mel.send]

external create_text_node : string -> Text.t = "createTextNode"
[@@mel.send.pipe: t]

(* TODO should CDATASection be its own type? *)
external create_cdata_section : string -> Text.t = "createCDATASection"
[@@mel.send.pipe: t]

external create_comment : string -> Comment.t = "createComment"
[@@mel.send.pipe: t]

external create_processing_instruction :
  target:string -> data:string -> Processing_instruction.t
  = "createProcessingInstruction"
[@@mel.send.pipe: t]

external import_node : Node.t -> ?deep:bool -> Node.t = "importNode"
[@@mel.send.pipe: t]

external adopt_node : Node.t -> Node.t = "adoptNode"

external create_attribute : string -> Attr.t = "createAttribute"
[@@mel.send.pipe: t]

external create_attribute_ns :
  namespace:string -> qualified_name:string -> Attr.t = "createAttributeNS"
[@@mel.send.pipe: t]

external create_range : t -> Range.t = "createRange" [@@mel.send]

(* TODO createNodeIterator, createTree Walker *)

include Non_element_parent_node_mixin.Make (struct
  type nonrec t = t
end)

include Document_or_shadow_root_mixin.Make (struct
  type nonrec t = t
end)

include Parent_node_mixin.Make (struct
  type nonrec t = t
end)

include Xpath_evaluator_base_mixin.Make (struct
  type nonrec t = t
end)

external measure_element : Private.element -> Font_metrics.t = "measureElement"
[@@mel.send.pipe: t]

external measure_text :
  string -> Style_property_map_read_only.t -> Font_metrics.t = "measureText"
[@@mel.send.pipe: t]

(* TODO
   external start_view_transition
*)

external fullscreen_enabled : t -> bool = "fullscreenEnabled" [@@mel.get]

external exit_fullscreen : unit Js.Promise.t = "exitFullscreen"
[@@mel.send.pipe: t]

(* TODO event handlers *)

external parse_html_unsafe : string -> t = "parseHTMLUnsafe"
[@@mel.scope "Document"]

external location : t -> Location.t option = "location"
[@@mel.get] [@@mel.return nullable]

external domain : t -> string = "domain" [@@mel.get]
external referrer : t -> string = "referrer" [@@mel.get]
external cookie : t -> string = "cookie" [@@mel.get]
external last_modified : t -> string = "lastModified" [@@mel.get]

module Ready_state = struct
  type t = Loading | Interactive | Complete

  let to_string = function
    | Loading -> "loading"
    | Interactive -> "interactive"
    | Complete -> "complete"

  let of_string = function
    | "loading" -> Loading
    | "interactive" -> Interactive
    | "complete" -> Complete
    | e -> invalid_arg ("Unknown DocumentReadyState: " ^ e)
end

external ready_state : t -> string = "readyState" [@@mel.get]

let ready_state document = Ready_state.of_string (ready_state document)

(* TODO getter object (DOMString name) *)

external title : t -> string = "title" [@@mel.get]
external dir : t -> string = "dir" [@@mel.get]

external body : t -> Html_element.t option = "body"
[@@mel.get] [@@mel.return nullable]

external head : t -> Html_head_element.t option = "head"
[@@mel.get] [@@mel.return nullable]

external images : t -> Html_collection.t = "images" [@@mel.get]
external embeds : t -> Html_collection.t = "embeds" [@@mel.get]
external plugins : t -> Html_collection.t = "plugins" [@@mel.get]
external links : t -> Html_collection.t = "links" [@@mel.get]
external forms : t -> Html_collection.t = "forms" [@@mel.get]
external scripts : t -> Html_collection.t = "scripts" [@@mel.get]

external get_elements_by_name : string -> Node_list.t = "getElementsByName"
[@@mel.send.pipe: t]

(* TODO dynamic markup insertion *)
(* TODO defaultView: what is WindowProxy? *)

external default_view : t -> Private.window option = "defaultView"
[@@mel.get] [@@mel.return nullable]
(* technically returns a WindowProxy *)

external has_focus : bool = "hasFocus" [@@mel.send.pipe: t]
external design_mode : t -> string = "designMode" [@@mel.get]

(* TODO *)
