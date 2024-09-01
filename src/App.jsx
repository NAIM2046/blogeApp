

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'



function App() {
  
const [bookmarks , setbookmarks] = useState([]) ;
const [readingTime , setreadingTime] = useState(0) ;
 
const handlebookmark = (blog) =>{
 const newbookmarks = [...bookmarks ,blog] ;
 setbookmarks(newbookmarks) ; 
}
const handlereadingTime = (time)=>{
  setreadingTime(readingTime+time) ;
}
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handlebookmark={handlebookmark} handlereadingTime = {handlereadingTime} ></Blogs>
    <Bookmark bookmarks={bookmarks} readingTime={readingTime} ></Bookmark>
      </div>
     
    </>
  )
}

export default App
