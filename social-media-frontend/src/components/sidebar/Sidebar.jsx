import './sidebar.css'
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark,
HelpOutline, WorkOutline, Event, School} from "@material-ui/icons"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"></RssFeed>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <Link to="/messenger" className="link" style={{textDecoration: 'none', color: 'black'}} >
                        <Chat className="sidebarIcon"></Chat>
                        <span className="sidebarListItemText">Chats</span>
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"></Group>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"></PlayCircleFilledOutlined>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"></WorkOutline>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"></Event>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"></Bookmark>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                   <School className="sidebarIcon" />
                  <span className="sidebarListItemText">Courses</span>
          </li>
               <li className="sidebarListItem">
                     <HelpOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Questions</span>
                  </li>
                </ul>
                <button className="sidebarButton">Show More?</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u => (
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
