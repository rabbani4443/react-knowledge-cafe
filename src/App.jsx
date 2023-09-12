import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  const [bookMarks, setBookMarks] = useState([]);

  const [readBooksTime, SetReadBooksTime] = useState(0);

  const handelBookMarks = blog =>{
    // console.log(blog)
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  }

const handelMarkAsRead = (id,time) =>{
  const newReadBooksTime = readBooksTime + time;
  SetReadBooksTime(newReadBooksTime);

  const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id);
  setBookMarks(remainingBookmarks)

}
  return (
    <>
    <Header></Header>
    <div className='flex flex-col md:flex-row justify-between w-11/12 mx-auto pt-8 gap-8'>
    <Blogs 
    handelMarkAsRead={handelMarkAsRead} 
    handelBookMarks={handelBookMarks} ></Blogs>
    <BookMarks 
    bookMarks={bookMarks} 
    readBooksTime={readBooksTime}>
    </BookMarks>
    </div>

    </>
  )
}

export default App
