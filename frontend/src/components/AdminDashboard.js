import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList,faBoxOpen,faPlusSquare,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const AdminDashboard = () => {
    const navigate=useNavigate();
    const handleLogout = () => {
        navigate('/admin/login');
      };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark fixed-sidebar">
          <div className="d-flex flex-column align-items-start px-3 pt-2 text-white min-vh-100">
            <div className="d-flex align-items-center pb-3 mt-3 mb-md-0 me-md-auto text-white text-decoration-none">
              {/* <span className="fs-5 d-sm-inline">Dashboard</span> */}
              <div className="dropdown pb-4">
              <Link
                to="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} className="fs-4" />
                <span className="d-none d-sm-inline mx-1">Admin</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Log Out</Link></li>
              </ul>
            </div>
            </div>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li>
                <Link to="/admin/orders" className="nav-link px-0 align-middle admin-links">
                <div className='vt-icons'>
                <FontAwesomeIcon icon={faClipboardList} className="fs-3" /> 
                </div>
                   <span className="ms-1 d-sm-inline admin-links_span">Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/allproducts" className="nav-link px-0 align-middle admin-links">
                <div className='vt-icons'>
                <FontAwesomeIcon icon={faBoxOpen} className="fs-5" />
                </div>
                  <span className="ms-1 d-sm-inline admin-links_span">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/add-product" className="nav-link px-0 align-middle admin-links">
                <div className='vt-icons'>
                <FontAwesomeIcon icon={faPlusSquare} className="fs-3" />
                </div>
                  <span className="ms-1 d-sm-inline admin-links_span">Add Product</span>
                </Link>
              </li>
            </ul>
            {/* <div className="dropdown pb-4">
              <Link
                to="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} className="fs-4" />
                <span className="d-none d-sm-inline mx-1">Admin</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Log Out</Link></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="col py-3 content-area">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

