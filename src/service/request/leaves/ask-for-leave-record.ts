import Myrequest from "@/service";

export default function AskForLeaveRecord(id: number) {
  return Myrequest({
    url: "/askforleave-record",
    method: "get",
    params: {
      id,
    },
  });
}
