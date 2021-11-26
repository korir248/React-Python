import React from 'react'
import {useSelector} from 'react-redux'

const Books = () => {
    const {books} = useSelector(state => state.books)
    console.log(books);
    return (
        <div>
        {!(books.length) ? (
            <p>No books found!</p>
        ): (
            <div>
            {books.map(book=>{
                return (
                <div key={book.id}>
                    <h4>{book.author}</h4>
                    <p>{book.title}</p>
                    <p>{book.published}</p>
                
                </div>
                )
            })}


            </div>
        )}
        
            
        </div>
    )
}

export default Books
