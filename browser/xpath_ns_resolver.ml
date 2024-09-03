type t

external lookup_namespace_uri : ?prefix:string -> string option
  = "lookupNamespaceURI"
[@@mel.send.pipe: t] [@@mel.return nullable]
