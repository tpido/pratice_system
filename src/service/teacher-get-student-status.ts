import Myrequest from ".";

export default function teacherGetStudentStatus(classId: number) {
  return Myrequest({
    url: "/teacherGetStudentStatus",
    method: "get",
    params: {
      classId,
    },
  });
}
