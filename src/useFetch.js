import {useEffect,useState} from "react";

const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [loding,setLoding]=useState(true);
    const [error,setError]=useState(null);

       
useEffect(() => {
    setTimeout(()=>{
        fetch(url)
    
    .then(function(res){
      if(!res.ok){
          throw Error('Could not fetch data');
       
      }
        return res.json();
        
    }) 
    .then(json =>{
        setData(json);
        setLoding(false);
    }
    
    
    )    
    .catch((err) =>{
        setLoding(false);
return setError(err.message);

    }
        
        
        
        
        
        );
    },2000)
}, [url])
return {data,loding,error};
}
export default useFetch;