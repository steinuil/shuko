type t =
  | Server_name of string
  | Nickname of {
      nickname : string;
      username : string option;
      hostname : string;
    }

let to_string = function
  | Server_name name -> name
  | Nickname { nickname; username; hostname } ->
      let username = match username with None -> "" | Some n -> "!" ^ n in
      nickname ^ username ^ "@" ^ hostname

let of_string str =
  match Utils.split_off str ~delimiter:"@" with
  | name, None -> Server_name name
  | p, Some hostname ->
      let nickname, username = Utils.split_off ~delimiter:"!" p in
      Nickname { nickname; username; hostname }
