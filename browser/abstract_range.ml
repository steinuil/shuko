type t

module Make (T : sig
  type t
end) =
struct
  external to_abstract_range : T.t -> t = "%identity"
  external start_container : T.t -> Private.node = "startContainer" [@@mel.get]
  external start_offset : T.t -> int = "startOffset" [@@mel.get]
  external end_container : T.t -> Private.node = "endContainer" [@@mel.get]
  external end_offset : T.t -> int = "endOffset" [@@mel.get]
  external collapsed : T.t -> bool = "collapsed" [@@mel.get]
end

include Make (struct
  type nonrec t = t
end)
