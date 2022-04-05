import React from 'react';

const Reviews = (props) => {
    const {name, rating, id, comments, image} = props.review;
    return (
        <div>
            <h2>this is reviews</h2>
            <img src={image} alt=""></img>
            <h4>{comments[0].user}</h4>
            <h5>{comments[0].text}</h5>
            <p>rating: {rating}</p>
        </div>
    );
};

export default Reviews;