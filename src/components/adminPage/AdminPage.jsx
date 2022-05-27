import React from 'react';
import './AdminPageStyle.css'
import CustomPaginationActionsTable from "./listOfDonors";

function AdminPage() {
    return (
        <div className="adminPage">
            <div className="container">
                <div className="content">
                    <h1 className='title'>Список бажаючих пройти донацію</h1>
                    <CustomPaginationActionsTable/>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;