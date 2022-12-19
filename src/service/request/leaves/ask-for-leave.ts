import Myrequest from "@/service";

export default function askForLeave(data: any) {
  return Myrequest({
    url: "/askforleave",
    method: "post",
    params: {
      endTime: data.endTime,
      message: data.message,
      startTime: data.startTime,
      teacherId: data.teacherId,
      userId: data.userId,
    },
  });
}
