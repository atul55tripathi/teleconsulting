// DocChat.jsx
import React from 'react';
import SideNavbar from '../../components/Doctor/sidenavbar';
import Navbar from '../../components/Doctor/Navbar';
import '../../css/Doctor/DocChat.css';

const DocChat = () => {
  const handleUploadPrescription = (prescriptionData) => {
    console.log('Prescription Data:', prescriptionData);
    fetch('https://example.com/uploadPrescription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prescriptionData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Prescription uploaded successfully');
        } else {
          console.error('Failed to upload prescription');
        }
      })
      .catch(error => {
        console.error('Error uploading prescription:', error);
      });
  };

  const handleConsent = (documentName) => {
    alert(`Consent requested for document: ${documentName}`);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <SideNavbar />
        <div className="main-content">
          <div className="do-chat-page-abc123">
            <div className="video-container-xyz789">
              <div className="big-video-123abc">
                Big Video Placeholder
              </div>
              <div className="small-video-456def">
                Small Video Placeholder
              </div>
            </div>
            <div className="info-container-ghi321">
              <div className="patient-details-jkl654">
                <h3>Patient Details</h3>
                <p>Name: John Smith</p>
                <p>Age: 35</p>
                <p>Gender: Male</p>
              </div>
              <div className="document-table-mno987">
                <h3>Document List</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Consent</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Document 1</td>
                      <td>
                        <button className='consent-btn-vwx357' onClick={() => handleConsent('document1')}>Consent</button>
                      </td>
                      <td>
                        <button className='upload-btn-stu753'>Download</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="chat-window">
                <h3>Chat Window</h3>
                <div className="chat-messages">
                  {/* Chat messages go here */}
                </div>
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
              </div>
              <div className="upload-prescription-pqr159">
                <button className="upload-btn-stu753" onClick={() => handleUploadPrescription({
                  appointment_id: "AP255",
                  symptoms: "Patient complains of persistent cough, fatigue, and fever for the past week.",
                  medicines_and_dosage: "Antibiotic -> Take 1 tablet every 12 hours for 7 days. \n Cough syrup -> Take 10ml three times a day as needed for cough.",
                  advice: "Get plenty of rest, drink fluids, and avoid exposure to cold weather. If symptoms worsen or persist after completion of antibiotics, schedule a follow-up appointment."
                })}>Upload Prescription</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocChat;
