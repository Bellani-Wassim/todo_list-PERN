const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../db");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// ROUTES

// get all students
router.get("/", async (req, res) => {
  try {
    const allStudents = await pool.query(`SELECT * FROM student`);
    res.json(allStudents.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a student
router.get("/:id", async (req, res) => {
  try {
    // ou bien  ====>   const {id}=req.params
    const allStudents = await pool.query(
      `SELECT * FROM student WHERE ID=${req.params.id}`
    );
    res.status(200).json(allStudents.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// create a student
router.post("/", async (req, res) => {
  try {
    const { id, name, surname, mark } = req.body;
    const newStudent = await pool.query(
      `INSERT INTO student Values (${[id]},'${[name]}','${[surname]}',${[
        mark,
      ]}) RETURNING *`
    );
    res.status(200).json(newStudent);
  } catch (error) {
    console.error(error.message);
  }
});

// update a student
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { tmp, name, surname, mark } = req.body;
    await pool.query(
      `UPDATE student SET name='${[name]}',surname='${[surname]}',mark=${[
        mark,
      ]} WHERE id = ${[id]};`
    );

    res.status(200).json("student was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a student
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM student WHERE id = ${id}`);
    res.status(200).json("student was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
