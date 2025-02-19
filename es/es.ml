(** {1 Fundamental objects} *)

module Undefined = Undefined
module Null = Null

(* TODO: Object *)
(* TODO: Function *)
module Bool = Bool
(* TODO: Symbol *)

(** {1 Error objects} *)

exception Error = Caml_js_exceptions.Error

(** {1 Numbers and dates} *)

module Float = Float
module Int = Int
module Big_int = Big_int
module Date = Date
(* TODO: Temporal *)

(** {1 Text processing} *)

module String = String
module Regexp = Regexp

(** {1 Indexed collections} *)

module Array = Array
(* TODO: Int8Array, ... *)

(** {1 Keyed collections} *)

(* TODO Map *)
module Set = Set
(* TODO WeakMap *)
(* TODO WeakSet *)

module Dict = Dict

(** {1 Structured data} *)

(* TODO ArrayBuffer *)
(* TODO SharedArrayBuffer *)
(* TODO DataView *)
(* TODO Atomics *)
module Json = Json

(** {1 Managing memory} *)

(* TODO WeakRef *)
(* TODO FinalizationRegistry *)

(** {1 Control abstraction objects} *)

module Promise = Promise
module Array_like = Array_like
module Iterator_result = Iterator_result
module Iterator = Iterator
module Async_iterator = Async_iterator
module Iterable = Iterable
module Async_iterable = Async_iterable
module Mixins = Mixins

(* TODO GeneratorFunction *)
(* TODO AsyncGeneratorFunction *)
(* TODO Generator *)
(* TODO AsyncGenerator *)
(* TODO AsyncFunction *)

(** {1 Reflection} *)

(* TODO Reflect *)
(* TODO Proxy *)

(** {1 Internationalization} *)

module Intl = Intl
