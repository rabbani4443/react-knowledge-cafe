import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookMarks, handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div className="md:w-2/3 ">
                <h2 className="text-4xl bg-[#2C3540] rounded-lg text-center py-2 mb-2">Total Blogs: {blogs.length} </h2>
                {
                    blogs.map(blog=> <Blog 
                        key={blog.id} 
                        blog={blog} 
                        handelBookMarks={handelBookMarks} 
                        handelMarkAsRead={handelMarkAsRead} >
                        </Blog> )
                }
        </div>
    );
};
Blogs.propTypes={
    handelBookMarks: PropTypes.func.isRequired,
    handelMarkAsRead:PropTypes.func.isRequired,
}
export default Blogs;