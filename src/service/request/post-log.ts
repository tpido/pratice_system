import Myrequest from "..";

export default function postLog(id: number, log: string) {
  return Myrequest({
    url: "/postLog",
    method: "post",
    params: {
      id,
      log,
    },
  });
}
