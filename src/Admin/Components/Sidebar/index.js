import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({  alias, subalias }) => {
  // Function to dynamically apply active class
  const baseUrl=process.env.REACT_APP_BASE_URL || '/';

  const isActive = (menuAlias, subAlias = '') => {
    if (menuAlias === alias) {
      return subAlias ? (subAlias === subalias ? 'active' : '') : 'active';
    }
    return '';
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main Menu</span>
            </li>

            <li className={isActive('dashboard')}>
              <Link to={`${baseUrl}admin/dashboard`}>
                <i className="fas fa-user-graduate"></i> <span>Dashboard</span>
              </Link>
              
            </li>

            <li className={`submenu ${isActive('student')}`}>
              <a href="#" className="">
                <i className="fas fa-user-graduate"></i> <span>Students</span>
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <Link
                   Student List
                    to={`${baseUrl}admin/students`}
                    className={isActive('student', 'students_list')}
                  >
                   Student List 
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${baseUrl}admin/student/add`}
                    className={isActive('student', 'add_student')}
                  >
                    Student Add
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`submenu ${isActive('student_academic')}`}>
              <a href="#" className="">
                <i className="fas fa-chalkboard-teacher"></i> <span>Student Academic</span>
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <Link
                    to={`${baseUrl}admin/studentsAcademic`}
                    className={isActive('student_academic', 'students_academic_list')}
                  >
                    Student Academic
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`submenu ${isActive('student_fees_transaction')}`}>
              <a href="#" className="">
                <i className="fas fa-file-invoice-dollar"></i> <span>Accounts</span>
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <Link
                    to={`${baseUrl}admin/feesTransaction/lists`}
                    className={isActive('student_fees_transaction', 'student_fees_transaction_list')}
                  >
                    Fees Collection
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`submenu ${isActive('subject')}`}>
              <a href="#" className="">
                <i className="fas fa-user-graduate"></i> <span>Subject Master</span>
                <span className="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <Link
                    to={`${baseUrl}admin/subjects`}
                    className={isActive('subject', 'subject_list')}
                  >
                    Subject List
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${baseUrl}admin/subject/add`}
                    className={isActive('subject', 'add_subject')}
                  >
                    Subject Add
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
