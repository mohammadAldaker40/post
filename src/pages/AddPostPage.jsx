import { useRef ,useState } from "react";
import { fetchAddPost } from "../http";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog";





export default function AddPostPage() {

    
    const title = useRef() ; 
    const body = useRef() ;     
    const UserId  = useRef() ; 

    const [bodyValidate , setBodyValidate ] = useState(false) ; 
    const [addPost , setAddPost ] = useState(false) ; 
    
    const navigator = useNavigate("/")
    const handle = async (event) => {
        event.preventDefault()
            async function getAddPost (){
            try {

                const inputTitle = title.current.value;
                const inputTxt = body.current.value ; 
                const inputUserId = UserId.current.value ;

                if (inputTxt.length >= 100 ) {
                    setBodyValidate(true)
                }
                if (bodyValidate) {

                    
                    const data = await fetchAddPost(inputTitle , inputTxt , inputUserId) ;
                    console.log(data) 
                    navigator("/")
                    setAddPost(true) ;

                }
                
            } catch (error) {
                console.log(error || "couldn't add post")
            }
            } 
            await getAddPost()
    }

    if (addPost) {
        return (
        <>
            <Dialog open/>
        </>
        )
    }

   



    return (
<div className="AddPostContainer">
<div id="AddPostHeader">
    <h2>Add Post</h2>
</div>

        <form className="addFormContainer">
            
            <label htmlFor="title">
                post title : 
            </label>
            <input required ref={title} type="text" name="title" placeholder="type your post title here >>"/>


            <label htmlFor="body">
                post text : 
            </label>
            <textarea required ref={body} type="text" name="body" placeholder="type your post text here >>"/>


            <label htmlFor="userId">
               User Id : 
            </label>
            <input required ref={UserId} type="number" name="userId" placeholder="type your Id here >>"/>


            <button onClick={(event)=>handle(event)}>
                submet 
            </button>
            
        </form>

        </div>
    ) ;
}