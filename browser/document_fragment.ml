type t

module Make (T : sig
  type t
end) =
struct
  include Node.Make (struct
    type nonrec t = T.t
  end)

  include Non_element_parent_node_mixin.Make (struct
    type nonrec t = T.t
  end)

  include Parent_node_mixin.Make (struct
    type nonrec t = T.t
  end)
end

external create : unit -> t = "DocumentFragment" [@@mel.new]

include Make (struct
  type nonrec t = t
end)
