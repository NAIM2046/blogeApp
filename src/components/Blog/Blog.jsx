
import PropTypes from 'prop-types' ;
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handlebookmark, handlereadingTime}) => {
    const {title, cover,author ,author_img ,reading_time ,postdata ,hashtag} = blog ;
    return (
        <div className='mb-20'>
           
            <img className='w-full mb-8' src= {cover} alt={`cover page is the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src= {author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postdata}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handlebookmark(blog)} className='ml-2 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtag.map((hash , ind) => <span key={ind}> <a href=''> #{hash}</a></span>)
                }
            </p>
            <button onClick={()=>{handlereadingTime(reading_time)}} className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};
Blog.PropTypes ={
    blog : PropTypes.object.isRequired ,
    handlebookmark : PropTypes.func ,
    handlereadingTime : PropTypes.func

}
export default Blog;