import { data as comments } from "../Components/nestedComments/comments";
import NestedComment from "../Components/nestedComments/NestedComment";
export default function NestedCommentsPage() {
  return (
    <>
      <NestedComment comments={comments} />
    </>
  );
}
