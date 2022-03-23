import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp } from "../features/userSlice";
import "../index.css";

const SignUpForm = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [dob, setdob] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            signUp({
                name: name,
                email: email,
                dob: dob,
                password: password,
            })
        )
    }

    return (
        <>
            <div className="container">
                <h1 className='text-center my-5 app-title'>Social Media App</h1>
                <div className="row">
                    <div className="col signupBox">
                        <h2 className='text-white text-center my-2' style={{ fontSize: "3em" }}>Sign Up</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control signupinput" id="floatingInput1" placeholder="name@example.com" autoComplete='off' required
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                                <label for="floatingInput1">Enter Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control signupinput" id="floatingInput2" placeholder="email@example.com" autoComplete='off' required
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                />
                                <label for="floatingInput2">Enter Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="datetime-local" className="form-control signupinput" id="floatingInput3" placeholder="dob@example.com" autoComplete='off' required
                                    value={dob}
                                    onChange={(e) => setdob(e.target.value)}
                                />
                                <label for="floatingInput3">Enter D-O-B</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control signupinput" id="floatingInput4" placeholder="password@example.com" autoComplete='off' required
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                <label for="floatingInput4">Enter Password</label>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col">
                                    <button className='signUpBtn'>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUpForm;