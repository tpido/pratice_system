import Myrequest from "..";

interface ScoreData {
  activeId: number;
  id: number;
  scoreId: number;
  level: string;
  score: number;
}

export default function teacherSaveStudentScore(data: ScoreData) {
  return Myrequest({
    url: "/teacherSaveStudentScore",
    method: "post",
    params: {
      activeId: data.activeId,
      id: data.id,
      scoreId: data.scoreId,
      level: data.level,
      score: data.score,
    },
  });
}
