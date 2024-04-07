import { useEffect, useState } from "react";

export function useTitleCase(sent){
    const[sentence,setSentence] = useState('');
    useEffect(()=>{
        var sentArr = sent.split(' ');
        let titleCaseSentence = '';
    for(var i=0;i<sentArr.length;i++){
        var word = sentArr[i];
        var firstpart = word.charAt(0).toUpperCase();
        var secpart = word.substring(1).toLowerCase();
        var ans = firstpart+secpart;
        titleCaseSentence += ans + '   ';
        setSentence(titleCaseSentence);
    }
    },[sent])
    return sentence;
}
