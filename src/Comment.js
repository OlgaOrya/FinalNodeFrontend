import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";


export const Comment = ({writeComment,changeInInput,deleteComment}) => {

    return(
        <div className="icons">
            <p>{writeComment}</p>
            <AiOutlineEdit size={20} onClick={changeInInput}></AiOutlineEdit>
            <AiOutlineDelete size={20} onClick={deleteComment}></AiOutlineDelete>
            <p></p>
        </div>
    )
}

export default Comment;


