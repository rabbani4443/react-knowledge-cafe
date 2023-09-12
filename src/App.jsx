import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <Header></Header>
    <div className='flex flex-col md:flex-row justify-between w-11/12 mx-auto pt-8 gap-4'>
    <Blogs></Blogs>
    <BookMarks></BookMarks>
    </div>

    </>
  )
}

export default App
