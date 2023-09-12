import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks, readBooksTime}) => {
    return (
        <div className="md:w-1/3 bg-[#373D4E] rounded-lg "> 
        <div className='bg-[#2c3540] rounded-lg mb-4'>
        <h2 className="text-2xl text-center pt-4 pb-3 text-teal-200"> Reading Time : {readBooksTime} </h2>
        </div>

        <div className='rounded-lg'>
        <div>
        <h2 className="bg-[#2C3540] rounded-lg text-2xl text-center pt-4 pb-3 text-emerald-500"> You have added : {bookMarks.length}  Books </h2> 
        </div>

            {
                bookMarks.map((bookMark,idx)=> <BookMark key={idx} bookMark={bookMark} ></BookMark> )
            }
        </div>
        </div>
    );
};

BookMarks.propTypes={
    bookMarks:PropTypes.array.isRequired,
    readBooksTime:PropTypes.number,
}
export default BookMarks;