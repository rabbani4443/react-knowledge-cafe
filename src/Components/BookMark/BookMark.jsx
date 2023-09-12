import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    const {title} = bookMark
    return (
        <div className='bg-[#373D4E] m-3 p-4 rounded-md'>
            <h2 className='text-xl leading-normal '> {title}</h2>
        </div>
    );
};
BookMark.propTypes={
    bookMark:PropTypes.object.isRequired
}
export default BookMark;