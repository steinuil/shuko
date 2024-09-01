type t

include Character_data.Make (struct
  type nonrec t = t
end)

external create : ?data:string -> unit -> t = "Comment" [@@mel.new]
