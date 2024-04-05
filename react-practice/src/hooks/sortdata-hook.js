import { useEffect, useState } from "react";

export function useSort(list,isreverse) {
    const[data,setdata] = useState([]);

    useEffect (()=> {
        let revdata;
        if(isreverse){
             revdata = list.sort().reverse();
        }
        else{
            revdata = list.sort();
            
        }
        setdata(revdata);
    },[list,isreverse])
    return data;
}