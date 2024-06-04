import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/reviews',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(review)
        })
        .then(() => {
            console.log('Review Added');
            setIsPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add Review</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author : </label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Review</button>}
                {isPending && <button disabled>Adding Review...</button>}
            </form>
        </div>
     );
}
 
export default Create;