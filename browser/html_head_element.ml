type t

external create : unit -> t = "HTMLHeadElement" [@@mel.new]

include Html_element.Make (struct
  type nonrec t = t
end)
