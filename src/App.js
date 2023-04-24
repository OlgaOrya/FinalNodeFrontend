
import './App.css';
import Article from './Articel';
import Comment from './Comment';
import { useEffect, useState } from "react";
import {AiOutlineSend} from "react-icons/ai";
import { getComments, addComment, editComment, deleteComment } from './FetchComments';



function App() {
  
  const [myComment,setComment] = useState ([]);
  const [comment,settingComment] = useState ("");
  const [editing, setEditing] = useState (false);
  const [commentId, setCommentId] = useState ("");

  useEffect (() => {
    getComments (setComment)
  }, [])

  const changeInInput = (_id,comment) =>{
    setEditing(true)
    settingComment(comment)
    setCommentId (_id)
  }

  return (
    <div className="App">
    <Article />
    <input 
    type="text" 
    placeholder="Add a comment..."
    value = {comment}
    onChange={(e) =>settingComment (e.target.value)} />

      <AiOutlineSend size={20}
        disabled = {!comment}
        onClick= 
        {editing ? () => editComment (commentId, comment,settingComment,setComment,setEditing):() => addComment (comment,settingComment,setComment)}>
        {editing ? "Edit" : "Add"}
        </AiOutlineSend> 

        {myComment.map ((comment) =><Comment text = {comment.comment} key = {comment._id} 
        changeInInput = {() => changeInInput (comment.id,comment.comment)}
        deleteComment={() => deleteComment (comment._id,setComment)}
        />)}
      <Comment />
    </div>
  );
}

export default App;







