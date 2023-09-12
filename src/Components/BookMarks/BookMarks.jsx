import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 bg-[#2C3540] rounded-lg md:mt-10 "> 
        <div>
        <h2 className="text-2xl text-center pt-4 border-b-8 pb-3 border-[#1D232A] "> You have added : {bookMarks.length}  Books </h2> 
        </div>

            {
                bookMarks.map(bookMark=> <BookMark key={bookMark.id} bookMark={bookMark} ></BookMark> )
            }
        </div>
    );
};

BookMarks.propTypes={
    bookMarks:PropTypes.array.isRequired,
}
export default BookMarks;