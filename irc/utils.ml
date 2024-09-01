let ( let+ ) = Option.bind

let split_off ~delimiter str =
  match Js.String.indexOf delimiter str with
  | -1 -> (str, None)
  | i ->
      let left = Js.String.slice ~from:0 ~to_:i str in
      let right = Js.String.sliceToEnd ~from:(i + 1) str in
      (left, Some right)

let split_off_regex ~delimiter str =
  let+ res = Js.Re.exec_ delimiter str in
  let+ match_ = Js.Nullable.toOption (Js.Re.captures res).(0) in
  let i = Js.Re.index res in
  let ri = i + Js.String.length match_ in
  let left = Js.String.slice ~from:0 ~to_:i str in
  let right = Js.String.sliceToEnd ~from:ri str in
  Some (left, right)

let keep_some arr =
  let out = [||] in
  arr
  |> Js.Array.forEach (function
       | None -> ()
       | Some t -> Js.Array.push t out |> ignore);
  out

external pad_start : length:int -> pad_string:string -> string = "padStart"
[@@mel.send.pipe: Js.String.t]
