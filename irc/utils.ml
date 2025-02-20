open Es

let ( let+ ) = Option.bind

let split_off ~delimiter str =
  match String.index_of ~sub:delimiter str with
  | -1 -> (str, None)
  | i ->
      let left = String.slice ~start:0 ~end_:i str in
      let right = String.slice ~start:(i + 1) str in
      (left, Some right)

let split_off_regex ~delimiter str =
  let+ res = Regexp.exec ~pattern:delimiter str in
  let+ match_ = (Regexp.Match_result.matches res).(0) in
  let i = Regexp.Match_result.index res in
  let ri = i + String.length match_ in
  let left = String.slice ~start:0 ~end_:i str in
  let right = String.slice ~start:ri str in
  Some (left, right)

let keep_some arr =
  let out = [||] in
  arr
  |> Array.for_each ~f:(function
       | None -> ()
       | Some t -> Es.Array.push ~value:t out |> ignore);
  out
