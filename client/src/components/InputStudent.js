import React, { Fragment, useState } from "react";

const InputStudent = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mark, setMark] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, name, surname, mark };
      console.log(body);
      await fetch("http://localhost:9674/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">new student</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="id"
          className="form-control"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="surname"
          className="form-control"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="mark"
          className="form-control"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputStudent;
