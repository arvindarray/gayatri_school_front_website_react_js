import React, { useState } from 'react';
import axios, { isCancel, axiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import styles from '../../../../../public/AdminPortal'
const SubjectsPage = () => {

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedClass, setSelectedClass] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectList,setSubjectList]=useState([]);
  const [rowsPerPage, setRowsPerPage]=useState(10)

  const fetchSubject = async () => {
    try {
      const data = {
         selectedClass,
         rowsPerPage,
        start: '1'
      }
      const result = await axios.post(`${backendBaseUrl}subject/getAllList`,data);
        // console.log("result++",result.data.data);
        // console.log("satus++",result.data.status);
      if (result.data.status == 200) {
        setSubjects(result.data.data)
      } else {
        setSubjects([]);
      }
      // console.log("frond end data++", result.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (location.state && location.state.successMessage) {
      toast.success(location.state.successMessage);
      navigate(location.pathname, { replace: true });
    }
      //  console.log("useEffect++",rowsPerPage);
    if (selectedClass&&rowsPerPage) {
      fetchSubject();
    }
  }, [location, selectedClass,rowsPerPage]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  }

  const handleRowsChange= (event)=>{
    const newRowsPerPage=parseInt(event.target.value);
    // console.log("rowss++",newRowsPerPage);
     setRowsPerPage(newRowsPerPage)
    // console.log("row parpage+++",rowsPerPage);
  }

  const handleDelete = async (data) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this subject?");
    if (isConfirmed) {
      try {
        const id = data;
        // console.log("id+++++",id);
        const result = await axios.get(`${backendBaseUrl}subject/delete/${id}`)
        if (result.data.status == 200) {
          fetchSubject()
          // console.log("data delete successfuly");
          toast.success("Data delete successful");
        } else {
          fetchSubject()
          toast.error(result.data.message);
        }
      } catch (err) {
        console.log(err.message)
      }
    }

  }

  const handleEdit = async (data) => {
    //  console.log("id+++++",data);
    //  console.log("id+++++",data.id);
    const isConfirmed = window.confirm("Are you sure you want to Edit this Subject ?");
    if (isConfirmed) {
      try {
        navigate('/admin/subject/add', { state: { editData: data } });
      } catch (err) {
        toast.error(err.message);
        console.log(err.message);
      }
    }

  }

 

  return (
    <div className="page-wrapper" style={{ minHeight: '418px' }}>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Subjects</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href={`${baseUrl}admin/Subjects`}>Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Subjects</li>
              </ul>
            </div>
            <div className="col-auto text-end ms-auto">
              <a href={`${baseUrl}Admin/subject/add`} className="btn btn-primary">
                <i className="fas fa-plus"></i>
              </a>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <div className="col-md-3" style={{ float: 'right' }}>
                  <label>Select class</label>
                  <select
                    name="selectClass"
                    id="selectClassId"
                    className="form-control"
                    value={selectedClass}
                    onChange={handleClassChange}
                  >
                    <option value="" selected="">Please select class</option>
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
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

                    {/* <div id="DataTables_Table_0_filter" className="dataTables_filter">
                      <label>Search:<input type="search" className="form-control form-control-sm" placeholder="Search by name" aria-controls="DataTables_Table_0" /></label>
                    </div> */}

                    <table className="table table-bordered table-hover table-center mb-0 datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                      <thead>
                        <tr role="row">
                          <th className="text-end sorting_disabled" rowSpan="1" colSpan="1">Action</th>
                          <th className="sorting_disabled" rowSpan="1" colSpan="1">Subject Name</th>
                          <th className="sorting_disabled" rowSpan="1" colSpan="1">Class</th>
                          <th className="sorting_disabled" rowSpan="1" colSpan="1">Subject Sequence</th>
                          <th className="sorting_disabled" rowSpan="1" colSpan="1">Subject Just for Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjects.length === 0 ? (
                          <tr className="odd">
                            <td colSpan="5" className="dataTables_empty">No data available in table</td>
                          </tr>
                        ) : (
                          subjects.map((subject) => (
                            <tr key={subject._id}>
                              <td className="text-center">
                                <button
                                  className="btn btn-warning btn-sm"
                                  title="Edit Subject"
                                  onClick={() => handleEdit(subject)}  // Add your onClick handler
                                >
                                  <i className="fas fa-edit"></i> {/* Pencil Icon */}
                                </button>
                                <button
                                  className="btn btn-danger btn-sm ms-2"
                                  title="Delete Subject"
                                  onClick={() => handleDelete(subject._id)}  // Add your onClick handler
                                >
                                  <i className="fas fa-trash-alt"></i> {/* Trash Icon */}
                                </button>
                              </td>
                              <td>{subject.subjectName}</td>
                              <td>{subject.selectClass}</td>
                              <td>{subject.subjectSequence}</td>
                              <td>{subject.subjectJustForGrade ? 'true' : ''}</td>

                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>

                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                      {subjects.length>0? `Show Total Record  ${subjects.length}`:"Show Total Record 0"}
                    </div>

                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                      {/* <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                        </li>
                        <li className="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabIndex="0" className="page-link">Next</a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Copyright © 2022 Gayatri Gurukul Public School.</p>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default SubjectsPage;

