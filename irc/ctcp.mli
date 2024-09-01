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

val parse : string -> t option
val to_string : t -> string
