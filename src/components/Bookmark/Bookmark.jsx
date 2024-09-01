import PropTypes from 'prop-types' ;
import BookmarkList from '../BookmarkList/BookmarkList';

const Bookmark = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-2 pt-4" >
            <div>
                Reading Time : {readingTime}
            </div>
            <h3 className="text-2xl text-center"> 
            Bookmarked Blogs : {bookmarks.length} </h3>

            {
                bookmarks.map(bookmark => <BookmarkList key={bookmark.id} bookmark={bookmark}></BookmarkList>)
            }
        </div>
    );
};
Bookmark.PropTypes ={
   bookmarks: PropTypes.array ,
   readingTime : PropTypes.number 

}
export default Bookmark;