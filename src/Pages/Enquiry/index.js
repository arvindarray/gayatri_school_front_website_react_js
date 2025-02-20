import React, { useState } from 'react';

const Enquiry = () => {
    // State hooks for form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [query, setQuery] = useState('');
    const [detail, setDetail] = useState('');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log({ name, email, mobile, query, detail });
    };

    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
                        {/* You can add additional content or styling here */}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Send Enquiry</div>
                            <br />
                            <div className="style4">
                                <form onSubmit={handleSubmit}>
                                    <table className="style1">
                                        <tbody>
                                            <tr>
                                                <td colSpan="2" className="style32">
                                                    <span className="style33">
                                                        <strong>Please post your quick enquiry related to any question. We will reply as soon as possible.</strong>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style49">Name:</td>
                                                <td className="style44">
                                                    <input
                                                        type="text"
                                                        id="ContentPlaceHolder1_txtname"
                                                        style={{ width: '150px' }}
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style45">Email:</td>
                                                <td className="style46">
                                                    <input
                                                        type="email"
                                                        id="ContentPlaceHolder1_txtemail"
                                                        style={{ width: '150px' }}
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style45">Mobile No:</td>
                                                <td className="style46">
                                                    <input
                                                        type="text"
                                                        id="ContentPlaceHolder1_txtmob"
                                                        style={{ width: '150px' }}
                                                        value={mobile}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style47">Question Related To:</td>
                                                <td className="style48">
                                                    <input
                                                        type="text"
                                                        id="ContentPlaceHolder1_txtquery"
                                                        style={{ width: '150px' }}
                                                        value={query}
                                                        onChange={(e) => setQuery(e.target.value)}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style50">Detail:</td>
                                                <td>
                                                    <textarea
                                                        id="ContentPlaceHolder1_Txtdetail"
                                                        rows="2"
                                                        cols="20"
                                                        style={{ height: '93px', width: '212px' }}
                                                        value={detail}
                                                        onChange={(e) => setDetail(e.target.value)}
                                                        required
                                                    ></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="style13">&nbsp;</td>
                                                <td>
                                                    <button type="submit" style={{ height: '31px', width: '100px' }}>
                                                        Submit
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

export default Enquiry;
