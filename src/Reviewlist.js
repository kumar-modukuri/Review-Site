import { Link } from "react-router-dom";

const Reviewlist = ({reviews,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {reviews.map((review) => (
                <div className="review-preview" key={review.id}>
                    <Link to={`/reviews/${review.id}`}>
                        <h2>{review.title}</h2>
                        <p>By {review.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Reviewlist;