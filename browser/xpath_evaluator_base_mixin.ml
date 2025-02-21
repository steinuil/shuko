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
    ?type_:
      ([ `any
       | `number
       | `string
       | `boolean
       | `unordered_node_iterator
       | `ordered_node_iterator
       | `unordered_node_snapshot
       | `ordered_node_snapshot
       | `any_ordered_node
       | `first_ordered_node ]
      [@mel.int]) ->
    ?result:Xpath_result.t ->
    Xpath_result.t = "evaluate"
  [@@mel.send.pipe: T.t]
end
