type t

include Html_element.Make (struct
  type nonrec t = t
end)

external create : unit -> t = "HTMLFormElement" [@@mel.new]
external accept_charset : t -> string = "acceptCharset" [@@mel.get]
external set_accept_charset : t -> string -> unit = "acceptCharset" [@@mel.set]
external action : t -> string = "action" [@@mel.get]
external set_action : t -> string -> unit = "action" [@@mel.set]
external autocomplete : t -> string = "autocomplete" [@@mel.get]
external set_autocomplete : t -> string -> unit = "autocomplete" [@@mel.set]
external enctype : t -> string = "enctype" [@@mel.get]
external set_enctype : t -> string -> unit = "enctype" [@@mel.set]
external encoding : t -> string = "encoding" [@@mel.get]
external set_encoding : t -> string -> unit = "encoding" [@@mel.set]
external method_ : t -> string = "method" [@@mel.get]
external set_method_ : t -> string -> unit = "method" [@@mel.set]
external name : t -> string = "name" [@@mel.get]
external set_name : t -> string -> unit = "name" [@@mel.set]
external no_validate : t -> bool = "noValidate" [@@mel.get]
external set_no_validate : t -> bool -> unit = "noValidate" [@@mel.set]
external target : t -> string = "target" [@@mel.get]
external set_target : t -> string -> unit = "target" [@@mel.set]
external rel : t -> string = "rel" [@@mel.get]
external set_rel : t -> string -> unit = "rel" [@@mel.set]
external rel_list : t -> Dom_token_list.t = "relList" [@@mel.get]

external elements : t -> Html_form_controls_collection.t = "elements"
[@@mel.get]

external length : t -> int = "length" [@@mel.get]
external submit : t -> unit = "submit" [@@mel.send]

external request_submit : ?submitter:Html_element.t -> unit = "requestSubmit"
[@@mel.send.pipe: t]

external reset : t -> unit = "reset" [@@mel.send]
external check_validity : t -> bool = "checkValidity" [@@mel.send]
external report_validity : t -> bool = "reportValidity" [@@mel.send]
