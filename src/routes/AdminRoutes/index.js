import React from 'react'; // Importing React
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route from react-router-dom

import Layout from '../../Admin/Components/Layout'; // Admin Layout component
import Login from '../../Admin/Components/Login'; // Login component
// import { ToastContainer } from 'react-toastify';

// import { config } from '../../Admin/Constant/Constant'; // Config constants
import Dashboard from '../../Admin/Pages/Dashboard'; // Dashboard component
import Studentlist from '../../Admin/Pages/Studentlist'; // Student list component
import Studentadd from '../../Admin/Pages/Studentadd'
import Studentacademic from '../../Admin/Pages/Studentacademic'
import StudentfeeTransaction from '../../Admin/Pages/StudentFeeTransaction'
import SubjectList from '../../Admin/Pages/SubjectList'
import SubjectAdd from '../../Admin/Pages/SubjectAdd'
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/students" element={<Layout />}>
        <Route index element={<Studentlist />} />
      </Route>
      <Route path="/student/add" element={<Layout />}>
        <Route index element={<Studentadd />} />
      </Route>
      <Route path="/studentsAcademic" element={<Layout />}>
        <Route index element={<Studentacademic/>} />
      </Route>
      <Route path="/feesTransaction/lists" element={<Layout />}>
        <Route index element={<StudentfeeTransaction/>} />
      </Route>
      <Route path="/subjects" element={<Layout/>}>
         <Route index element={<SubjectList/>}/>
      </Route>
      <Route path="/subject/add" element={<Layout/>}>
         <Route index element={<SubjectAdd/>}/>
      </Route>
      {/* <ToastContainer /> */}
    </Routes>
  );
};

export default AdminRoutes;
