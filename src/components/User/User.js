import React, { useState } from 'react';
import './User.css'
import { addToLocal } from '../Utilities/Utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const User = ({ count }) => {
    const [breakTime, setBreakTime] = useState(0);

    const addBreak = (time) => {
        setBreakTime(time + breakTime);
        addToLocal(time);
    }

    const notify = () => toast.success('Congratulation you have done it!',{position: 'top-center', theme:'dark'})
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
                <div className='add-break'>
                    <h3>Add A Break</h3>
                    <div className='btn'>
                        <button onClick={() => addBreak(10)} className='btn-second'>10s</button>
                        <button onClick={() => addBreak(20)} className='btn-second'>20s</button>
                        <button onClick={() => addBreak(30)} className='btn-second'>30s</button>
                        <button onClick={() => addBreak(40)} className='btn-second'>40s</button>
                        <button onClick={() => addBreak(50)} className='btn-second'>50s</button>
                    </div>
                </div>
                <div className='other-activity'>
                    <h3>Photography Details</h3>
                    <div className='course-time'>
                        <h4>Course Time: {count}<span className='sec'>Days</span></h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time: {breakTime}<span className='sec'>Seconds</span></h4>
                    </div>
                </div>
                <div className='btn-finished'>
                    <button onClick={notify} className='btn-completed'>Activity Completed</button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default User;