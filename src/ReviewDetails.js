import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const ReviewDetails = () => {
    const {id} = useParams();
    const {data: review,error,isPending} = useFetch('http://localhost:8000/reviews/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/reviews/' + review.id,{
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="review-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {review && (
                <article>
                    <h2>{review.title}</h2>
                    <p>By {review.author}</p>
                    <div>{review.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ReviewDetails;