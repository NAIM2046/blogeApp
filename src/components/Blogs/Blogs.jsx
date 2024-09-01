import { useState } from 'react'
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types' ;
const Blogs = ({handlebookmark , handlereadingTime}) => {
    const [blogs , setBlogs] = useState([]) ;
useEffect( ()=>{
  fetch("blogs.json")
  .then(res => res.json())
  .then(data => setBlogs(data))
},[])
    return (
        <div className='md:w-2/3'>
            <h3>Blogs {blogs.length}</h3>
            {
                blogs.map(blog =><Blog key={blog.id}
                    blog ={blog} handlebookmark={handlebookmark} handlereadingTime= {handlereadingTime}></Blog>)
            }
        </div>
    );
};
Blogs.PropTypes ={
    
    handlebookmark : PropTypes.func,
    handlereadingTime : PropTypes.func

}
export default Blogs;