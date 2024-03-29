import './message.css'
import {format} from 'timeago.js'

export default function Message({message,own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg"
                 src="https://roundhouse-assets.s3.amazonaws.com/assets/Image/18689-fitandcrop-1200x681.jpg" 
                 alt="" />
                <p className="messageText">{message?.text}</p>
            </div>
            <div className="messageBottom">{format(message?.createdAt)}</div>
        </div>
    )
}
