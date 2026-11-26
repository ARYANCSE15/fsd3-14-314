import Book from "./Book.jsx";
import { books } from "../data.js";
import React from "react";

function BookList() {
    return (
        <>
            <h1>Book List: Total {books.length} found!</h1>

            {books.map((item, index) => (
                <Book key={index} {...item} />
            ))}
        </>
    );
}

export default BookList;