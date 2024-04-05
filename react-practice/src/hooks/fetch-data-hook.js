import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {

    const[data,setdata] = useState([]);

    useEffect(()=> {
        axios.get(url).then((res)=> {
            setdata(res.data);
        });

    },[url])
    return data;
}