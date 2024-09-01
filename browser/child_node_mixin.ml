module Make (T : sig
  type t
end) =
struct
  external before : Private.node array -> unit = "before"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external after : Private.node array -> unit = "after"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external replace_with : Private.node array -> unit = "replaceWith"
  [@@mel.send.pipe: T.t] [@@mel.variadic]

  external remove : T.t -> unit = "remove" [@@mel.send]
end
