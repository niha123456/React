import { useEffect, useState } from "react";

export function useCustomDate(data) {
    const[date,setdate] = useState('');

    useEffect(()=> {
        
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        var months = ["January", "Febrauary", "March", "April", "May", "June","July","August","September","October","November","December"];
        setdate(`
        ${weekdays[data.getDay()]} ${data.getDate()}, ${months[data.getMonth()]} ${data.getFullYear()}
   `);
       
    },[data])
    return date;
}