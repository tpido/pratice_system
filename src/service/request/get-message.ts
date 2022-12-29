import Myrequest from "..";

export default function getMessage() {
  return Myrequest({
    url: "/getmessage",
    method: "get",
  });
}
