import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Id:', userId, 'Password:', password);
    alert('Login submitted. Connecting to admin panel...');
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Portal Access</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Admin Login</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="profile-card p-4 p-md-5">
                <div className="text-center mb-4">
                  <div 
                    className="feature-icon-wrapper mx-auto mb-3" 
                    style={{ width: '60px', height: '60px', fontSize: '1.5rem', backgroundColor: 'rgba(253, 6, 72, 0.08)', color: '#fd0648' }}
                  >
                    <i className="fa fa-lock"></i>
                  </div>
                  <h4 className="font-weight-bold text-dark mb-1">Administrative Login</h4>
                  <p className="text-muted small">Sign in to access control panels and upload notices.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3 text-left">
                    <label className="font-weight-bold text-dark small mb-1">User ID</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-light border-right-0" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                          <i className="fa fa-user text-muted"></i>
                        </span>
                      </div>
                      <input 
                        type="text" 
                        className="form-control border-left-0" 
                        required
                        placeholder="Enter User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-4 text-left">
                    <label className="font-weight-bold text-dark small mb-1">Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-light border-right-0" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                          <i className="fa fa-key text-muted"></i>
                        </span>
                      </div>
                      <input 
                        type="password" 
                        className="form-control border-left-0" 
                        required
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="premium-btn border-0 py-3 w-100 text-white font-weight-bold"
                    style={{ borderRadius: '8px', letterSpacing: '1px' }}
                  >
                    <i className="fa fa-sign-in-alt mr-2"></i> SIGN IN
                  </button>
                </form>

                <div className="text-center mt-4">
                  <Link to="/contact" className="text-muted small">
                    Forgot password? Contact IT Administrator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
