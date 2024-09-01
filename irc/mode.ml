type 'a t =
  | Plus of 'a * string option
  | Minus of 'a * string option
  | No_prefix of 'a

type user_mode = Away | Invisible (* TODO *)
type channel_mode = TODO
