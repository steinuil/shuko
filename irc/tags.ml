open Es

type t = string option Es.Dict.t

let to_string tags =
  tags |> Dict.entries
  |> Array.map ~f:(fun (key, value) ->
         match value with None -> key | Some value -> key ^ "=" ^ value)
  |> Array.join ~sep:";"

let of_string str =
  str |> String.split ~sep:";"
  |> Array.map ~f:(Utils.split_off ~delimiter:"=")
  |> Dict.of_entries
