import './post.css'
import {MoreVert} from '@material-ui/icons'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {format} from 'timeago.js'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';


export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user : currentUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`)
            console.log(response)
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    const likeHandler = () =>{
        try {
            axios.put("/posts/"+post._id+"like",{userId : currentUser._id})
        } catch (error) {
            
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img className="postProfileImg" src={user.profilePicture || PF + "person/3.jpeg"} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert></MoreVert>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText" required>{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler} />
                        <img className="likeIcon" src={`${PF}heart.png`} alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
