import axios from 'axios';

const getComments = (setComment) =>{
    axios.get(`http://localhost:8000`)
    .then(({data}) => {console.log (data)
        setComment (data);
    })
}

const addComment = (comment,settingComment,setComment) =>{
    axios.post(`http://localhost:8000/saveFinalProject`, {comment})
    .then ((data) => {
        console.log (data);
        settingComment ("");
        getComments(setComment)
    })
}


const editComment = (commentId, comment,settingComment,setComment, setEditing) =>{
    axios.post (`http://localhost:8000/editFinalProject`, {_id: commentId, comment})
    .then ((data) => {
        console.log (data);
        settingComment ("");
        setEditing (false)
        getComments(setComment)
    })
}

const deleteComment = (_id,setComment) =>{
    axios.post (`http://localhost:8000/deleteFinalProject`, {_id})
    .then ((data) =>{
        console.log (data);
        getComments (setComment)
    })
}

export {getComments, addComment, editComment, deleteComment};














