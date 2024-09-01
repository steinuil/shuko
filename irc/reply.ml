(*
  | Welcome of string
  | Your_host of string
  | Created of string
  | My_info of {
      server_name : string;
      version : string;
      available_user_modes : string;
      available_channel_modes : string;
    }
  *)

(* TODO update this from https://modern.ircdocs.horse/ *)

type response =
  | Welcome
  | Your_host
  | Created
  | My_info
  | Isupport
  | Bounce
  | User_host
  | Away
  | Unaway
  | Now_away
  | Whois_user
  | Whois_server
  | Whois_operator
  | Whois_idle
  | Whois_end
  | Whois_channels
  | Whowas_user
  | Whowas_end
  | List
  | List_end
  | Unique_op_is
  | Channel_mode_is
  | No_topic
  | Topic
  | Inviting
  | Summoning
  | Invite_list
  | Invite_list_end
  | Except_list
  | Except_list_end
  | Version
  | Who_reply
  | Who_end
  | Names
  | Names_end
  | Links
  | Links_end
  | Ban_list
  | Ban_list_end
  | Info
  | Info_end
  | Motd_start
  | Motd
  | Motd_end
  | You're_operator
  | Rehashing
  | You're_service
  | Time
  | Users_start
  | Users
  | Users_end
  | No_users
  | Trace_link
  | Trace_connecting
  | Trace_handshake
  | Trace_unknown
  | Trace_operator
  | Trace_user
  | Trace_server
  | Trace_service
  | Trace_new_type
  | Trace_class
  | Trace_reconnect
  | Trace_log
  | Trace_end
  | Stats_link_info
  | Stats_commands
  | Stats_end
  | Stats_uptime
  | Stats_oline
  | Umode_is
  | Server_list
  | Server_list_end
  | Luser_client
  | Luser_operator
  | Luser_unknown
  | Luser_channels
  | Luser_me
  | Admin_me
  | Admin_loc1
  | Admin_loc2
  | Admin_email
  | Try_again

type error =
  | No_such_nick
  | No_such_server
  | No_such_channel
  | Cannot_send_to_channel
  | Too_many_channels
  | Was_no_such_nick
  | Too_many_targets
  | No_such_service
  | No_origin
  | No_recipient
  | No_text_to_send
  | No_top_level
  | Wild_top_level
  | Bad_mask
  | Unknown_command
  | No_motd
  | No_admin_info
  | File_error
  | No_nickname_given
  | Erroneous_nickname
  | Nickname_in_use
  | Nick_collision
  | Unavailable_resource
  | User_not_in_channel
  | Not_on_channel
  | User_on_channel
  | No_login
  | Summon_disabled
  | Users_disabled
  | Not_registered
  | Need_more_params
  | Already_registered
  | No_permission_for_host
  | Password_mismatch
  | You're_banned_creep
  | You_will_be_banned
  | Channel_key_already_set
  | Channel_is_full
  | Unknown_channel_mode
  | Invite_only_channel
  | Banned_from_channel
  | Bad_channel_key
  | Bad_channel_mask
  | No_channel_modes
  | Ban_list_full
  | No_privileges
  | Channel_operator_privileges_needed
  | Can't_kill_server
  | Restricted
  | Unique_operator_privileges_needed
  | No_operator_host
  | Unknown_mode_flag
  | Users_don't_match

type t = Response of response | Error of error | Unknown of int

let of_int = function
  | 1 -> Response Welcome
  | 2 -> Response Your_host
  | 3 -> Response Created
  | 4 -> Response My_info
  | 5 -> Response Isupport
  | 10 -> Response Bounce
  | 302 -> Response User_host
  | 301 -> Response Away
  | 305 -> Response Unaway
  | 306 -> Response Now_away
  | 311 -> Response Whois_user
  | 312 -> Response Whois_server
  | 313 -> Response Whois_operator
  | 317 -> Response Whois_idle
  | 318 -> Response Whois_end
  | 319 -> Response Whois_channels
  | 314 -> Response Whowas_user
  | 369 -> Response Whowas_end
  | 322 -> Response List
  | 323 -> Response List_end
  | 325 -> Response Unique_op_is
  | 324 -> Response Channel_mode_is
  | 331 -> Response No_topic
  | 332 -> Response Topic
  | 341 -> Response Inviting
  | 342 -> Response Summoning
  | 346 -> Response Invite_list
  | 347 -> Response Invite_list_end
  | 348 -> Response Except_list
  | 349 -> Response Except_list_end
  | 351 -> Response Version
  | 352 -> Response Who_reply
  | 315 -> Response Who_end
  | 353 -> Response Names
  | 366 -> Response Names_end
  | 364 -> Response Links
  | 365 -> Response Links_end
  | 367 -> Response Ban_list
  | 368 -> Response Ban_list_end
  | 371 -> Response Info
  | 374 -> Response Info_end
  | 375 -> Response Motd_start
  | 372 -> Response Motd
  | 376 -> Response Motd_end
  | 381 -> Response You're_operator
  | 382 -> Response Rehashing
  | 383 -> Response You're_service
  | 391 -> Response Time
  | 392 -> Response Users_start
  | 393 -> Response Users
  | 394 -> Response Users_end
  | 395 -> Response No_users
  | 200 -> Response Trace_link
  | 201 -> Response Trace_connecting
  | 202 -> Response Trace_handshake
  | 203 -> Response Trace_unknown
  | 204 -> Response Trace_operator
  | 205 -> Response Trace_user
  | 206 -> Response Trace_server
  | 207 -> Response Trace_service
  | 208 -> Response Trace_new_type
  | 209 -> Response Trace_class
  | 210 -> Response Trace_reconnect
  | 261 -> Response Trace_log
  | 262 -> Response Trace_end
  | 211 -> Response Stats_link_info
  | 212 -> Response Stats_commands
  | 219 -> Response Stats_end
  | 242 -> Response Stats_uptime
  | 243 -> Response Stats_oline
  | 221 -> Response Umode_is
  | 234 -> Response Server_list
  | 235 -> Response Server_list_end
  | 251 -> Response Luser_client
  | 252 -> Response Luser_operator
  | 253 -> Response Luser_unknown
  | 254 -> Response Luser_channels
  | 255 -> Response Luser_me
  | 256 -> Response Admin_me
  | 257 -> Response Admin_loc1
  | 258 -> Response Admin_loc2
  | 259 -> Response Admin_email
  | 263 -> Response Try_again
  | 401 -> Error No_such_nick
  | 402 -> Error No_such_server
  | 403 -> Error No_such_channel
  | 404 -> Error Cannot_send_to_channel
  | 405 -> Error Too_many_channels
  | 406 -> Error Was_no_such_nick
  | 407 -> Error Too_many_targets
  | 408 -> Error No_such_service
  | 409 -> Error No_origin
  | 411 -> Error No_recipient
  | 412 -> Error No_text_to_send
  | 413 -> Error No_top_level
  | 414 -> Error Wild_top_level
  | 415 -> Error Bad_mask
  | 421 -> Error Unknown_command
  | 422 -> Error No_motd
  | 423 -> Error No_admin_info
  | 424 -> Error File_error
  | 431 -> Error No_nickname_given
  | 432 -> Error Erroneous_nickname
  | 433 -> Error Nickname_in_use
  | 436 -> Error Nick_collision
  | 437 -> Error Unavailable_resource
  | 441 -> Error User_not_in_channel
  | 442 -> Error Not_on_channel
  | 443 -> Error User_on_channel
  | 444 -> Error No_login
  | 445 -> Error Summon_disabled
  | 446 -> Error Users_disabled
  | 451 -> Error Not_registered
  | 461 -> Error Need_more_params
  | 452 -> Error Already_registered
  | 463 -> Error No_permission_for_host
  | 464 -> Error Password_mismatch
  | 465 -> Error You're_banned_creep
  | 466 -> Error You_will_be_banned
  | 467 -> Error Channel_key_already_set
  | 471 -> Error Channel_is_full
  | 472 -> Error Unknown_channel_mode
  | 473 -> Error Invite_only_channel
  | 474 -> Error Banned_from_channel
  | 475 -> Error Bad_channel_key
  | 476 -> Error Bad_channel_mask
  | 477 -> Error No_channel_modes
  | 478 -> Error Ban_list_full
  | 481 -> Error No_privileges
  | 482 -> Error Channel_operator_privileges_needed
  | 483 -> Error Can't_kill_server
  | 484 -> Error Restricted
  | 485 -> Error Unique_operator_privileges_needed
  | 491 -> Error No_operator_host
  | 501 -> Error Unknown_mode_flag
  | 502 -> Error Users_don't_match
  | num -> Unknown num

let int_of_response = function
  | Welcome -> 1
  | Your_host -> 2
  | Created -> 3
  | My_info -> 4
  | Isupport -> 5
  | Bounce -> 10
  | User_host -> 302
  | Away -> 301
  | Unaway -> 305
  | Now_away -> 306
  | Whois_user -> 311
  | Whois_server -> 312
  | Whois_operator -> 313
  | Whois_idle -> 317
  | Whois_end -> 318
  | Whois_channels -> 319
  | Whowas_user -> 314
  | Whowas_end -> 369
  | List -> 322
  | List_end -> 323
  | Unique_op_is -> 325
  | Channel_mode_is -> 324
  | No_topic -> 331
  | Topic -> 332
  | Inviting -> 341
  | Summoning -> 342
  | Invite_list -> 346
  | Invite_list_end -> 347
  | Except_list -> 348
  | Except_list_end -> 349
  | Version -> 351
  | Who_reply -> 352
  | Who_end -> 315
  | Names -> 353
  | Names_end -> 366
  | Links -> 364
  | Links_end -> 365
  | Ban_list -> 367
  | Ban_list_end -> 368
  | Info -> 371
  | Info_end -> 374
  | Motd_start -> 375
  | Motd -> 372
  | Motd_end -> 376
  | You're_operator -> 381
  | Rehashing -> 382
  | You're_service -> 383
  | Time -> 391
  | Users_start -> 392
  | Users -> 393
  | Users_end -> 394
  | No_users -> 395
  | Trace_link -> 200
  | Trace_connecting -> 201
  | Trace_handshake -> 202
  | Trace_unknown -> 203
  | Trace_operator -> 204
  | Trace_user -> 205
  | Trace_server -> 206
  | Trace_service -> 207
  | Trace_new_type -> 208
  | Trace_class -> 209
  | Trace_reconnect -> 210
  | Trace_log -> 261
  | Trace_end -> 262
  | Stats_link_info -> 211
  | Stats_commands -> 212
  | Stats_end -> 219
  | Stats_uptime -> 242
  | Stats_oline -> 243
  | Umode_is -> 221
  | Server_list -> 234
  | Server_list_end -> 235
  | Luser_client -> 251
  | Luser_operator -> 252
  | Luser_unknown -> 253
  | Luser_channels -> 254
  | Luser_me -> 255
  | Admin_me -> 256
  | Admin_loc1 -> 257
  | Admin_loc2 -> 258
  | Admin_email -> 259
  | Try_again -> 263

let int_of_error = function
  | No_such_nick -> 401
  | No_such_server -> 402
  | No_such_channel -> 403
  | Cannot_send_to_channel -> 404
  | Too_many_channels -> 405
  | Was_no_such_nick -> 406
  | Too_many_targets -> 407
  | No_such_service -> 408
  | No_origin -> 409
  | No_recipient -> 411
  | No_text_to_send -> 412
  | No_top_level -> 413
  | Wild_top_level -> 414
  | Bad_mask -> 415
  | Unknown_command -> 421
  | No_motd -> 422
  | No_admin_info -> 423
  | File_error -> 424
  | No_nickname_given -> 431
  | Erroneous_nickname -> 432
  | Nickname_in_use -> 433
  | Nick_collision -> 436
  | Unavailable_resource -> 437
  | User_not_in_channel -> 441
  | Not_on_channel -> 442
  | User_on_channel -> 443
  | No_login -> 444
  | Summon_disabled -> 445
  | Users_disabled -> 446
  | Not_registered -> 451
  | Need_more_params -> 461
  | Already_registered -> 452
  | No_permission_for_host -> 463
  | Password_mismatch -> 464
  | You're_banned_creep -> 465
  | You_will_be_banned -> 466
  | Channel_key_already_set -> 467
  | Channel_is_full -> 471
  | Unknown_channel_mode -> 472
  | Invite_only_channel -> 473
  | Banned_from_channel -> 474
  | Bad_channel_key -> 475
  | Bad_channel_mask -> 476
  | No_channel_modes -> 477
  | Ban_list_full -> 478
  | No_privileges -> 481
  | Channel_operator_privileges_needed -> 482
  | Can't_kill_server -> 483
  | Restricted -> 484
  | Unique_operator_privileges_needed -> 485
  | No_operator_host -> 491
  | Unknown_mode_flag -> 501
  | Users_don't_match -> 502

let to_int = function
  | Response r -> int_of_response r
  | Error r -> int_of_error r
  | Unknown r -> r
