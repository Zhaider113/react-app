
import React from "react";
import { Image } from '@themesberg/react-bootstrap';
import profileImg from "../../assets/img/team/avatar-1.png";

const Messages = (props) => {
    let {messages, classes, item} = props
    console.log(classes, "classes", item)
    return (
        <>
            <div className="mesgs">
                <div className="msg_history">
                    {/* <div className={`${classes}_msg`}> */}
                        <div className={`${classes}_msg`}>
                            <div className={`${classes}_withd_msg`}>
                                <p>{messages}</p>
                                <span className="time_date">
                                    <Image className="incoming_msg_img" src={profileImg} alt="Sender Image" style={{display:classes==='outgoing'?'none':'block'}}/>
                                    <span className={`${classes}_time_date`}>11:01 AM | June 9</span>
                                </span>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages;