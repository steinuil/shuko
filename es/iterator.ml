type 'a t = 'a Private.iterator

external next : 'a t -> 'a Iterator_result.t = "next" [@@mel.send]
external as_iterable : 'a t -> 'a Iterable.t = "%identity"

let to_seq iterator =
  let dispenser () =
    let result = next iterator in
    match (Iterator_result.done_ result, Iterator_result.value result) with
    | (Some false | None), Some v -> Some v
    | Some true, None -> None
    | (Some false | None), None ->
        Stdlib.invalid_arg "Iterator is not done but returned no value"
    | Some true, Some _ ->
        Stdlib.invalid_arg "Iterator is done but returned a value"
  in
  Stdlib.Seq.of_dispenser dispenser
