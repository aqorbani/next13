import { useRouter } from "next/router";

export default function Course() {
  const router = useRouter();
  const { studentId, courseId } = router.query;
  return (
    <div>
      student id:{studentId} and course id : {courseId}
    </div>
  );
}
