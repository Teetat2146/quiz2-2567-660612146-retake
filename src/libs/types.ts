// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
  userImagePath: string,
  username: string,
  replyText: string,
  likeNum: number,
}
export type { ReplyProps };

interface PostOwner {
  userImagePath: string,
  username: string,
  commentText: string,
  likeNum: number,
}
export type { PostOwner };

interface commentprops {
  userImagePath: string,
  username: string,
  commentText: string,
  likeNum: number,
  replies: []
}
export type { commentprops };