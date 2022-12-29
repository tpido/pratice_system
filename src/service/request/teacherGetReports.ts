import Myrequest from "..";

export default function teacherGetReports(id: number) {
  return Myrequest({
    url: "/teacherGetReport",
    method: "get",
    params: {
      id,
    },
  });
}
