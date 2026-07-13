import React, { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';


const StudentAdd = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL; // Assuming you store your base URL in an environment variable
  const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  const navigate = useNavigate();
  const location = useLocation();
  const studentDetails = location.state?.student;
  // console.log("pk++++",studentDetails);
  // console.log("student list baseUrl+++",backendBaseUrl);
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idType: '',
    idNo: '',
    gender: '',
    dob: '',
    religion: '',
    caste: '',
    subcaste: '',
    joiningDate: '',
    mobileNo: '',
    email: '',
    studentImage: null,
    fatherName: '',
    fatherOccupation: '',
    fatherMobileNo: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherMobile: '',
    motherEmail: '',
    parentAddress: '',
    parentPermanentAddress: '',

  });
  const [errors, setErrors] = useState({});
  const [validationError,setValidationError]=useState({});
  const [today,setToday]=useState();

  useEffect(() => {
    if (location.state && location.state.student) {
      const studentDetails = location.state.student;
      // console.log("date++",studentDetails.dob);
       // Function to format timestamp to MM/DD/YYYY
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const month = date.getMonth() + 1; // Months are 0-based, so add 1
      const day = date.getDate();
      const year = date.getFullYear();
      return `${year}/${month}/${day}`;
    };

    // Format joiningDate and dob
    const formattedJoiningDate = formatDate(studentDetails.joiningDate);
    const formattedDob = formatDate(studentDetails.dob);
  
      //  console.log("date++",formattedJoiningDate)
      //  console.log("dob+++",formattedDob)
      //  document.getElementById("dob").value = formattedDob;
      //  document.getElementById("joiningDate").value = formattedJoiningDate;
      setFormData({
        ...formData,
        firstName: studentDetails.firstName,
        lastName: studentDetails.lastName,
        idType: studentDetails.idType,
        idNo: studentDetails.idNo,
        gender: studentDetails.gender,
        dob: formattedDob,
        religion: studentDetails.religion, // fixed typo here
        caste: studentDetails.caste,
        subcaste: studentDetails.subcaste,
        joiningDate: formattedJoiningDate,
        mobileNo: studentDetails.mobileNo,
        email: studentDetails.email,
        studentImage: studentDetails.studentImage,
        fatherName: studentDetails.fatherName,
        fatherOccupation: studentDetails.fatherOccupation,
        fatherMobileNo: studentDetails.fatherMobileNo,
        fatherEmail: studentDetails.fatherEmail,
        motherName: studentDetails.motherName,
        motherOccupation: studentDetails.motherOccupation,
        motherMobile: studentDetails.motherMobile,
        motherEmail: studentDetails.motherEmail,
        parentAddress: studentDetails.parentAddress,
        parentPermanentAddress: studentDetails.parentPermanentAddress,
        // Add mobileNo, email, and other details as needed
        // studentImage: studentDetails.studentImage, // if you want to set student image as well
      })
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    // First Name Validation: Required + Only Alphabets
    if (!formData.firstName.trim()) {
        newErrors.firstName = "First Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName.trim())) {
        newErrors.firstName = "First Name should contain only alphabets";
    }

    // Gender Validation: Required
    if (!formData.gender) newErrors.gender = "Gender is required";

    // Date of Birth Validation: Required + Format Check____
    if (!formData.dob) {
        newErrors.dob = "Date of Birth is required";
    } else {
        const dobDate = new Date(formData.dob);
        const today = new Date();
        if (dobDate >= today) {
            newErrors.dob = "Date of Birth must be in the past";
        }
    }

    // Mobile Number Validation: Required + Must be 10 Digits
    if (!formData.mobileNo.trim()) {
        newErrors.mobileNo = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNo.trim())) {
        newErrors.mobileNo = "Enter a valid 10-digit Mobile Number";
    }

    // Email Validation: Required + Valid Email Format
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Enter a valid Email";
    }

    // Caste Validation: Required
    if (!formData.caste) newErrors.caste = "Caste is required";

    // Joining Date Validation: Required + Cannot be a future date
    if (!formData.joiningDate) {
        newErrors.joiningDate = "Joining Date is required";
    } else {
        const joiningDate = new Date(formData.joiningDate);
        if (joiningDate > today) {
            newErrors.joiningDate = "Joining Date cannot be in the future";
        }
    }

    setValidationError(newErrors); // Update the error state

    // Show toast only for fields with errors
    Object.entries(newErrors).forEach(([field, message]) => {
        toast.error(message);
    });

    return Object.keys(newErrors).length === 0; 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
         if(!validateForm()){
           console.log("err++11",validationError);
           toast.error(validationError);
           return;

         }
    // if (!validateForm()){
    //       console.log("errors",errors)
    //       return;
    // } 
    // Handle form submission (e.g., API call)
    // console.log("all data++++",formData);
    try {
        if(location.state&&location.state.student){
                const id=location.state.student._id;
                // console.log("_id+++++",id);
                // console.log("formData+++++",formData);
                const result=await axios.post(`${backendBaseUrl}student/updateMasterRecord/ ${id}`,formData)
                if(result.data.status==200){
                        navigate('/admin/students',{state:{successfullyUpdateStudent:"success"}});
                }else{
                  toast.error(result.data.message);
                }
        }else{
          const result = await axios.post(`${backendBaseUrl}student/addSubmit`, formData);
          // console.log("front end data++",result.data.status);
          if (result.data.status == 200) {
            toast.success("Data add successfully");
          }
        }
     
    }
    catch (err) {
      toast.error(err.message);
      return console.log(err.message);
    }
    // You can use fetch/axios to submit the form data to the backend API
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '351px' }}>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Add Students</h3>
              <ul className="breadcrumb">
                {/* <li className="breadcrumb-item"><a href={`${baseUrl}/admin/students`}>Students</a></li> */}
                <li className="breadcrumb-item active">Add Students</li>
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
                  noValidate
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-12">
                      <h5 className="form-title"><span>Student Information</span></h5>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Id Type</label>
                        <select
                          name="idType"
                          value={formData.idType}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Id Type</option>
                          <option value="Aadhar">Aadhar</option>
                          <option value="Pencard">Pencard</option>
                          <option value="Liencens">Liencens</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Id number</label>
                        <input
                          type="text"
                          name="idNo"
                          value={formData.idNo}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Intersex">Intersex</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Date of Birth (MM/DD/YYYY)</label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Religion</label>
                        <input
                          type="text"
                          name="religion"
                          value={formData.religion}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Caste</label>
                        <select
                          name="caste"
                          value={formData.caste}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select Caste</option>
                          <option value="OBC">OBC</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="GN">GENERAL</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Sub Caste</label>
                        <input
                          type="text"
                          name="subcaste"
                          value={formData.subcaste}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Joining Date (MM/DD/YYYY)</label>
                        <input
                          type="date"
                          name="joiningDate"
                          value={formData.joiningDate}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Student Image</label>
                        <input
                          type="file"
                          name="studentImage"
                          onChange={handleFileChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <h5 className="form-title"><span>Parent Information</span></h5>
                    </div>
                    {/* Parent Info */}
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Father's Name</label>
                        <input
                          type="fatherName"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Father's Occupation</label>
                        <input
                          type="text"
                          name="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Father's Mobile</label>
                        <input
                          type="text"
                          name="fatherMobileNo"
                          value={formData.fatherMobileNo}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Father's Email</label>
                        <input
                          type="text"
                          name="fatherEmail"
                          value={formData.fatherEmail}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mother's Name</label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mother's Occupation</label>
                        <input
                          type="text"
                          name="motherOccupation"
                          value={formData.motherOccupation}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mother's Mobile</label>
                        <input
                          type="text"
                          name="motherMobile"
                          value={formData.motherMobile}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Mother's Email</label>
                        <input
                          type="text"
                          name="motherEmail"
                          value={formData.motherEmail}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Present Address</label>
                        <input
                          type="text"
                          name="parentAddress"
                          value={formData.parentAddress}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Permanent Address</label>
                        <input
                          type="text"
                          name="parentPermanentAddress"
                          value={formData.parentPermanentAddress}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* Repeat for other parent fields */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StudentAdd;
