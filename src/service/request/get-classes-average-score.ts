import Myrequest from "..";

export default function getClassesAverageScore(classId: number) {
  return Myrequest({
    url: "/getClassesAverageScore",
    method: "get",
    params: {
      classId,
    },
  });
}
