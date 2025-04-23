import { useRef } from "react"

export default function Dialog ({onClick}) {



    return (
        <dialog>
            <h2>you have added a post</h2>

            <p>thanks for sharing a post !</p>

                    
            <button onClick={onClick}>close</button>
        </dialog>
    )
}