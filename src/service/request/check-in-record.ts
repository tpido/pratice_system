import Myrequest from "..";

export default function checkInRecord(id: number) {
  return Myrequest({
    url: "checkin-record",
    method: "get",
    params: {
      id,
    },
  });
}
