type t
type value = [ `Element of Element.t | `Radio_node_list of Radio_node_list.t ]

include Html_collection.Make (struct
  type nonrec t = t
end)

external named_item : string -> 'a = "namedItem" [@@mel.send.pipe: t]

let classify : 'a -> int =
  [%mel.raw
    {js|function(item) {
    if (!item) {
      return 0;
    }
    if (item instanceof RadioNodeList) {
      return 1;
    }
    return 2;
  }|js}]

let named_item name t : value option =
  let value = named_item name t in
  match classify value with
  | 0 -> None
  | 1 -> Some (Obj.magic value)
  | _ -> Some (Obj.magic value)
