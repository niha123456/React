import { useSort } from "../../hooks/sortdata-hook";

export function SortDataList() {
    let data = useSort(["Apple","Mango","Banana","Grapes","WaterMelon","Papaya","Carrot","Cucumber","Beetroot","Tomato","Lemons","SugarCane"],true);
    return(
        <div className="container-fluid">
            <dt>Data After Sorting Accordingly</dt>
            <dd>
               <ol>
                {
                        data.map(item=><li key={item}>{item}</li>)
                }
               </ol>
            </dd>
        </div>
    )
}
