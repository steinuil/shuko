type t = string option Js.Dict.t

let to_string tags =
  tags |> Js.Dict.entries
  |> Js.Array.map ~f:(fun (key, value) ->
         match value with None -> key | Some value -> key ^ "=" ^ value)
  |> Js.Array.join ~sep:";"

let of_string str =
  str |> Js.String.split ~sep:";"
  |> Js.Array.map ~f:(Utils.split_off ~delimiter:"=")
  |> Js.Dict.fromArray
