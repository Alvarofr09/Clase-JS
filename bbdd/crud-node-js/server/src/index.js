import express from "express";
import {
	getEstudiantes,
	getEstudianteByid,
	addEstudiante,
	updateEstudiante,
	deleteEstudiante,
} from "./api/estudiantes/estudiantes.js";

// Crear la constante que llama a express
const app = express();

// Funcion que usa express
app.use(express.json());

// Poner el puerto que vaya a usar
const PORT = 8000;

// Endpoint de todos los estudiantes
app.get("/students", async (req, res) => {
	try {
		const result = await getEstudiantes();
		res.send(result);
	} catch (error) {
		errorApi(res, error);
	}
});

// Endpoint de un estudiante
app.get("/students/:id", async (req, res) => {
	try {
		const result = await getEstudianteByid(req.params.id);
		res.send(result);
	} catch (error) {
		errorApi(res, error);
	}
});

// Endpoint de meter un estudiante
app.post("/add-students", async (req, res) => {
	try {
		const result = await addEstudiante(req.body);
		res.send(result);
	} catch (error) {
		errorApi(res, error);
	}
});

// Endpoint de actualizar un estudiante
app.put("/update-students/:id", async (req, res) => {
	try {
		const result = await updateEstudiante(req.body, req.params.id);
		res.send(result);
	} catch (error) {
		errorApi(res, error);
	}
});

//Endpoint de borrar un estudiante
app.delete("/delete-students/:id", async (req, res) => {
	try {
		const result = await deleteEstudiante(req.params.id);
		res.send(result);
	} catch (error) {
		errorApi(res, error);
	}
});

// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// Funcion para usar en el catch cada vez que se hace un endpoint
function errorApi(res, error) {
	console.error("Error al realizar la consulta", error);
	res.status(500).json({ error: "Error interno del servidor" });
}
