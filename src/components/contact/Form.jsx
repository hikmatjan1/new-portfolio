import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Form({ style }) {
    const email_ref = useRef();
    const name_ref = useRef();
    const desc_ref = useRef();

    // submit
    const submitHandler = (e) => {
        e.preventDefault();

        // to do server
        toast.info('Currently undergoing technical work, I apologize for the inconvenience', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={style.inputs}>
                <input
                    type="text"
                    placeholder='Name'
                    required
                    onInvalid={e => e.target.setCustomValidity("Name is required")}
                    onChange={e => e.target.setCustomValidity("")}
                    ref={name_ref}
                />
                <input
                    type="email"
                    placeholder='Email'
                    required
                    onInvalid={e => e.target.setCustomValidity("Email is required")}
                    onChange={e => e.target.setCustomValidity("")}
                    ref={email_ref}
                />
            </div>
            <textarea
                rows="5"
                required
                onInvalid={e => e.target.setCustomValidity("Description is required")}
                onChange={e => e.target.setCustomValidity("")}
                ref={desc_ref}
            ></textarea>
            <div className={style.buttons}>
                <button type='submit' className='btn btn-danger p-2'>Send Message</button>
            </div>
            <ToastContainer
                draggable
                closeOnClick
            />
        </form>
    )
}

export default React.memo(Form);