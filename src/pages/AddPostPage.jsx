import { useEffect, useRef, useState } from "react";
import { fetchAddPost } from "../http";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog";
import { getUsers } from "../http/index";

export default function AddPostPage() {
    const navigator = useNavigate();
    const title = useRef();
    const body = useRef();

    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const [isPostAdded, setIsPostAdded] = useState("nothing");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                if (fetchedUsers && fetchedUsers.users) {
                    setUsers(fetchedUsers.users);
                }
            } catch (err) {
                setError("Failed to load users");
            }
        };
        fetchUsers();
    }, []);

    async function addPost() {
        try {
            const inputTitle = title.current.value;
            const inputTxt = body.current.value;
            
            if (!userId) {
                setError("Please select a user");
                return false;
            }

            if (!inputTitle.trim()) {
                setError("Please enter a title");
                return false;
            }

            if (inputTxt.length < 100) {
                setError("Text must be more than 100 characters");
                return false;
            }

            const response = await fetchAddPost(inputTitle, inputTxt, parseInt(userId));
            if (response) {
                setIsPostAdded("done");
                return true;
            }
        } catch (error) {
            setError("Failed to add post. Please try again.");
            return false;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        const success = await addPost();
        if (success) {
            setIsPostAdded("done");
        }
    };

    return (
        <>
            <div className={isPostAdded === "done" ? "add-post-container its-true" : "add-post-container"}>
                <div id="add-post-header">
                    <h2>Add Post</h2>
                </div>

                <form className="add-form-container" onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Post title:
                    </label>
                    <input 
                        required 
                        id="title" 
                        ref={title} 
                        type="text" 
                        name="title" 
                        placeholder="Type your post title here >>" 
                    />

                    <label htmlFor="body">
                        Post text:
                    </label>
                    <textarea 
                        required 
                        ref={body} 
                        id="body"
                        name="body" 
                        placeholder="Type your post text here >>" 
                    />

                    <label htmlFor="user-id">
                        Select User:
                    </label>
                    <select 
                        required
                        name="user-id" 
                        id="user-id" 
                        className="user-select"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    >
                        <option value="">Select a user</option>
                        {users.map((user) => (
                            <option value={user.id} key={user.id}>
                                {user.firstName} {user.lastName}
                            </option>
                        ))}
                    </select>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
            {isPostAdded === "done" && <Dialog isOpen={true} onClose={() => navigator("/")} />}
        </>
    );
}

// do not use camel-case with naming classes {done}
// change getAddPost to addPost
// change addPost to something else (do not name variables in action names)
// replace user id input with UserSelect (fetch from https://dummyjson.com/docs/users#users-all)
// validation message should appear after click submit
// prevent sending data after fetch error (test with userid: 111111)
// prevent sending data after fetch error (test with userid: 111111)



//done