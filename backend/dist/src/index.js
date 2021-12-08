"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const serviceAccount = __importStar(require("../service-account.json"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount)
});
const db = firebase_admin_1.default.firestore();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// deployment
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
// allow request body parsing
app.use(express_1.default.json());
const port = process.env.PORT || 8080;
// check connections
app.get('/', (_, res) => {
    res.send('connected!');
});
// posts collection from db
const tasksCollection = db.collection('tasks');
// create new tasks
app.post('/createTask', async function (req, res) {
    const task = req.body;
    const taskDoc = tasksCollection.doc();
    await taskDoc.set(task);
    res.send(taskDoc.id);
});
// get all tasks
app.get('/getTasks', async function (req, res) {
    const tasksSnapshot = await tasksCollection.orderBy('task').get();
    const allTasksDoc = tasksSnapshot.docs;
    const tasks = [];
    for (let doc of allTasksDoc) {
        const task = doc.data();
        task.id = doc.id;
        tasks.push(task);
    }
    res.send(tasks);
});
// update a task's completed status
app.post('/updateCompleted', async function (req, res) {
    const newTask = req.body;
    const id = req.body.id;
    await tasksCollection.doc(id).update(newTask);
    res.send('updated task!');
});
// delete a task by id
app.delete('/deleteTask', async function (req, res) {
    const id = req.query['id'];
    await tasksCollection.doc(String(id)).delete();
    res.send('deleted task!');
});
app.listen(port, function () {
    console.log('server started');
});
