import { useFetch } from "../../hooks/fetch-data-hook"

export function HookDemo() {

    let categories = useFetch('https://fakestoreapi.com/products/categories');
    return(
        <div className="container-fluid">
            Fetch Data from a  Hook 
            <ol>
            {
                categories.map(item=> <li key={item}>{item}</li>)
            }
            </ol>
        </div>
    )
}