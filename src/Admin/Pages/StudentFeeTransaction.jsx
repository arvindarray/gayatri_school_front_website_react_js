import React, { useState } from 'react';

const StudentFeeTransaction = () => {
  const [filter, setFilter] = useState("0D");
  const [totalFees, setTotalFees] = useState(0);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // For demonstration purposes, we're using static data.
  // In a real scenario, you would fetch this data from an API.
  const transactions = [
    {
      date: "2024-12-23",
      name: "John Doe",
      fatherName: "Richard Doe",
      class: "10th Grade",
      amount: "500",
      transactionId: "TX123456",
      refId: "REF12345",
    },
    // Add more transactions as needed
  ];

  return (
    <div className="page-wrapper" style={{ minHeight: '279px' }}>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Fees</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                <li className="breadcrumb-item active">Fees</li>
              </ul>
            </div>
            <div className="col-auto text-end float-end ms-auto">
              {/* Buttons for additional actions can be added here */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group row">
              <label className="col-lg-5 col-form-label">Please Select Filter</label>
              <div className="col-lg-7">
                <select
                  id="filterDropdown"
                  name="filteration"
                  className="form-control"
                  value={filter}
                  onChange={handleFilterChange}
                >
                  <option value="0D">Today</option>
                  <option value="7D">Last Seven Day</option>
                  <option value="CM">Current Month</option>
                  <option value="PM">Previous Month</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group row">
              <label className="col-lg-5 col-form-label"><b>Total Collection</b></label>
              <div className="col-lg-7">
                <input
                  type="text"
                  className="form-control"
                  style={{ fontWeight: '800' }}
                  id="totalFeesCollect"
                  value={totalFees}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Transaction Date</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Amount</th>
                        <th>Transaction ID</th>
                        <th>Ref. ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.length > 0 ? (
                        transactions.map((transaction, index) => (
                          <tr key={index}>
                            <td>
                              {/* Add actions (e.g., Edit, Delete) */}
                            </td>
                            <td>{transaction.date}</td>
                            <td>{transaction.name}</td>
                            <td>{transaction.fatherName}</td>
                            <td>{transaction.class}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.refId}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center">No data available in table</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer>
        <p>Copyright © 2022 Gayatri Gurukul Public School.</p>
      </footer>
    </div>
  );
};

export default StudentFeeTransaction;
