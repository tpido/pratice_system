import Myrequest from "..";

export default function checkIn(id: number) {
  return Myrequest({
    url: "/checkin",
    method: "post",
    params: {
      id,
    },
  });
}
