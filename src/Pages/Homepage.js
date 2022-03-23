import React, { useState } from 'react'
import "../index.css"
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Homepage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [post, setpost] = useState('');
    const [addPost, setaddPost] = useState([]);

    const user = useSelector(selectUser);

    const submitPost = () => {
        if (!post) {

        } else {
            setaddPost([...addPost, post])
            setpost('')
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src="/images/user.png" alt="userImg" className='userImg' />
                        <div className="row userFields">
                            <div className="col-6">
                                <p className='userName'>{user.name}</p>
                            </div>
                            <div className="col-6">
                                <p className='userEmail'>{user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-8">
                        <h2 className='userPosts'>Posts</h2>
                        {
                            addPost.map((currPost) => {
                                return (
                                    <>
                                        <li className='addedPost'>{currPost}</li>
                                        <hr />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-4">
                        <img src="/images/posts.gif" alt="posts" style={{ position: "fixed" }} />
                    </div>
                </div>
            </div>
            <div className="row add-post">
                <div className="col text-center">
                    <Tooltip title="Add New Post" placement="top">
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-add-100-most-used-icons-flaticons-lineal-color-flat-icons.png" alt='addPostImg' className='addPostImg' onClick={handleOpen} />
                    </Tooltip>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modalBox' style={{ width: "50%" }}>
                    <h3 className='my-3'>Add A New Post</h3>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control logininput" id="floatingInput1" placeholder="email@example.com" autoComplete='off' required
                            value={post}
                            onChange={(e) => setpost(e.target.value)}
                        />
                        <label for="floatingInput1">Share A Post ..</label>
                    </div>
                    <button className='btn btn-success m-3' onClick={submitPost}>Post</button>
                </Box>
            </Modal>
        </>
    )
}

export default Homepage