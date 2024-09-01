type t

include Blob.Make (struct
  type nonrec t = t
end)

type init

external init :
  ?_type:string -> ?endings:string -> ?lastModified:string -> unit -> init = ""
[@@mel.obj]

external create : _ -> string -> init -> t = "File" [@@mel.new]
external create_blob : _ -> init -> t = "File" [@@mel.new]

let of_blob ?type' ?endings ?last_modified ?file_name (blob : t) =
  (match file_name with
  | Some file_name -> create blob file_name
  | None -> create_blob blob)
    (init ?_type:type'
       ?endings:(Option.map Blob.Ending_type.to_string endings)
       ?lastModified:last_modified ())

let of_buffer_source ?type' ?endings ?last_modified ?file_name
    (buffer_source : Buffer_source.t) =
  (match file_name with
  | Some file_name -> create buffer_source file_name
  | None -> create_blob buffer_source)
    (init ?_type:type'
       ?endings:(Option.map Blob.Ending_type.to_string endings)
       ?lastModified:last_modified ())

let of_string ?type' ?endings ?last_modified ?file_name (string : string) =
  (match file_name with
  | Some file_name -> create string file_name
  | None -> create_blob string)
    (init ?_type:type'
       ?endings:(Option.map Blob.Ending_type.to_string endings)
       ?lastModified:last_modified ())

let create ?type' ?endings ?last_modified ?file_name () =
  (match file_name with
  | Some file_name -> create Js.undefined file_name
  | None -> create_blob Js.undefined)
    (init ?_type:type'
       ?endings:(Option.map Blob.Ending_type.to_string endings)
       ?lastModified:last_modified ())

external name : t -> string = "name" [@@mel.get]
external last_modified : t -> int = "lastModified" [@@mel.get]
