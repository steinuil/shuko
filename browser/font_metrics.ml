type t

external width : t -> float = "width" [@@mel.get]
external advances : t -> float array = "advances" [@@mel.get]
external bounding_box_left : t -> float = "boundingBoxLeft" [@@mel.get]
external bounding_box_right : t -> float = "boundingBoxRight" [@@mel.get]
external height : t -> float = "height" [@@mel.get]
external em_height_ascent : t -> float = "emHeightAscent" [@@mel.get]
external em_height_descent : t -> float = "emHeightDescent" [@@mel.get]
external bounding_box_ascent : t -> float = "boundingBoxAscent" [@@mel.get]
external bounding_box_descent : t -> float = "boundingBoxDescent" [@@mel.get]

external font_bounding_box_ascent : t -> float = "fontBoundingBoxAscent"
[@@mel.get]

external font_bounding_box_descent : t -> float = "fontBoundingBoxDescent"
[@@mel.get]

external dominant_baseline : t -> Baseline.t = "dominantBaseline" [@@mel.get]
external baselines : t -> Baseline.t array = "baselines" [@@mel.get]
external fonts : t -> Font.t array = "fonts" [@@mel.get]
