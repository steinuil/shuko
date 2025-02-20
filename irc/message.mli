type t = { tags : Tags.t option; prefix: Prefix.t option; command: Command.t }

val make : ?tags: Tags.t -> ?prefix:Prefix.t -> Command.t -> t

val parse : string -> t

val to_string : t -> string
