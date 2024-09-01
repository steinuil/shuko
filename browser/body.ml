type t

external of_string : string -> t = "%identity"
external of_blob : Blob.t -> t = "%identity"
external of_buffer_source : Buffer_source.t -> t = "%identity"
external of_form_data : Form_data.t -> t = "%identity"
external of_url_search_params : Url_search_params.t -> t = "%identity"
