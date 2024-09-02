type t

include Node.Make (struct
  type nonrec t = t
end)

external namespace_uri : t -> string option = "namespaceURI"
[@@mel.get] [@@mel.return nullable]

external prefix : t -> string option = "prefix"
[@@mel.get] [@@mel.return nullable]

external local_name : t -> string = "localName" [@@mel.get]
external name : t -> string = "name" [@@mel.get]
external value : t -> string = "value" [@@mel.get]

external owner_element : t -> Private.element option = "ownerElement"
[@@mel.get] [@@mel.return nullable]

(* [specified] is not provided because it's always true. *)
