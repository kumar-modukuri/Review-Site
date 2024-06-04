import useFetch from "./useFetch";
import Reviewlist from "./Reviewlist";

const Home = () => {
    const {data: reviews,isPending,error} = useFetch('http://localhost:8000/reviews');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {reviews && <Reviewlist reviews={reviews} title='All Reviews'/>}
        </div>
     );
}
 
export default Home;