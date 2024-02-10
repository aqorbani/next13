import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const id = router.query.userId;
  console.log(router);
  return <p>user #{id}</p>;
}
