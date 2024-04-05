import { useCustomDate } from "../../hooks/custon-date-hook";
import './custom-date.css';

export function CustomDate() {
    var now = new Date();
    let customDate = useCustomDate(now);
    return(
        <div className="container-fluid">
            <dt>Custom Date Format</dt>
            <dd className="data">{customDate}</dd>
        </div>
    )
}