import React, { useState } from 'react';

const Admin_login = () => {
    // State to hold form data
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('User Id:', userId, 'Password:', password);
    };

    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
                        {/* Content can go here */}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Admin Login</div>
                            <div className="style7">
                                <form onSubmit={handleSubmit}>
                                    <table className="style1">
                                        <tbody>
                                            <tr>
                                                <td className="style14">User Id:</td>
                                                <td className="style11">
                                                    <input
                                                        type="text"
                                                        id="ContentPlaceHolder1_txtid"
                                                        style={{ height: '30px', width: '151px' }}
                                                        value={userId}
                                                        onChange={(e) => setUserId(e.target.value)} // Handle input change
                                                    />
                                                    &nbsp;
                                                    <span
                                                        id="ContentPlaceHolder1_lblmsg"
                                                        style={{ color: '#333333', fontSize: 'medium' }}
                                                    ></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style13">Password:</td>
                                                <td className="style12">
                                                    <input
                                                        type="password"
                                                        id="ContentPlaceHolder1_txtpass"
                                                        style={{ height: '30px', width: '151px' }}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} // Handle password change
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style22">&nbsp;</td>
                                                <td className="style15">
                                                    <button
                                                        type="submit"
                                                        id="ContentPlaceHolder1_ImageButton1"
                                                        style={{
                                                            height: '29px',
                                                            width: '78px',
                                                            background: 'url(buttonimages/login-button03.png) no-repeat center center',
                                                            border: 'none',
                                                        }}
                                                    >
                                                        {/* You can replace this with an actual image if needed */}
                                                        {/* Login */}
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_login;
