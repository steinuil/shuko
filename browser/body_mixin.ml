module Make (T : sig
  type t
end) =
struct
  external body : T.t -> Readable_stream.t = "body" [@@mel.get]
  external body_used : T.t -> bool = "bodyUsed" [@@mel.get]

  external array_buffer : Array_buffer.t Js.Promise.t = "arrayBuffer"
  [@@mel.send.pipe: T.t]

  external form_data : Form_data.t Js.Promise.t = "formData"
  [@@mel.send.pipe: T.t]

  external blob : Blob.t Js.Promise.t = "blob" [@@mel.send.pipe: T.t]
  external json : Js.Json.t Js.Promise.t = "json" [@@mel.send.pipe: T.t]
  external text : string Js.Promise.t = "text" [@@mel.send.pipe: T.t]
end
