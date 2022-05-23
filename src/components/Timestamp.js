import "../App.css";
import  "./Tweet"

export default function Timestamp(props){
    return(
    <p className="timestamp">{props.time}</p>)
}