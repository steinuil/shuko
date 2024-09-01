module Make (T : sig
  type t
end) =
struct
  external children : T.t -> Html_collection.t = "children" [@@mel.get]

  external first_element_child : T.t -> Private.element option
    = "firstElementChild"
  [@@mel.get] [@@mel.return nullable]

  external last_element_child : T.t -> Private.element option
    = "lastElementChild"
  [@@mel.get] [@@mel.return nullable]

  external child_element_count : T.t -> int = "childElementCount" [@@mel.get]

  external prepend : Private.node array -> unit = "prepend"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external append : Private.node array -> unit = "append"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external replace_children : Private.node array -> unit = "replaceChildren"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external query_selector : string -> Private.element option = "querySelector"
  [@@mel.send.pipe: T.t]

  external query_selector_all : string -> Node_list.t = "querySelectorAll"
  [@@mel.send.pipe: T.t]
end
