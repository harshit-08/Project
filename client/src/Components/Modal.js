import React from 'react'
import '../Styles/modal.css'
function Modal(props) {



    return (
        <div className="modal__wrapper">
            <div className="modal">
                {/* modal heading */}
                <ul className="modal__list">

                    <div>ID</div>
                    <div>Name</div>
                    <div>Roll.No.</div>
                    <div>Age</div>
                    <div>Class</div>
                    <div>D.O.B</div>

                </ul>

                {/* modal details of selected student  */}
                <ul className="modal__list">

                    <div>{props.id}</div>
                    <div>{props.name}</div>
                    <div>{props.rollNo}</div>
                    <div>{props.age}</div>
                    <div>{props.class}</div>
                    <div>{props.dob}</div>
                </ul>

                {/* modal button to handle close functionality  */}
                <button onClick={() => props.closeModalHandler()}>close</button>
            </div>
        </div>

    )
}

export default Modal
