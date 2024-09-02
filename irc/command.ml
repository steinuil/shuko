(* TODO update from https://modern.ircdocs.horse/ *)
type t =
  | Pass of string
  | Nick of string
  | User of { username : string; realname : string }
  | Oper of { name : string; password : string }
  | User_mode of { nickname : string; modes : string array }
    (* TODO proper modes *)
  | Service of {
      nickname : string;
      reserved1 : string;
      distribution : string;
      type_ : string;
      reserved2 : string;
      info : string;
    }
  | Quit of string option
  | Squit of { server : string; comment : string }
  | Join of {
      channels : string array;
      keys : string array; (* realname : string option; *)
    }
  | Part of { channels : string array; comment : string option }
  | Channel_mode of { channel : string; modes : string array }
  | Topic of { channel : string; topic : string option }
  | Names of { channels : string array; target : string option }
  | List of { channels : string array; target : string option }
  | Invite of { nickname : string; channel : string }
  | Kick of {
      channels : string array;
      nicknames : string array;
      comment : string option;
    }
  | Private_message of { target : string; message : string }
  | Ctcp_private_message of { target : string; message : Ctcp.t }
  | Notice of { target : string; message : string }
  | Ctcp_notice of { target : string; message : Ctcp.t }
  | Motd of string option
  | Lusers of { mask : string option; target : string option }
  | Version of string option
  | Stats of { query : string option; target : string option }
  | Links of { remote_server : string option; server_mask : string option }
  | Time of string option
  | Connect of {
      target_server : string;
      port : int;
      remote_server : string option;
    }
  | Admin of string option
  | Info of string option
  | Servlist of { mask : string option; type_ : string option }
  | Squery of { service_name : string; text : string }
  | Who of { mask : string option; only_operators : bool }
  | Whois of { target : string option; masks : string array }
  | Whowas of {
      nicknames : string array;
      count : int option;
      target : string option;
    }
  | Kill of { nickname : string; comment : string }
  | Ping of string
  | Pong of { token : string; server : string option }
  | Error of string
  | Away of string option
  | Rehash
  | Die
  | Restart
  | Users of string option
  | Wallops of string option
  | Userhost of string array
  | Reply of { code : Reply.t; target : string; args : string array }
  | Unknown of string * string array

let is_channel_name name =
  match name.[0] with '#' | '&' | '+' | '!' -> true | _ -> false

let param_should_be_escaped param =
  Js.String.includes ~search:" " param || Js.String.startsWith ~prefix:":" param

let parse command args =
  match (Js.String.toUpperCase command, args) with
  | "PASS", [| password |] -> Pass password
  | "NICK", [| nickname |] -> Nick nickname
  | "USER", [| username; _; _; realname |] -> User { username; realname }
  | "OPER", [| name; password |] -> Oper { name; password }
  | "MODE", _ when Array.length args > 1 && is_channel_name args.(0) ->
      Channel_mode { channel = args.(0); modes = Js.Array.slice ~start:1 args }
  | "MODE", _ when Array.length args > 1 ->
      User_mode { nickname = args.(0); modes = Js.Array.slice ~start:1 args }
  | "SERVICE", [| nickname; reserved1; distribution; type_; reserved2; info |]
    ->
      Service { nickname; reserved1; distribution; type_; reserved2; info }
  | "QUIT", [||] -> Quit None
  | "QUIT", [| message |] -> Quit (Some message)
  | "SQUIT", [| server; comment |] -> Squit { server; comment }
  | "JOIN", [| channels |] ->
      let channels = Js.String.split ~sep:"," channels in
      Join { channels; keys = [||] }
  | "JOIN", [| channels; keys |] ->
      let channels = Js.String.split ~sep:"," channels in
      let keys = Js.String.split ~sep:"," keys in
      Join { channels; keys }
  | "PART", [| channels |] ->
      let channels = Js.String.split ~sep:"," channels in
      Part { channels; comment = None }
  | "PART", [| channels; comment |] ->
      let channels = Js.String.split ~sep:"," channels in
      Part { channels; comment = Some comment }
  | "TOPIC", [| channel |] -> Topic { channel; topic = None }
  | "TOPIC", [| channel; topic |] -> Topic { channel; topic = Some topic }
  | "NAMES", [||] -> Names { channels = [||]; target = None }
  | "NAMES", [| channels |] ->
      let channels = Js.String.split ~sep:"," channels in
      Names { channels; target = None }
  | "NAMES", [| channels; target |] ->
      let channels = Js.String.split ~sep:"," channels in
      Names { channels; target = Some target }
  | "LIST", [| channels |] ->
      let channels = Js.String.split ~sep:"," channels in
      List { channels; target = None }
  | "LIST", [| channels; target |] ->
      let channels = Js.String.split ~sep:"," channels in
      List { channels; target = Some target }
  | "INVITE", [| nickname; channel |] -> Invite { nickname; channel }
  | "KICK", [| channels; nicknames |] ->
      let channels = Js.String.split ~sep:"," channels in
      let nicknames = Js.String.split ~sep:"," nicknames in
      Kick { channels; nicknames; comment = None }
  | "KICK", [| channels; nicknames; comment |] ->
      let channels = Js.String.split ~sep:"," channels in
      let nicknames = Js.String.split ~sep:"," nicknames in
      Kick { channels; nicknames; comment = Some comment }
  | "PRIVMSG", [| target; message |] -> (
      match Ctcp.parse message with
      | None -> Private_message { target; message }
      | Some message -> Ctcp_private_message { target; message })
  | "NOTICE", [| target; message |] -> (
      match Ctcp.parse message with
      | None -> Notice { target; message }
      | Some message -> Ctcp_notice { target; message })
  | "MOTD", [||] -> Motd None
  | "MOTD", [| target |] -> Motd (Some target)
  | "LUSERS", [||] -> Lusers { mask = None; target = None }
  | "LUSERS", [| mask |] -> Lusers { mask = Some mask; target = None }
  | "LUSERS", [| mask; target |] ->
      Lusers { mask = Some mask; target = Some target }
  | "VERSION", [||] -> Version None
  | "VERSION", [| target |] -> Version (Some target)
  | "STATS", [||] -> Stats { query = None; target = None }
  | "STATS", [| query |] -> Stats { query = Some query; target = None }
  | "STATS", [| query; target |] ->
      Stats { query = Some query; target = Some target }
  | "LINKS", [||] -> Links { remote_server = None; server_mask = None }
  | "LINKS", [| server_mask |] ->
      Links { remote_server = None; server_mask = Some server_mask }
  | "LINKS", [| remote_server; server_mask |] ->
      Links
        { remote_server = Some remote_server; server_mask = Some server_mask }
  | "TIME", [||] -> Time None
  | "TIME", [| target |] -> Time (Some target)
  | "CONNECT", [| target_server; port |] ->
      Connect { target_server; port = int_of_string port; remote_server = None }
  | "CONNECT", [| target_server; port; remote_server |] ->
      Connect
        {
          target_server;
          port = int_of_string port;
          remote_server = Some remote_server;
        }
  | "ADMIN", [||] -> Admin None
  | "ADMIN", [| target |] -> Admin (Some target)
  | "INFO", [||] -> Info None
  | "INFO", [| target |] -> Info (Some target)
  | "SERVLIST", [||] -> Servlist { mask = None; type_ = None }
  | "SERVLIST", [| mask |] -> Servlist { mask = Some mask; type_ = None }
  | "SERVLIST", [| mask; type_ |] ->
      Servlist { mask = Some mask; type_ = Some type_ }
  | "SQUERY", [| service_name; text |] -> Squery { service_name; text }
  | "WHO", [||] -> Who { mask = None; only_operators = false }
  | "WHO", [| mask |] -> Who { mask = Some mask; only_operators = false }
  | "WHO", [| mask; "o" |] -> Who { mask = Some mask; only_operators = true }
  | "WHOIS", [| masks |] ->
      let masks = Js.String.split ~sep:"," masks in
      Whois { target = None; masks }
  | "WHOIS", [| target; masks |] ->
      let masks = Js.String.split ~sep:"," masks in
      Whois { target = Some target; masks }
  | "WHOWAS", [| nicknames |] ->
      let nicknames = Js.String.split ~sep:"," nicknames in
      Whowas { nicknames; count = None; target = None }
  | "WHOWAS", [| nicknames; count |] ->
      let nicknames = Js.String.split ~sep:"," nicknames in
      Whowas { nicknames; count = Some (int_of_string count); target = None }
  | "WHOWAS", [| nicknames; count; target |] ->
      let nicknames = Js.String.split ~sep:"," nicknames in
      Whowas
        { nicknames; count = Some (int_of_string count); target = Some target }
  | "KILL", [| nickname; comment |] -> Kill { nickname; comment }
  | "PING", [| token |] -> Ping token
  | "PONG", [| token |] -> Pong { token; server = None }
  | "PONG", [| server; token |] -> Pong { token; server = Some server }
  | "ERROR", [| message |] -> Error message
  | "AWAY", [||] -> Away None
  | "AWAY", [| text |] -> Away (Some text)
  | "REHASH", [||] -> Rehash
  | "DIE", [||] -> Die
  | "RESTART", [||] -> Restart
  | "USERS", [||] -> Users None
  | "USERS", [| target |] -> Users (Some target)
  | "WALLOPS", [||] -> Wallops None
  | "WALLOPS", [| text |] -> Wallops (Some text)
  | "USERHOST", nicknames -> Userhost nicknames
  | _ -> (
      match int_of_string_opt command with
      | None -> Unknown (command, args)
      | Some _ when Array.length args = 0 -> Unknown (command, args)
      | Some reply ->
          let target = args.(0) in
          let args = Js.Array.slice ~start:1 args in
          let code = Reply.of_int reply in
          Reply { code; target; args })

let str command args =
  match args with
  | [||] -> command
  | [| last |] when param_should_be_escaped last -> command ^ " :" ^ last
  | [| last |] -> command ^ " " ^ last
  | args ->
      let last = args.(Array.length args - 1) in
      if param_should_be_escaped last then
        let prev = Js.Array.slice ~start:0 ~end_:(Array.length args - 1) args in
        command ^ " " ^ Js.Array.join ~sep:" " prev ^ " :" ^ last
      else command ^ " " ^ Js.Array.join ~sep:" " args

let channel_list = Js.Array.join ~sep:","

let to_string = function
  | Pass password -> str "PASS" [| password |]
  | Nick nickname -> str "NICK" [| nickname |]
  | User { username; realname } -> str "USER" [| username; "0"; "*"; realname |]
  | Oper { name; password } -> str "OPER" [| name; password |]
  | User_mode { nickname; modes } ->
      str "MODE" ([| nickname |] |> Js.Array.concat ~other:modes)
  | Channel_mode { channel; modes } ->
      str "MODE" ([| channel |] |> Js.Array.concat ~other:modes)
  | Service { nickname; reserved1; distribution; type_; reserved2; info } ->
      str "SERVICE"
        [| nickname; reserved1; distribution; type_; reserved2; info |]
  | Quit None -> "QUIT"
  | Quit (Some message) -> str "QUIT" [| message |]
  | Squit { server; comment } -> str "SQUIT" [| server; comment |]
  | Join { channels; keys = [||] } -> str "JOIN" [| channel_list channels |]
  | Join { channels; keys } ->
      str "JOIN" [| channel_list channels; channel_list keys |]
  | Part { channels; comment = None } -> str "PART" [| channel_list channels |]
  | Part { channels; comment = Some comment } ->
      str "PART" [| channel_list channels; comment |]
  | Topic { channel; topic = None } -> str "TOPIC" [| channel |]
  | Topic { channel; topic = Some topic } -> str "TOPIC" [| channel; topic |]
  | Names { channels = [||]; target = None } -> "NAMES"
  | Names { channels; target = None } -> str "NAMES" [| channel_list channels |]
  | Names { channels; target = Some target } ->
      str "NAMES" [| channel_list channels; target |]
  | List { channels; target = None } -> str "LIST" [| channel_list channels |]
  | List { channels; target = Some target } ->
      str "LIST" [| channel_list channels; target |]
  | Invite { nickname; channel } -> str "INVITE" [| nickname; channel |]
  | Kick { channels; nicknames; comment = None } ->
      str "KICK" [| channel_list channels; channel_list nicknames |]
  | Kick { channels; nicknames; comment = Some comment } ->
      str "KICK" [| channel_list channels; channel_list nicknames; comment |]
  | Private_message { target; message } -> str "PRIVMSG" [| target; message |]
  | Ctcp_private_message { target; message } ->
      str "PRIVMSG" [| target; Ctcp.to_string message |]
  | Notice { target; message } -> str "NOTICE" [| target; message |]
  | Ctcp_notice { target; message } ->
      str "NOTICE" [| target; Ctcp.to_string message |]
  | Motd None -> "MOTD"
  | Motd (Some message) -> str "MOTD" [| message |]
  | Lusers { mask = None; target = _ } -> "LUSERS"
  | Lusers { mask = Some mask; target = None } -> str "LUSERS" [| mask |]
  | Lusers { mask = Some mask; target = Some target } ->
      str "LUSERS" [| mask; target |]
  | Version None -> "VERSION"
  | Version (Some target) -> str "VERSION" [| target |]
  | Stats { query = None; target = _ } -> "STATS"
  | Stats { query = Some query; target = None } -> str "STATS" [| query |]
  | Stats { query = Some query; target = Some target } ->
      str "STATS" [| query; target |]
  | Links { remote_server = None; server_mask = _ } -> "LINKS"
  | Links { remote_server = Some remote_server; server_mask = None } ->
      str "LINKS" [| remote_server |]
  | Links { remote_server = Some remote_server; server_mask = Some server_mask }
    ->
      str "LINKS" [| remote_server; server_mask |]
  | Time None -> "TIME"
  | Time (Some target) -> str "TIME" [| target |]
  | Connect { target_server; port; remote_server = None } ->
      str "CONNECT" [| target_server; Js.Int.toString port |]
  | Connect { target_server; port; remote_server = Some remote_server } ->
      str "CONNECT" [| target_server; Js.Int.toString port; remote_server |]
  | Admin None -> "ADMIN"
  | Admin (Some target) -> str "ADMIN" [| target |]
  | Info None -> "INFO"
  | Info (Some info) -> str "INFO" [| info |]
  | Servlist { mask = None; type_ = _ } -> "SERVLIST"
  | Servlist { mask = Some mask; type_ = None } -> str "SERVLIST" [| mask |]
  | Servlist { mask = Some mask; type_ = Some type_ } ->
      str "SERVLIST" [| mask; type_ |]
  | Squery { service_name; text } -> str "SQUERY" [| service_name; text |]
  | Who { mask = None; only_operators = _ } -> "WHO"
  | Who { mask = Some mask; only_operators = false } -> str "WHO" [| mask |]
  | Who { mask = Some mask; only_operators = true } -> str "WHO" [| mask; "o" |]
  | Whois { target = None; masks } -> str "WHOIS" [| channel_list masks |]
  | Whois { target = Some target; masks } ->
      str "WHOIS" [| target; channel_list masks |]
  | Whowas { nicknames; count = None; target = _ } ->
      str "WHOWAS" [| channel_list nicknames |]
  | Whowas { nicknames; count = Some count; target = None } ->
      str "WHOWAS" [| channel_list nicknames; Js.Int.toString count |]
  | Whowas { nicknames; count = Some count; target = Some target } ->
      str "WHOWAS" [| channel_list nicknames; Js.Int.toString count; target |]
  | Kill { nickname; comment } -> str "KILL" [| nickname; comment |]
  | Ping token -> str "PING" [| token |]
  | Pong { token; server = None } -> str "PONG" [| token |]
  | Pong { token; server = Some server } -> str "PONG" [| server; token |]
  | Error message -> str "ERROR" [| message |]
  | Away None -> "AWAY"
  | Away (Some text) -> str "AWAY" [| text |]
  | Rehash -> "REHASH"
  | Die -> "DIE"
  | Restart -> "RESTART"
  | Users None -> "USERS"
  | Users (Some target) -> str "USERS" [| target |]
  | Wallops None -> "WALLOPS"
  | Wallops (Some text) -> str "WALLOPS" [| text |]
  | Userhost nicknames -> str "USERHOST" nicknames
  | Reply { code; target; args } ->
      str
        (Js.Int.toString (Reply.to_int code))
        ([| target |] |> Js.Array.concat ~other:args)
  | Unknown (command, args) -> str command args
