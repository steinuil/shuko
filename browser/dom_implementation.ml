type t

external create_document_type :
  qualified_name:string ->
  public_id:string ->
  system_id:string ->
  Document_type.t = "createDocumentType"
[@@mel.send.pipe: t]

external create_document :
  namespace:string ->
  qualified_name:string ->
  ?doctype:Document_type.t ->
  unit ->
  Private.document = "createDocument"
[@@mel.send.pipe: t]

external create_html_document : ?title:string -> unit -> Private.document
  = "createHTMLDocument"
[@@mel.send.pipe: t]

(* [hasFeature] is intentionally omitted. *)
