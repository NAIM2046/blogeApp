import PropTypes from 'prop-types' ;

const BookmarkList = ({bookmark}) => {
    const {title} = bookmark ;
    return (
        <div className='bg-gray-300 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
BookmarkList.PropTypes ={
    bookmark: PropTypes.object 

}
export default BookmarkList;