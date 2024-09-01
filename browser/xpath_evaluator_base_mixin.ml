module Make (T : sig
  type t
end) =
struct
  external create_expression :
    string -> ?resolver:Xpath_ns_resolver.t -> Xpath_expression.t
    = "createExpression"
  [@@mel.send.pipe: T.t]

  external evaluate :
    string ->
    context:Private.node ->
    ?resolver:Xpath_ns_resolver.t ->
    ?type_:int ->
    ?result:Xpath_result.t ->
    Xpath_result.t = "evaluate"
  [@@mel.send.pipe: T.t]

  let evaluate expression ~context ?resolver ?type_ ?result t =
    evaluate expression ~context ?resolver
      ?type_:(Option.map Xpath_result.Type.to_int type_)
      ?result t
end
