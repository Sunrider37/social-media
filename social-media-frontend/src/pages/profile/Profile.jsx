import "./profile.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from '../../components/topbar/Topbar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState([]);
    const username = useParams().username;
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${username}`)
            setUser(response.data);
        };
        fetchUser();
    }, [username])
    return (
        <div>
            <Topbar></Topbar>
               <div className="profile">
               <Sidebar />
               <div className="profileRight">
                   <div className="profileRightTop">
                       <div className="profileCover">
                       <img className="profileCoverImg" alt="" src={user.coverPicture ? 
                       PF.user.coverPicture :
                         PF+"person/noCover.png"}/>
                       <img className="profileUserImg" alt="" src={user.profilePicture ? PF.user.profilePicture
                         : PF+"person/noAvatar.png"} />
                       </div>
                       <div className="profileInfo">
                           <h4 className="profileInfoName">{user.username}</h4>
                           <span className="profileInfoDesc">{user.desc}</span>
                       </div>
                   </div>
                   <div className="profileRightBottom">
                   <Feed username={username}></Feed>
                   <Rightbar user={user}></Rightbar>
                   </div>
               </div>
               </div>
        </div>
    )
}
