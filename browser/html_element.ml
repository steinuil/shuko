type t

external create : unit -> t = "HTMLElement" [@@mel.new]

module Make (T : sig
  type t
end) =
struct
  include Element.Make (struct
    type t = T.t
  end)

  external to_html_element : T.t -> t = "%identity"
  external title : T.t -> string = "title" [@@mel.get]
  external set_title : T.t -> string -> unit = "title" [@@mel.set]
  external lang : T.t -> string = "lang" [@@mel.get]
  external set_lang : T.t -> string -> unit = "lang" [@@mel.set]
  external translate : T.t -> bool = "translate" [@@mel.get]
  external set_translate : T.t -> bool -> unit = "translate" [@@mel.set]
  external dir : T.t -> string = "dir" [@@mel.get]
  external set_dir : T.t -> string -> unit = "dir" [@@mel.set]

  (* TODO hidden *)

  external inert : T.t -> bool = "inert" [@@mel.get]
  external set_inert : T.t -> bool -> unit = "inert" [@@mel.set]
  external click : T.t -> unit = "click" [@@mel.send]
  external access_key : T.t -> string = "accessKey" [@@mel.get]
  external set_access_key : T.t -> string -> unit = "accessKey" [@@mel.set]
  external access_key_label : T.t -> string = "accessKeyLabel" [@@mel.get]
  external draggable : T.t -> bool = "draggable" [@@mel.get]
  external set_draggable : T.t -> bool -> unit = "draggable" [@@mel.set]
  external spellcheck : T.t -> bool = "spellcheck" [@@mel.get]
  external set_spellcheck : T.t -> bool -> unit = "spellcheck" [@@mel.set]
  external autocapitalize : T.t -> string = "autocapitalize" [@@mel.get]

  external set_autocapitalize : T.t -> string -> unit = "autocapitalize"
  [@@mel.set]

  external inner_text : T.t -> string = "innerText" [@@mel.get]
  external set_inner_text : T.t -> string -> unit = "innerText" [@@mel.set]
  external outer_text : T.t -> string = "outerText" [@@mel.get]
  external set_outer_text : T.t -> string -> unit = "outerText" [@@mel.set]

  (* TODO attachInternals *)

  external show_popover : T.t -> unit = "showPopover" [@@mel.send]
  external hide_popover : T.t -> unit = "hidePopover" [@@mel.send]

  external toggle_popover : ?force:bool -> unit = "togglePopover"
  [@@mel.send.pipe: T.t]

  external popover : T.t -> string = "popover" [@@mel.get]
  external set_popover : T.t -> string -> unit = "popover" [@@mel.set]

  (* TODO include GlobalEventHandlers *)

  (* TODO include ElementContentEditable *)

  (* TODO include HTMLOrSVGElement *)

  (* TODO include ElementCSSInlineStyle *)

  external offset_parent : T.t -> Element.t option = "offsetParent"
  [@@mel.get] [@@mel.return nullable]

  external offset_top : T.t -> int = "offsetTop" [@@mel.get]
  external offset_left : T.t -> int = "offsetLeft" [@@mel.get]
  external offset_width : T.t -> int = "offsetWidth" [@@mel.get]
  external offset_height : T.t -> int = "offsetHeight" [@@mel.get]

  (* TODO editContext *)
end

include Make (struct
  type nonrec t = t
end)
