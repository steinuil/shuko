type 'a t = 'a Private.iterator

external next : 'a t -> 'a Iterator_result.t = "next" [@@mel.send]
external as_iterable : 'a t -> 'a Iterable.t = "%identity"
external to_array : 'a t -> 'a array = "from" [@@mel.scope "Array"]

external map_to_array : 'a t -> f:('a -> 'b) -> 'b array = "from"
[@@mel.scope "Array"]

let of_dispenser : ((unit -> 'a Iterator_result.t)[@u]) -> 'a t =
  [%mel.raw
    {|function(f) {
    return {
      next: f,
      [Symbol.iterator]() {
        return this;
      }
    };
  }|}]

open Stdlib

let map ~f iterator =
  of_dispenser (fun [@u] () ->
      let result = next iterator in
      match (Iterator_result.done_ result, Iterator_result.value result) with
      | (Some false | None), Some value ->
          Iterator_result.continue ~value:(f value)
      | Some true, _ -> Iterator_result.stop ()
      | _ -> invalid_arg "")

let filter ~f iterator =
  let rec dispenser =
   fun [@u] () ->
    let result = next iterator in
    match (Iterator_result.done_ result, Iterator_result.value result) with
    | (Some false | None), Some value when f value -> result
    | Some true, _ -> result
    | (Some false | None), _ -> dispenser () [@u]
  in
  of_dispenser dispenser

let take ~count iterator =
  let count = Stdlib.ref count in
  let dispenser =
   fun [@u] () ->
    if !count = 0 then Iterator_result.stop ()
    else (
      decr count;
      next iterator)
  in
  of_dispenser dispenser

let skip ~count iterator =
  let count = ref count in
  let rec dispenser =
   fun [@u] () ->
    let result = next iterator in
    if !count = 0 then result
    else (
      decr count;
      dispenser () [@u])
  in
  of_dispenser dispenser
