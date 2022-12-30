import Myrequest from "..";

export default function isCheckIn1(id: number) {
  return Myrequest({
    url: "/ischeckin",
    method: "get",
    params: {
      id,
    },
  });
}
