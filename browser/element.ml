type t = Private.element

module Make (T : sig
  type t
end) =
struct
  external to_element : T.t -> t = "%identity"

  include Node.Make (struct
    type nonrec t = t
  end)

  external namespace_uri : T.t -> string option = "namespaceURI"
  [@@mel.get] [@@mel.return nullable]

  external prefix : T.t -> string option = "prefix"
  [@@mel.get] [@@mel.return nullable]

  external local_name : T.t -> string = "localName" [@@mel.get]
  external tag_name : T.t -> string = "tagName" [@@mel.get]
  external id : T.t -> string = "id" [@@mel.get]
  external set_id : T.t -> string -> unit = "id" [@@mel.set]
  external class_name : T.t -> string = "className" [@@mel.get]
  external set_class_name : T.t -> string -> unit = "className" [@@mel.set]
  external class_list : T.t -> Dom_token_list.t = "classList" [@@mel.get]
  external slot : T.t -> string = "slot" [@@mel.get]
  external set_slot : T.t -> string -> unit = "slot" [@@mel.set]
  external has_attributes : bool = "hasAttributes" [@@mel.send.pipe: T.t]
  external attributes : T.t -> Named_node_map.t = "attributes" [@@mel.get]

  external get_attribute_names : string array = "getAttributeNames"
  [@@mel.send.pipe: T.t]

  external get_attribute : string -> Attr.t option = "getAttribute"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external get_attribute_ns : ?namespace:string -> string -> Attr.t option
    = "getAttributeNS"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external set_attribute : string -> unit = "setAttribute"
  [@@mel.send.pipe: T.t]

  external set_attribute_ns : ?namespace:string -> string -> unit
    = "setAttributeNS"
  [@@mel.send.pipe: T.t]

  external remove_attribute : string -> unit = "removeAttribute"
  [@@mel.send.pipe: T.t]

  external remove_attribute_ns : ?namespace:string -> string -> unit
    = "removeAttributeNS"
  [@@mel.send.pipe: T.t]

  external toggle_attribute : string -> ?force:bool -> bool = "toggleAttribute"
  [@@mel.send.pipe: T.t]

  external has_attribute : string -> bool = "hasAttribute"
  [@@mel.send.pipe: T.t]

  external has_attribute_ns : ?namespace:string -> string -> bool
    = "hasAttributeNS"
  [@@mel.send.pipe: T.t]

  external get_attribute_node : string -> Attr.t option = "getAttributeNode"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external get_attribute_node_ns : ?namespace:string -> string -> Attr.t option
    = "getAttributeNodeNS"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external set_attribute_node : Attr.t -> Attr.t option = "setAttributeNode"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external set_attribute_node_ns : Attr.t -> Attr.t option
    = "setAttributeNodeNS"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external remove_attribute_node : Attr.t -> Attr.t = "removeAttributeNode"
  [@@mel.send.pipe: T.t]

  (* TODO *)

  external closest : string -> t option = "closest"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  external matches : string -> bool = "matches" [@@mel.send.pipe: T.t]

  external get_elements_by_tag_name : string -> Html_collection.t
    = "getElementsByTagName"
  [@@mel.send.pipe: T.t]

  external get_elements_by_tag_name_ns :
    namespace:string -> local_name:string -> Html_collection.t
    = "getElementsByTagNameNS"
  [@@mel.send.pipe: T.t]

  external get_elements_by_class_name : string -> Html_collection.t
    = "getElementsByClassName"
  [@@mel.send.pipe: T.t]

  (* TODO *)

  include Parent_node_mixin.Make (struct
    type nonrec t = t
  end)

  include Non_document_type_child_node_mixin.Make (struct
    type nonrec t = t
  end)

  include Child_node_mixin.Make (struct
    type nonrec t = t
  end)

  include Slottable_mixin.Make (struct
    type nonrec t = t
  end)

  (* TODO *)

  external set_html_unsafe : string -> unit = "setHTMLUnsafe"
  [@@mel.send.pipe: T.t]

  external element_timing : T.t -> string = "elementTiming" [@@mel.get]

  type set_html_options

  external set_html_options : ?sanitizer:Sanitizer.t -> unit -> set_html_options
    = ""
  [@@mel.obj]

  external set_html : string -> ?options:set_html_options -> unit = "setHTML"
  [@@mel.send.pipe: T.t]

  let set_html input ?sanitizer el =
    set_html input ~options:(set_html_options ?sanitizer ()) el

  (* TODO *)

  external get_client_rects : Dom_rect_list.t = "getClientRects"
  [@@mel.send.pipe: T.t]

  external get_bounding_client_rect : Dom_rect.t = "getBoundingClientRect"
  [@@mel.send.pipe: T.t]

  (* TODO *)

  include Inner_html_mixin.Make (struct
    type nonrec t = t
  end)

  (* TODO *)
end

include Make (struct
  type nonrec t = t
end)
