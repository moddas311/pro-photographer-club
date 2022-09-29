import React from 'react';
import './User.css'

const User = () => {
    return (
        <div>
            <div>
                <div className='user-info'>
                    <h4>Moddasir</h4>
                    <p>Bangladesh</p>
                </div>
                <div className='user-activity'>
                    <div>
                        <h5>75<small>kg</small></h5>
                        <p>weight</p>
                    </div>
                    <div>
                        <h5>6.6</h5>
                        <p>Height</p>
                    </div>
                    <div>
                        <h5>22 <small>yrs</small></h5>
                        <p>Age</p>
                    </div>
                </div>
                <div>
                    <h3>Add A Break</h3>
                    <div className='btn'>
                        <button className='btn-second'>10s</button>
                        <button className='btn-second'>20s</button>
                        <button className='btn-second'>30s</button>
                        <button className='btn-second'>40s</button>
                        <button className='btn-second'>50s</button>
                    </div>
                </div>
                <div className='other-activity'>
                    <h3>Photography Details</h3>
                    <div className='course-time'>
                        <h4>Course Time </h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time</h4>
                    </div>
                </div>
                <div className='btn-finished'>
                    <button className='btn-completed'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default User;