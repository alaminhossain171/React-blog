import React,{useState} from "react";
import { useHistory } from "react-router";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author,setAuthor] = useState('mario');
const[pending,setPending]=useState(false);
const history=useHistory();
const handleClick=(e)=>{
e.preventDefault();
let blog={title,body,author};
setPending(true);
fetch('http://localhost:8000/blogs', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(blog)
}).then((res) =>{
    setPending(false);
    return res.json();
   
} )
  .then((res)=>{
      console.log(res);
      history.push('/');
     
  });
}
  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form>
        <label htmlFor="title">Blog title:</label>
        <input type="text" required value={title}  onChange={(e)=>setTitle(e.target.value)} />

        <label htmlFor="body">Blog body:</label>
        <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

        <label htmlFor="select"></label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>{!pending &&   <button onClick={handleClick}>Add blog</button>}
        {pending &&   <button onClick={handleClick}>Add blog.....</button>}
      
      </form>
    </div>
  );
};

export default Create;
