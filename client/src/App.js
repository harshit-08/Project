import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import List from './Components/List'
import Modal from './Components/Modal';

function App() {

  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [modalState, setModalState] = useState({
    id: 0,
    name: "",
    age: 0,
    rollNo: 0,
    dob: "",
    class: ""

  })

  useEffect(() => {
    getStudents()
  }, [])

  //api call for all students
  const getStudents = async () => {
    await axios.get('http://localhost:5000/students')
      .then(res => {

        if (res.data === 'List is empty') {
          alert('List is empty')
          return
        }
        setStudents(res.data)
      })
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  //api call for clicked student
  const showModalHandler = async (id) => {
    setShowModal(true);

    await axios.get(`http://localhost:5000/students/${id}`)

      .then(res => {
        if (res.status !== 200) {
          console.log("error");
          return
        }

        setModalState({
          id: res.data.id,
          name: res.data.name,
          age: res.data.age,
          rollNo: res.data.rollNo,
          dob: res.data.dob,
          class: res.data.class
        })
      })

  }
  return (
    <div className="App" >
      {/* back-drop */}
      {showModal ? <div className="back-drop" onClick={closeModalHandler}></div> : null}

      {/* modal  */}
      {
        showModal ? <Modal
          closeModalHandler={closeModalHandler}
          id={modalState.id}
          name={modalState.name}
          age={modalState.age}
          class={modalState.class}
          rollNo={modalState.rollNo}
          dob={modalState.dob}
        /> : null
      }

      {/* mapping over students list  */}
      <div className="list_app">
        {students.map((student, index) =>
          <List
            key={index}
            id={student.id}
            name={student.name}
            showModalHandler={showModalHandler}
          />
        )}
      </div>
    </div>
  )
}

export default App;
