import Myrequest from "..";

export default function checkInAttend(id: number) {
  return Myrequest({
    url: "/checkin-attend",
    method: "get",
    params: {
      id,
    },
  });
}
