type t

include Node.Make (struct
  type nonrec t = t
end)

external name : t -> string = "name" [@@mel.get]
external public_id : t -> string = "publicId" [@@mel.get]
external system_id : t -> string = "systemId" [@@mel.get]

include Child_node_mixin.Make (struct
  type nonrec t = t
end)
