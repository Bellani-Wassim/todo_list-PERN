import React, { Fragment, useState, useEffect } from "react";
import EditStudent from "./EditStudent";

const ListSudent = () => {
  const [students, setStudent] = useState([]);

  //delete todo function
  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:9674/student/${id}`, {
        method: "DELETE",
      });

      setStudent(students.filter((student) => student.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getStudent() {
    const res = await fetch("http://localhost:9674/student");
    const studentArray = await res.json();
    setStudent(studentArray);
  }

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>all student</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.mark}</td>
              <td>{/* <EditStudent student={student} /> */}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListSudent;
