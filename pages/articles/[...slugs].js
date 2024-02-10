import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const slugs = router.query.slugs || [];
  if (slugs.length > 1) {
    return <h1>{slugs[1]}</h1>;
  }
  console.log(router);
  return <h1>Article</h1>;
}
