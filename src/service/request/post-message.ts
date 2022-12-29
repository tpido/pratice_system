import Myrequest from "..";

export default function postMessage(data: any) {
  return Myrequest({
    url: "/postmessage",
    method: "post",
    params: {
      startTime: data.startTime,
      endTime: data.endTime,
      location: data.location,
      teacherId: data.teacherId,
      name: data.name,
    },
  });
}
