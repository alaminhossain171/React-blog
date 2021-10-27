import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then(function (res) {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((json) => {
          setData(json);
          setLoding(false);
          setError(null);
        })
        .catch((err) => {
            if(err.name=== "AbortError"){
                console.log('pauste')
            }
            else{
                setLoding(false);
                return setError(err.message);
            }
         
        });
    }, 1000);
    return ()=>abortCont.abort();
  }, [url]);
  return { data, loding, error };
};
export default useFetch;
