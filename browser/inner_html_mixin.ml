module Make (T : sig
  type t
end) =
struct
  external inner_html : T.t -> string = "innerHTML" [@@mel.get]
  external set_inner_html : T.t -> string -> unit = "innerHTML" [@@mel.set]
end
