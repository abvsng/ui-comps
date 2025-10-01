export default function NestedComment({ comments }) {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className=" mt-2">
          <Comment comment={comment} />
          {comment.reply && (
            <div className=" pl-3">
              <NestedComment comments={comment.reply} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function Comment({ comment }) {
  return (
    <div className=" p-2">
      <img
        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png"
        alt="userImage"
        className=" rounded-full w-10 h-10 object-cover inline-block mx-1 "
      />
      <div className=" inline-block mx-1 font-bold">{comment.username}</div>
      <div className=" pl-3 pt-2">{comment.comment}</div>
    </div>
  );
}
