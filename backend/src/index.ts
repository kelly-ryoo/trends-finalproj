import admin, { ServiceAccount } from 'firebase-admin';
import express from 'express';
import * as serviceAccount from '../service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(<ServiceAccount>serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 8080;

// allow request body parsing
app.use(express.json());

// check connections
app.get('/', (_, res) => {
  res.send('connected!')
});

// create a post type and post with id
type Task = {
  task: string;
  completed: string;
  index: number
};

type TaskWithID = Task & {
  id: string;
};

// posts collection from db
const tasksCollection = db.collection('tasks');

// create new tasks
app.post('/createTask', async function (req, res) {
  const task: Task = req.body;
  const taskDoc = tasksCollection.doc();
  await taskDoc.set(task);
  res.send(taskDoc.id);
});

// get all tasks
app.get('/getTasks', async function (req, res) {
  const tasksSnapshot = await tasksCollection.orderBy('task').get();
  const allTasksDoc = tasksSnapshot.docs;
  const tasks: TaskWithID[] = [];
  for (let doc of allTasksDoc) {
    const task: TaskWithID = doc.data() as TaskWithID;
    task.id = doc.id;
    tasks.push(task);
  }
  res.send(tasks);
});

// update a task's completed status
app.post('/updateCompleted', async function (req, res) {
  const newTask: Task = req.body;
  const id: string = req.body.id;
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
  console.log('server started')
})