import Myrequest from "..";

export default function postPraticeReport(id: number, report: string) {
  return Myrequest({
    url: "/postPracticeReport",
    method: "post",
    params: {
      id,
      report,
    },
  });
}
