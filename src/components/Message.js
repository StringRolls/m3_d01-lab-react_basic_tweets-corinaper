import "../App.css";
import  "./Tweet"

export default function Message(props){
    return(
    <p className="message">{props.message}</p>)
}