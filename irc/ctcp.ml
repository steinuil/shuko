type t =
  | Action of string
  | Client_info_query
  | Client_info_reply of string array
  | Finger_query
  | Finger_reply of string
  | Ping of string
  | Source_query
  | Source_reply of string
  | Time_query
  | Time_reply of string
  | Version_query
  | Version_reply of string
  | User_info_query
  | User_info_reply of string
  | Unknown of string * string option

let parse_query command params =
  match (command, params) with
  | "ACTION", Some params -> Action params
  | "CLIENTINFO", None -> Client_info_query
  | "CLIENTINFO", Some commands ->
      Client_info_reply
        (Js.String.splitByRe ~regexp:[%mel.re {re|/\s+/|re}] commands
        |> Utils.keep_some)
  | "FINGER", None -> Finger_query
  | "FINGER", Some info -> Finger_reply info
  | "PING", Some data -> Ping data
  | "SOURCE", None -> Source_query
  | "SOURCE", Some info -> Source_reply info
  | "TIME", None -> Time_query
  | "TIME", Some time -> Time_reply time
  | "VERSION", None -> Version_query
  | "VERSION", Some info -> Version_reply info
  | "USERINFO", None -> User_info_query
  | "USERINFO", Some info -> User_info_reply info
  | _ -> Unknown (command, params)

let string_of_query = function
  | Action params -> "ACTION " ^ params
  | Client_info_query -> "CLIENTINFO"
  | Client_info_reply commands ->
      "CLIENTINFO " ^ Js.Array.join ~sep:" " commands
  | Finger_query -> "FINGER"
  | Finger_reply info -> "FINGER " ^ info
  | Ping data -> "PING " ^ data
  | Source_query -> "SOURCE"
  | Source_reply info -> "SOURCE " ^ info
  | Time_query -> "TIME"
  | Time_reply time -> "TIME " ^ time
  | Version_query -> "VERSION"
  | Version_reply info -> "VERSION " ^ info
  | User_info_query -> "USERINFO"
  | User_info_reply info -> "USERINFO " ^ info
  | Unknown (command, None) -> command
  | Unknown (command, Some params) -> command ^ " " ^ params

let delim = "\001"
let is_ctcp msg = Js.String.startsWith ~prefix:delim msg

let parse message =
  if not (is_ctcp message) then None
  else
    let message =
      if Js.String.endsWith ~suffix:delim message then
        Js.String.slice ~start:1 ~end_:(Js.String.length message - 1) message
      else Js.String.slice ~start:1 message
    in
    match Utils.split_off_regex ~delimiter:[%mel.re {re|/\s+/|re}] message with
    | None -> Some (parse_query message None)
    | Some (command, "") -> Some (parse_query command None)
    | Some (command, params) -> Some (parse_query command (Some params))

let to_string query = delim ^ string_of_query query ^ delim
