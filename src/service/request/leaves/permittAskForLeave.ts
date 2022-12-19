import Myrequest from "@/service";

export default function permittAskForLeave(leaveId: number, leaveType: number) {
  return Myrequest({
    url: "/permittAskForLeave",
    method: "post",
    params: {
      leaveId,
      leaveType,
    },
  });
}
