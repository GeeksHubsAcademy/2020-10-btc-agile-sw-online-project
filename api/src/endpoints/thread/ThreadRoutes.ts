import {THREAD_CREATE, THREAD_DELETE, THREAD_DETAIL, THREAD_LIST} from "./url";

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get(THREAD_DETAIL, (req, res) => {
    res.send("Detalle del hilo", req.body.id);
});

router.get(THREAD_LIST, (req, res) => {
    res.send("Listado de hilos");
});

router.delete(THREAD_DELETE, (req, res) => {
    res.send("Borrado de hilo");
});

router.post(THREAD_CREATE, (req, res) => {
    res.send("Creación de hilo");
});

module.exports = router;
