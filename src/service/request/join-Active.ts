import Myrequest from "..";

export default function joinActive(activeId: number, id: number) {
  return Myrequest({
    url: "/joinActive",
    method: "get",
    params: {
      activeId,
      id,
    },
  });
}
