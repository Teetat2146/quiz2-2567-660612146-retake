"use client";

import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
       <PostOwnner userImagePath={"profileImages/Me.jpg"} username={"Teetat Yodbun"} commentText={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"} likeNum={100}/>

        {/* Comment Example */}
       {comments.map((comment:any) => <Comment key={comment.username} {...comment}/>)}

        {/* Reply Example */}
       
        {/* map-loop render Comment component here */}

      </div>
    </div>
  );
}
