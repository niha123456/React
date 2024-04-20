import React, { useState } from 'react';
import './donations.css';
export function DonationspopUp() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const donationsList = [
    { name: 'Santhoshi', amount: '50,000.00', age: '40', date: '08/04/2023' },
    { name: 'Dheeraj', amount: '55,000.00', age: '43', date: '08/05/2023' },
    { name: 'Renuka', amount: '35,000', age: '38', date: '10/06/2023' },
    { name: 'Nikitha', amount: '30,000', age: '38', date: '15/07/2023' },
    { name: 'Ramya', amount: '25,000', age: '35', date: '25/08/2023' }
  ];
  const[data,setdata] = useState('');
function handleDonarClick() {
  setdata("Please Contact Mr Durga Prasad for further details. Contact-No :+91 9347138549")
}

  return (
    <div>
      <button onClick={toggleModal}>Open Donations Modal</button>
      {showModal && (
        <div className="modal fade show" id="donationsModal" tabIndex="-1" aria-labelledby="donationsModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="donationsModalLabel">Donations Received</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount Donated</th>
                      <th>Age</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationsList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.age}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={handleDonarClick}>Be a Donor</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={toggleModal}>Close</button>
                <div className='donarDetails'>
                    {data}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

