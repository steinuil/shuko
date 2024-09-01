type t = string option Js.Dict.t

let to_string tags =
  tags |> Js.Dict.entries
  |> Js.Array.map (fun (key, value) ->
         match value with None -> key | Some value -> key ^ "=" ^ value)
  |> Js.Array.joinWith ";"

let of_string str =
  str |> Js.String.split ";"
  |> Js.Array.map (Utils.split_off ~delimiter:"=")
  |> Js.Dict.fromArray
