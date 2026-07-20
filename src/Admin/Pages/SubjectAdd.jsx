import React, { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
const SubjectAdd = (e) => {
  const location = useLocation();
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  // console.log("+++++",baseUrl)
  // console.log("+++++",backendBaseUrl)

  const [subjectName, setSubjectName] = useState('');
  const [selectClass, setSelectClass] = useState('');
  const [subjectSequence, setSubjectSequence] = useState('');
  const [subjectJustForGrade, setSubjectJustForGrade] = useState(false);



  useEffect(() => {
    if (location.state && location.state.editData) {
      const editData = location.state.editData;
      // console.log("editData++++",editData);
      setSubjectName(editData.subjectName);
      setSubjectJustForGrade(editData.subjectJustForGrade);
      setSelectClass(editData.selectClass);
      setSubjectSequence(editData.subjectSequence);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!subjectName || !selectClass || !subjectSequence) {
      return toast.error("All field required");
    } else {

      const data = {
        subjectName,
        selectClass,
        subjectSequence,
        subjectJustForGrade,
      };
      try {
        if(location.state&&location.state.editData) {
                  const {_id}=location.state.editData;
                  const result=await axios.put(`${backendBaseUrl}subject/updateMasterRecord/${_id}`,data);
                  console.log("edit api response++",result.data);
                  if(result.data.status==200){
                      toast.success("Record update Successfuly");
                      navigate('/admin/subjects',{state:{successMessage:"Record update Successfuly"}});
                  }else{
                      toast.error(result.data.message);
                  }
        } else {
          const result = await axios.post(`${backendBaseUrl}subject/addSubmit`, data)
          console.log(result.data.status);
          if (result.data.status == 200) {
            toast.success("Subject Add Successfuly");
            // console.log(result.data.data);
            // navigate('/admin/subjects');
          } else {
            toast.error(result.data.message);
          }
        }
        setSubjectName('');
        setSelectClass('');
        setSubjectSequence('');
        setSubjectJustForGrade(false);
      } catch (err) {
        toast.error(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div>
      <div className="page-wrapper" style={{ minHeight: '314px' }}>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Add Subject</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href={`${baseUrl}admin/subject/add`}>Subjects</a>
                  </li>
                  <li className="breadcrumb-item active">Add Subject</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form
                    className="needs-validation"
                    onSubmit={handleSubmit}
                    noValidate
                    encType="multipart/form-data"
                  // action={`${baseUrl}admin/subject/add`}
                  >
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>Subject Information</span>
                        </h5>
                      </div>
                      <div className="col-4">
                        <div className="form-group">
                          <label>Subject Name</label>
                          <input
                            type="text"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            required
                            name="subjectName"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-group">
                          <label>Class</label>
                          <select
                            name="selectClass"
                            value={selectClass}
                            onChange={(e) => setSelectClass(e.target.value)}
                            required
                            id="selectClassId"
                            className="form-control"
                          >
                            <option value="" selected>
                              Please select class
                            </option>
                            <option value="KG">KG</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="1">1st Class</option>
                            <option value="2">2nd Class</option>
                            <option value="3">3rd Class</option>
                            <option value="4">4th Class</option>
                            <option value="5">5th Class</option>
                            <option value="6">6th Class</option>
                            <option value="7">7th Class</option>
                            <option value="8">8th Class</option>
                            <option value="9">9th Class</option>
                            <option value="10">10th Class</option>
                            <option value="11">11th Class</option>
                            <option value="12">12th Class</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-group">
                          <label>Subject Sequence</label>
                          <select
                            name="subjectSequence"
                            value={subjectSequence}
                            onChange={(e) => setSubjectSequence(e.target.value)}
                            required
                            id="subjectSequence"
                            className="form-control"
                          >
                            <option value="" selected>
                              Select sequence
                            </option>
                            {[...Array(20)].map((_, index) => (
                              <option value={index + 1} key={index}>
                                {index + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="col-3">
                          <div className="form-group">
                            <input
                              id="sjfg"
                              type="checkbox"
                              checked={subjectJustForGrade}
                              onChange={(e) => setSubjectJustForGrade(e.target.checked)}
                              value="true"
                              name="subjectJustForGrade"
                            />
                            <label htmlFor="sjfg"> Subject just for grade</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>Copyright © 2022 Gayatri Gurukul Public School.</p>
        </footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubjectAdd;
