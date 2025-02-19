module Error = struct
  module Make () = struct
    type t

    external name : t -> string = "name" [@@mel.get]
    external cause : t -> Stdlib.Obj.t = "cause" [@@mel.get]
    external message : t -> string = "message" [@@mel.get]
    external to_string : t -> string = "toString" [@@mel.get]
  end

  include Make ()

  external make : string -> t = "Error" [@@mel.new]
end

module Eval_error = struct
  include Error.Make ()
end

module Range_error = struct
  include Error.Make ()
end

module Reference_error = struct
  include Error.Make ()
end

module Syntax_error = struct
  include Error.Make ()
end

module Type_error = struct
  include Error.Make ()
end

module Uri_error = struct
  include Error.Make ()
end

module Aggregate_error = struct
  include Error.Make ()
end
