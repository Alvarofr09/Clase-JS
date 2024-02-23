import express from "express";
import {
	getPersonajes,
	getPersonajeByid,
	addPersonajes,
	updatePersonaje,
	deletePersonaje,
} from "./api/personajes/personajes.js";
// Funcion que te trae los personajes

// addPersonajes();

const app = express();

app.use(express.json());

const PORT = 3000;

// Endpoint de GET
app.get("/personajes", async (req, res) => {
	try {
		const result = await getPersonajes();
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

app.get("/personajes/:id", async (req, res) => {
	try {
		const result = await getPersonajeByid(req.params.id);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de POST
app.post("/personajes", async (req, res) => {
	try {
		const result = await addPersonajes(req.body);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de PUT
app.put("/personajes/:id", async (req, res) => {
	try {
		const result = await updatePersonaje(req.body, req.params.id);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de DELETE
app.delete("/personajes", async (req, res) => {
	try {
		const result = await deletePersonaje(req.body);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
