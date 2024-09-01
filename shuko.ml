let assert_eq message ~expected ~got =
  if expected <> got then (
    Js.Console.error2 "FAILED: " message;
    Js.Console.error expected;
    Js.Console.error got)
  else Js.log2 "PASSED:" message

let () =
  let test message ~expected ~msg =
    assert_eq message ~expected ~got:(Irc.Message.parse msg);
    assert_eq message ~expected:msg ~got:(Irc.Message.to_string expected)
  in
  let open Irc in
  test "simple message" ~msg:"PRIVMSG test :Trailing part!"
    ~expected:
      (Message.make
         (Private_message { target = "test"; message = "Trailing part!" }));
  test "message without the trailing part" ~msg:"QUIT test"
    ~expected:(Message.make (Quit (Some "test")));
  test "message with only the trailing part" ~msg:"QUIT :testing trailing part"
    ~expected:(Message.make (Quit (Some "testing trailing part")));
  test "messages with a nickame"
    ~msg:":test!user@host PRIVMSG test :Still testing!"
    ~expected:
      (Message.make
         ~prefix:
           (Prefix.Nickname
              { nickname = "test"; username = Some "user"; hostname = "host" })
         (Private_message { target = "test"; message = "Still testing!" }));
  test "messages with tags"
    ~msg:"@aaa=bbb;ccc;example.com/ddd=eee PRIVMSG test :Testing with tags!"
    ~expected:
      (Message.make
         ~tags:
           (Js.Dict.fromArray
              [|
                ("aaa", Some "bbb");
                ("ccc", None);
                ("example.com/ddd", Some "eee");
              |])
         (Private_message { target = "test"; message = "Testing with tags!" }));
  ()

let () = Es.Int.to_exponential 123 |> Js.log

let () =
  let test message ~expected ~msg =
    assert_eq message ~expected ~got:(Irc.Formatting.parse msg)
  in
  let test_both message ~expected ~msg =
    assert_eq message ~expected ~got:(Irc.Formatting.parse msg);
    assert_eq message ~expected:msg ~got:(Irc.Formatting.to_string expected)
  in
  test_both "no formatting" ~msg:"no formatting here my dudes"
    ~expected:[| Text "no formatting here my dudes" |];
  test_both "some formatting" ~msg:"pretty \x02bold\x02 claim there\x1d!"
    ~expected:
      [|
        Text "pretty ";
        Bold;
        Text "bold";
        Bold;
        Text " claim there";
        Italics;
        Text "!";
      |];
  test_both "only formatting" ~msg:"\x02\x1d\x1f\x1e\x11\x16\x0foof"
    ~expected:
      [|
        Bold;
        Italics;
        Underline;
        Strikethrough;
        Monospace;
        Reverse_color;
        Reset;
        Text "oof";
      |];
  test_both "reset color" ~msg:"testing\x03,12reset\x04,12color"
    ~expected:
      [|
        Text "testing";
        Color Reset;
        Text ",12reset";
        Hex_color Reset;
        Text ",12color";
      |];
  test "parsing color" ~msg:"\x030,0\x0300,00\x0399,1\x0313,ayy"
    ~expected:
      [|
        Color (Fg_bg (White, White));
        Color (Fg_bg (White, White));
        Color (Fg_bg (Default, Black));
        Color (Fg Pink);
        Text ",ayy";
      |];
  ()

open Browser

let document = Window.document Window.window

let () =
  let div = Document.create_element "div" document in
  let root = Document.get_element_by_id "shuko" document |> Js.Option.getExn in
  Element.append_child ~node:(Element.to_node div) root |> ignore;
  Element.get_client_rects div
  |> Dom_rect_list.to_iterable |> Iterable.to_array |> Js.log

let () =
  let h = Headers.of_array [| ("tfw", "gf") |] in
  h |> Headers.set ~name:"ayy" ~value:"lmao";
  h |> Headers.to_iterable |> Iterable.to_array
  |> Js.Array.forEach (fun (k, _v) -> Js.log k);
  let r = Request.create "ayy" () in
  let r2 = Request.copy r |> ignore in
  ignore r2;
  let url_search_params = Url_search_params.create () in
  url_search_params |> Url_search_params.set ~value:"lmao" ~name:"ayy";
  url_search_params |> Url_search_params.to_iterable |> Iterable.to_array
  |> Js.Array.forEach (fun (k, _v) -> Js.log k);
  ()

let () =
  let ws = Web_socket.create "ws://localhost:1234" () in
  ws
  |> Web_socket.add_event_listener
       (`_open (fun _msg -> ws |> Web_socket.send_string ""))
