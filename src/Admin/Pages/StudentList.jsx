import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // jQuery for DataTable
import axios,{isCancel,AxiosError} from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import {useNavigate,useLocation} from "react-router-dom";

// import 'datatables.net-dt/css/jquery.dataTables.css'; // DataTable CSS

const StudentList = () => {
  const navigate=useNavigate();
  const location=useLocation();

  const baseUrl = process.env.REACT_APP_BASE_URL; // Assuming you store your base URL in an environment variable
  const backendBaseUrl=process.env.REACT_APP_BACKEND_BASE_URL

  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [tableInstance, setTableInstance] = useState(null);
  const [rowsPerPage,setRowsPerPage]=useState(10);
    
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  useEffect(() => {
      fetchData();
      if (location.state&&location.state.successfullyUpdateStudent) {
        toast.success("Student Update Successful");
        fetchData(); 
        navigate(location.pathname, { replace: true, state: {} });
    }
      // console.log(students);
  }, [selectedClass,rowsPerPage]);


      const handleRowsChange=(event)=>{
             setRowsPerPage(parseInt(event.target.value));
      }
    
  const fetchData = async () => {
      
    // console.log("real data");
      
    const data = await axios.post(`${backendBaseUrl}student/getAllList`,{sclass:selectedClass,limit:rowsPerPage});
    // console.log("real data",data.data);
         if(data.data.status==200){
          //  console.log("a++++",data.data.data);
           setStudents(data.data.data);
              // console.log("a++++",students);
            }else{
              setStudents([]);
            }
  };

  const handleActionClick = async(actionType, id) => {
    const confirmMessage = `Are you sure you want to ${actionType} this student?`;
    if (window.confirm(confirmMessage)) {
      try{
        switch(actionType){
          case 'delete':
                 const resultt = await axios.get(`${backendBaseUrl}student/${actionType}/${id}`);
                if(resultt.data.status==200){
                  toast.success(resultt.data.message);
                  fetchData()
             }else{
              toast.error(result.data.message);
                
             }
             break;
             case 'deactive':
              // console.log("deactive data+++123");
                const result=await axios.get(`${backendBaseUrl}student/deactive/${id}`)
                 console.log("a12++",result.data);
                   if(result.data.status==200){
                      toast.success("student Deactivate")
                      fetchData();
                   }
              break;
              default:
                toast.error("Unknow action type");
            }
      }catch(err){
          console.error("rror occurred:",err.message3)
          toast.error(err.message);
      }
    }
  };

  const edit=async(id,studentDetails)=>{
        const confirmMessage="Are you sure you want to edit student ?"
        if(window.confirm(confirmMessage)){
          console.log("studnet detail",studentDetails);
             navigate('/admin/student/add',{state:{student:studentDetails}})
        }

  }



  const renderTableActions = (id, isAccountDeactive,student) => (
    <div className="actions">
      <button
        title="Deactive Student"
        onClick={() => handleActionClick('deactive', id)}
        className="btn btn-sm bg-danger-light me-2"
      >
        <i className="fas fa-power-off"></i>
      </button>
      <button
        title="Promote Student"
        onClick={() => handleActionClick('promote', id)}
        className="btn btn-sm bg-primary-light me-2"
      >
        <i className="fas fa-cannabis"></i>
      </button>
      <button
        title="Update Details"
        className="btn btn-sm bg-success-light me-2"
        onClick={() => edit(id,student)}
      >
        <i className="fas fa-pen"></i>
      </button>
      <button
        title="Delete Record"
        onClick={() => handleActionClick('delete', id)}
        className="btn btn-sm bg-danger-light"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );

  return (
    <div class="page-wrapper" style={{minHeight: 279}}>
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Students</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/admin/students">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Students</li>
            </ul>
          </div>
          <div className="col-auto text-end float-end ms-auto">
            <a href="/Admin/student/add" className="btn btn-primary">
              <i className="fas fa-plus"></i>
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="col-md-3" style={{ float: 'right' }}>
              <label>Select current class</label>
              <select
                value={selectedClass}
                onChange={handleClassChange}
                className="form-control"
              >
                <option value="">Please select class</option>
                <option value="KG">KG</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1">1st class</option>
                <option value="2">2nd class</option>
                <option value="3">3rd class</option>
                <option value="4">4th class</option>
                <option value="5">5th class</option>
                <option value="6">6th class</option>
                <option value="7">7th class</option>
                <option value="8">8th class</option>
                <option value="9">9th class</option>
                <option value="10">10th class</option>
                <option value="11">11th class</option>
                <option value="12">12th class</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
              <div className="dt-buttons">
                      <div className="dt-buttons">
                        <select
                          className="form-control dropdown-select"
                          value={rowsPerPage}
                          onChange={handleRowsChange}
                        >
                          <option value={10}>Show 10 rows</option>
                          <option value={20}>Show 20 rows</option>
                          <option value={30}>Show 30 rows</option>
                        </select>
                      </div>

                      <button className="dt-button buttons-copy buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" type="button">
                        <span>Copy</span>
                      </button>
                      <button className="dt-button buttons-csv buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" type="button">
                        <span>CSV</span>
                      </button>
                      <button className="dt-button buttons-excel buttons-html5" tabIndex="0" aria-controls="DataTables_Table_0" type="button">
                        <span>Excel</span>
                      </button>
                      <button className="dt-button buttons-print" tabIndex="0" aria-controls="DataTables_Table_0" type="button">
                        <span>Print</span>
                      </button>
                    </div>
                <table className="table table-bordered table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-end">Action</th>
                      <th>Status</th>
                      <th>Reg. No</th>
                      <th>Name</th>
                      <th>C Class</th>
                      <th>Profile</th>
                      <th>TC Created</th>
                      <th>DOB</th>
                      <th>Parent Name</th>
                      <th>Parent Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student._id}>
                        <td>{renderTableActions(student._id, student.isAccountDeactive,student)}</td>
                        <td>{student.isAccountDeactive ? 'Deactive' : 'Active'}</td>
                        <td>{student.regNo}</td>
                        <td>{`${student.firstName} ${student.lastName}`}</td>
                        <td>{student.currentClass}</td>
                        { <td>
                          {student.studentImage ? (
                            <img
                              src={`/AdminPortal/student/${student.studentImage}`}
                              alt="Profile"
                              width="48"
                              height="48"
                            />
                          ) : (
                            ''
                          )}
                        </td> }
                        <td>{student.isTCCreated ? 'Yes' : 'No'}</td>
                        <td>{student.dob ? new Date(student.dob).toLocaleDateString() : '-'}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.fatherMobileNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br/>
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                      {students.length>0? `Show Total Record  ${students.length}`:"Show Total Record 0"}
                    </div>
                      <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default StudentList;
