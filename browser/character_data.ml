type t

module Make (T : sig
  type t
end) =
struct
  external to_character_data : T.t -> t = "%identity"

  include Node.Make (struct
    type nonrec t = T.t
  end)

  external data : T.t -> string = "data" [@@mel.get]
  external length : T.t -> int = "length" [@@mel.get]

  external substring_data : offset:int -> count:int -> string = "substringData"
  [@@mel.send.pipe: t]

  external append_data : string -> unit = "appendData" [@@mel.send.pipe: t]

  external insert_data : offset:int -> string -> unit = "insertData"
  [@@mel.send.pipe: t]

  external delete_data : offset:int -> count:int -> unit = "deleteData"
  [@@mel.send.pipe: t]

  external replace_data : offset:int -> count:int -> string -> unit
    = "replaceData"
  [@@mel.send.pipe: t]

  include Non_document_type_child_node_mixin.Make (struct
    type nonrec t = t
  end)

  include Child_node_mixin.Make (struct
    type nonrec t = t
  end)
end

include Make (struct
  type nonrec t = t
end)
