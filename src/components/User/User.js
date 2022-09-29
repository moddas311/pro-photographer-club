import React from 'react';
import './User.css'

const User = () => {
    return (
        <div>
            <div className='user-info'>
                <div>
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
                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;