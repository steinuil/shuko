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
  let+ res = Reg_exp.exec ~pattern:delimiter str in
  let+ match_ = (Reg_exp.Match.matches res).(0) in
  let i = Reg_exp.Match.index res in
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
