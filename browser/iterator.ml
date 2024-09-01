type 'a t

external next : 'a t -> 'a Iterator_result.t = "next" [@@mel.send]

let to_seq iterator =
  let dispenser () =
    let result = next iterator in
    match (Iterator_result.done_ result, Iterator_result.value result) with
    | (Some false | None), Some v -> Some v
    | Some true, None -> None
    | (Some false | None), None ->
        invalid_arg "Iterator is not done but returned no value"
    | Some true, Some _ -> invalid_arg "Iterator is done but returned a value"
  in
  Seq.of_dispenser dispenser
