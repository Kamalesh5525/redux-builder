import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER } from '../redux/action/crud';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);
    const navigate = useNavigate()



    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {record.map((val) => (
                        <div key={val.id} className="col-lg-3 mt-3">
                            <div className="card shadow" style={{ width: '18rem', height: '10rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'center' }}>{val.title}</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>{val.note}</p>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(DELETE_USER(val.id))}
                                        className="btn btn-danger mx-auto d-block"
                                    >
                                        Delete

                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default View;
