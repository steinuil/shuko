type t

include Character_data.Make (struct
  type nonrec t = t
end)

external create : ?data:string -> unit -> t = "Text" [@@mel.new]
external split_text : offset:int -> t = "splitText" [@@mel.send.pipe: t]
external whole_text : t -> string = "wholeText" [@@mel.get]

include Slottable_mixin.Make (struct
  type nonrec t = t
end)

(* TODO
   include Geometry_utils_mixin.Make (struct
     type nonrec t = t
   end)
*)
