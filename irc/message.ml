open Es

type t = { tags : Tags.t option; prefix : Prefix.t option; command : Command.t }

let make ?tags ?prefix command = { tags; prefix; command }

let split_on_whitespace =
  Utils.split_off_regex ~delimiter:[%mel.re {re|/\s+/|re}]

let parse line =
  let tags, line =
    if String.starts_with ~prefix:"@" line then
      match split_on_whitespace line with
      | None -> (None, line)
      | Some (tags, line) ->
          let tags = String.slice ~start:1 tags |> Tags.of_string in
          (Some tags, line)
    else (None, line)
  in
  let prefix, line =
    if String.starts_with ~prefix:":" line then
      match split_on_whitespace line with
      | None -> (None, line)
      | Some (prefix, line) ->
          let prefix = String.slice ~start:1 prefix |> Prefix.of_string in
          (Some prefix, line)
    else (None, line)
  in
  let command, line =
    match split_on_whitespace line with
    | None -> (line, None)
    | Some (command, line) -> (command, Some line)
  in
  let params =
    match line with
    | None -> [||]
    | Some line -> (
        if String.starts_with ~prefix:":" line then
          let trailing = String.slice ~start:1 line in
          [| trailing |]
        else
          let params, trailing = Utils.split_off ~delimiter:" :" line in
          let params =
            String.split_re ~pattern:[%mel.re {re|/\s+/|re}] params
            |> Utils.keep_some
          in
          match trailing with
          | None -> params
          | Some trailing ->
              let trailing = String.slice ~start:1 trailing in
              Array.push ~value:trailing params |> ignore;
              params)
  in
  let command = Command.parse command params in
  { tags; prefix; command }

let to_string { tags; prefix; command } =
  let tags =
    match tags with None -> "" | Some tags -> "@" ^ Tags.to_string tags ^ " "
  in
  let prefix =
    match prefix with
    | None -> ""
    | Some prefix -> ":" ^ Prefix.to_string prefix ^ " "
  in
  tags ^ prefix ^ Command.to_string command
