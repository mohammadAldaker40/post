import { useRef } from "react";
import { fetchAddPost } from "../http";
import { useNavigate } from "react-router-dom";





export default function AddPostPage() {
    
    const navigator = useNavigate("/")
    const handle = async (event) => {
        event.preventDefault()
            async function getAddPost (){
            try {
                const inputTitle = title.current.value;
                const inputTxt = body.current.value ; 
                const inputUserId = UserId.current.value ;
                const data = await fetchAddPost(inputTitle , inputTxt , inputUserId) ;
                console.log(data) 
                navigator("/")
            } catch (error) {
                console.log(error || "couldn't add post")
            }
            } 
            await getAddPost()
    }

   
    const title = useRef() ; 
    const body = useRef() ;     
    const UserId  = useRef() ; 



    return (
<div className="AddPostContainer">
<div id="AddPostHeader">
    <h2>Add Post</h2>
</div>

        <form className="addFormContainer">
            
            <label htmlFor="title">
                post title : 
            </label>
            <input ref={title} type="text" name="title" placeholder="type your post title here >>"/>


            <label htmlFor="body">
                post text : 
            </label>
            <textarea ref={body} type="text" name="body" placeholder="type your post text here >>"/>


            <label htmlFor="userId">
               User Id : 
            </label>
            <input ref={UserId} type="number" name="userId" placeholder="type your Id here >>"/>


            <button onClick={(event)=>handle(event)}>
                submet 
            </button>
            
        </form>

        </div>
    ) ;
}