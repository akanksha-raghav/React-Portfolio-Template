import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
function SkillCard() {
    return (
        <div className="container">
            <div className="row" style={{ justifyContent: "auto" }}>
                <div className="col-sm-7">
                    <h4>Frontend</h4>
                <ProgressBar variant="success" now={80} />  
                <h4>Backend</h4>   
                <ProgressBar variant="success" now={50} />  
                <h4>Mainframe</h4>
                <ProgressBar variant="success" now={65} />                
                </div>

            </div>
        </div>
    )
}

export default SkillCard