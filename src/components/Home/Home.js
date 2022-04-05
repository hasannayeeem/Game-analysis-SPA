import React from 'react';
import useReviews from '../../Hooks/useReviews';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='hero-area'>
            <div className='text-area'>
                <h1>Your next Game</h1>
                <h1 className='color-heading'>Your best Game</h1>
                <p>Other readers will always be interested in your opinion of the books you've read.Whether you've loved the<br/>  book or not, if you give your honest and detailed thoughts then people will find new books that are right for them.</p>
                <h3>{reviews.length}</h3>
            </div>
            <div className='img-area'>
                <img src='https://cdn.mos.cms.futurecdn.net/bmQvVtVm2drHMtDEbbJLTX-970-80.jpg.webp' width="90%" height="500px"></img>
            </div>
        </div>
    );
};

export default Home;