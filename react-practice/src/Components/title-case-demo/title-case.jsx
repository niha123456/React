import { useTitleCase } from "../../hooks/title-case"

export function TitleCase() {
    let titleCase = useTitleCase("mY nAme Is nIhaRika");
    return(
       <div>
            <h3>Title-Case Transformation</h3>
            {
                <h2>{titleCase + "  "}</h2>
            }
       </div>
    )
}