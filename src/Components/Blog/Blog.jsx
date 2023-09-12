import PropTypes from 'prop-types';
import { ImBookmarks } from 'react-icons/im';



const Blog = ({blog,handelBookMarks}) => {
    const {title,cover,readingTime,author,authorImage,postPublishDate,hashtag} = blog
    return (
        <div>
            <img className='w-full ' src={cover} alt= {`cover images title ${title}`}/>
            <div className='flex flex-row justify-between items-center'> 
                <div className='flex flex-row gap-3 mt-5 items-center'>
                    <div className='w-14 '>
                     <img className='w-full rounded-full' src={authorImage} alt={author} />  
                    </div>
                    <div> 
                        <h3 className='text-2xl text-gray-300' > {author} </h3>
                        <h4 className='text-lg text-gray-300' > {postPublishDate} </h4>
                    </div>

                </div>
                <div className='flex gap-2 items-center'>
                    <h4 className='text-lg text-gray-300 '>{readingTime} min read </h4>
                    <button onClick={() => handelBookMarks (blog)} className='text-3xl' > 
                    <ImBookmarks></ImBookmarks> 
                    </button>
                </div>
            </div>
            <h2 className='text-4xl leading-normal py-4'> {title}</h2>
            <a href=""></a>
            <div className='pb-4 text-lg'>
                {hashtag.map((hash,idx)=> <span key={idx} > <a href="#"># {hash} </a> </span>) }
            </div>
            <h3 className='pb-6 underline text-lg text-teal-300'>Mark As Read</h3>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handelBookMarks: PropTypes.func.isRequired
}
export default Blog;