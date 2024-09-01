let ping token = Message.make (Command.Ping token)
let pong token = Message.make (Command.Pong { token; server = None })
let nick nickname = Message.make (Command.Nick nickname)

let user ~username ~realname =
  Message.make (Command.User { username; realname })

let join channels = Message.make (Command.Join { channels; keys = [||] })
let part ?comment channels = Message.make (Command.Part { channels; comment })
