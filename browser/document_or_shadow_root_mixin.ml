module Make (T : sig
  type t
end) =
struct
  external fullscreen_element : T.t -> Private.element option
    = "fullscreenElement"
  [@@mel.get] [@@mel.return nullable]

  external active_element : T.t -> Private.element option = "activeElement"
  [@@mel.get] [@@mel.return nullable]

  external style_sheets : T.t -> Style_sheet_list.t = "styleSheets" [@@mel.get]

  (* TODO this returns an ObservableArray *)
  external adopted_style_sheets : T.t -> Css_style_sheet.t array
    = "adoptedStyleSheets"
  [@@mel.get]

  external set_adopted_style_sheets : T.t -> Css_style_sheet.t array -> unit
    = "adoptedStyleSheets"
  [@@mel.set]

  external picture_in_picture_element : T.t -> Private.element option
    = "pictureInPictureElement"
  [@@mel.get] [@@mel.return nullable]

  external pointer_lock_event : T.t -> Private.element option
    = "pointerLockEvent"
  [@@mel.get] [@@mel.return nullable]

  external get_animations : T.t -> Animation.t array = "getAnimations"
  [@@mel.send]
end
