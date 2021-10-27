import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const HomePage = () => {
const {data:blogs,loding,error}=useFetch('http://localhost:8000/blogs');

//       const handleDelete=(id)=>{
// setBlogs(blogs.filter((blog)=>blog.id !==id));
//       }
    return (
        <div className='home'>
            {error&&<div>{error}</div>}
            {loding && <div>Loding......</div>}
        {blogs&& <BlogList blogs={blogs} title='All blog'/>}
         {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title='Mario blog' /> */}
        </div>
    );
};

export default HomePage;