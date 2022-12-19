import Myrequest from "..";

export default function checkIn(id: number, location: string) {
  return Myrequest({
    url: "/checkin",
    method: "post",
    params: {
      id,
      location,
    },
  });
}
