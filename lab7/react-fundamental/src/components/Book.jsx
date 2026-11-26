import React from "react";

const Book = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <img
                src={props.imageurl}
                alt={props.name}
                style={{ width: "150px", height: "200px" }}
            />
            <h3>Price: ${props.price}</h3>
            <h3>Author: {props.author}</h3>
            <h3>Rating: {props.rating}</h3>
            <hr />
        </div>
    );
};

export default Book;