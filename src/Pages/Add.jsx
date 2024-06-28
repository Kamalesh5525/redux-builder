
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/action/crud';

function Add() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 1000),
            title,
            note
        };

        if (!title || !note) {
            alert("All fields are required...");
            return false;
        }

        dispatch(ADD_USER(obj));
        setTitle("");
        setNote("");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 mx-auto border p-4 ">
                    <form className='position-relative' onSubmit={handle}>
                        <div className="mb-3 ">
                            <input
                                type="text"
                                className=" p-2"
                                placeholder='Title'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="p-2"
                                placeholder='Write a note'
                                onChange={(e) => setNote(e.target.value)}
                                value={note}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary position-absolute"
                            style={{ right: '0', width: '50px', height: '50px' }}>
                            +
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
