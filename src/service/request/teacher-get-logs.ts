import Myrequest from "..";

export default function teacherGetLogs(id: number) {
  return Myrequest({
    url: "/teacherGetLogs",
    method: "get",
    params: {
      id,
    },
  });
}
