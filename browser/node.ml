module Type = struct
  type t =
    | Element
    | Attribute
    | Text
    | Cdata_section
    | Entity_reference
    | Entity
    | Processing_instruction
    | Comment
    | Document
    | Document_type
    | Document_fragment
    | Notation

  let to_int = function
    | Element -> 1
    | Attribute -> 2
    | Text -> 3
    | Cdata_section -> 4
    | Entity_reference -> 5
    | Entity -> 6
    | Processing_instruction -> 7
    | Comment -> 8
    | Document -> 9
    | Document_type -> 10
    | Document_fragment -> 11
    | Notation -> 12

  let of_int = function
    | 1 -> Element
    | 2 -> Attribute
    | 3 -> Text
    | 4 -> Cdata_section
    | 5 -> Entity_reference
    | 6 -> Entity
    | 7 -> Processing_instruction
    | 8 -> Comment
    | 9 -> Document
    | 10 -> Document_type
    | 11 -> Document_fragment
    | 12 -> Notation
    | t -> invalid_arg ("Unknown nodeType: " ^ Js.Int.toString t)
end

type t = Private.node

module Make (T : sig
  type t
end) =
struct
  external to_node : T.t -> t = "%identity"
  external node_type : T.t -> int = "nodeType" [@@mel.get]

  let node_type node = Type.of_int (node_type node)

  external node_name : T.t -> string = "nodeName" [@@mel.get]
  external base_uri : T.t -> string = "baseURI" [@@mel.get]
  external is_connected : T.t -> bool = "isConnected" [@@mel.get]

  external owner_document : T.t -> Private.document = "ownerDocument"
  [@@mel.get]

  type get_root_node_options

  external get_root_node_options :
    ?composed:bool -> unit -> get_root_node_options = ""
  [@@mel.obj]

  external get_root_node : ?options:get_root_node_options -> t = "getRootNode"
  [@@mel.send.pipe: T.t]

  let get_root_node ?(composed = false) node =
    get_root_node ~options:(get_root_node_options ~composed ()) node

  external parent_node : T.t -> t option = "parentNode"
  [@@mel.get] [@@mel.return nullable]

  external parent_element : T.t -> Private.element option = "parentElement"
  [@@mel.get] [@@mel.return nullable]

  external has_child_nodes : bool = "hasChildNodes" [@@mel.send.pipe: t]
  external child_nodes : T.t -> Node_list.t = "childNodes" [@@mel.get]

  external first_child : T.t -> t option = "firstChild"
  [@@mel.get] [@@mel.return nullable]

  external last_child : T.t -> t option = "lastChild"
  [@@mel.get] [@@mel.return nullable]

  external previous_sibling : T.t -> t option = "previousSibling"
  [@@mel.get] [@@mel.return nullable]

  external next_sibling : T.t -> t option = "nextSibling"
  [@@mel.get] [@@mel.return nullable]

  external node_value : T.t -> string option = "nodeValue"
  [@@mel.get] [@@mel.return nullable]

  external set_node_value : T.t -> string -> unit = "nodeValue" [@@mel.set]

  external text_content : T.t -> string option = "textContent"
  [@@mel.get] [@@mel.return nullable]

  external set_text_content : T.t -> string -> unit = "textContent" [@@mel.set]
  external normalize : unit = "normalize" [@@mel.send.pipe: T.t]

  external clone : ?deep:bool -> unit -> T.t = "cloneNode"
  [@@mel.send.pipe: T.t]

  external is_equal : this:T.t -> other:t -> bool = "isEqualNode" [@@mel.send]

  external compare_document_position : this:T.t -> other:t -> int
    = "compareDocumentPosition"
  [@@mel.send]

  external contains : this:T.t -> other:t -> bool = "contains" [@@mel.send]

  (* FIXME should take a `null`able parameter *)
  external lookup_prefix : string -> string option = "lookupPrefix"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  (* FIXME should take a `null`able parameter *)
  external lookup_namespace_uri : string -> string option = "lookupNamespaceURI"
  [@@mel.send.pipe: T.t] [@@mel.return nullable]

  (* FIXME should take a `null`able parameter *)
  external is_default_namespace : string -> bool = "isDefaultNamespace"
  [@@mel.send.pipe: T.t]

  (* FIXME should take a `null`able parameter *)
  external insert_before : node:t -> child:t -> t = "insertBefore"
  [@@mel.send.pipe: T.t]

  external append_child : node:t -> t = "appendChild" [@@mel.send.pipe: T.t]

  external replace_child : node:t -> child:t -> t = "replaceChild"
  [@@mel.send.pipe: T.t]

  external remove_child : child:t -> t = "removeChild" [@@mel.send.pipe: T.t]
end

include Make (struct
  type nonrec t = t
end)
