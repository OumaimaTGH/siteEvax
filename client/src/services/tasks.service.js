let tasks = [  {id: 1,title:'Ariana'}, {id:2,title:'Béja'},{id: 3,title: 'Ben Arous'},{id: 4,title: 'Bizerte'},{id: 5,title: 'Gabès'}, {id: 6,title:'Gafsa'},
{ id: 7,title:'Jendouba'}, {id: 8,title:'Kairouan'},{id: 9,title: 'Kasserine'},{id: 10,title: 'Kébili'}, {id: 11,title:'Kef'}, {id: 12,title:'Mahdia'},{ id: 13,title:'Manouba'}, {id: 14,title:'Médenine'}, {id: 15,title:'Monastir'},{id: 16,title: 'Nabeul'}, {id: 17,title:'Sfax'}, {id: 18,title:'Sidi Bouzid'},{id: 19,title: 'Siliana'}, {id: 20,title:'Sousse'},{id: 21,title: 'Tataouine'}, 
{id: 22,title:'Tozeur'}, {id: 23,title:'Tunis'}, {id: 24,title:'Zaghouan'}];
let Delegation = [  {id: 1,title:'Ariana Ville'}, {id:2,title:'La Soukra'},]
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

export const fetchTasks = () => {
  // await delay(1000)
  return tasks
}
export const fetchTasksByFilter = (searchValue) => {
  // await delay(1000)
  return tasks.filter((task) => task.title.includes(searchValue))
}

export const fetchTaskById = (id) => {
  // await delay(1000)
  const task = tasks.find((task) => task.id === id)
  if (task=="Ariana")
  return Delegation
}

export const addTask = (task) => {
  // await delay(1000)
  const newTask = {
    id: tasks.length + 1,
    title: task.title,
    duration: +task.duration,
  }

  tasks = tasks.concat(newTask)
  return newTask
}

export const deleteTask = (id) => {
  // await delay(1000)
  tasks = tasks.filter((task) => task.id !== id)
}

export const updateTask = (id, task) => {
  // await delay(1000)
  const updatedTask = { id, title: task.title, duration: task.duration }
  tasks = tasks.map((task) => (task.id === id ? updatedTask : task))
  return updatedTask
}

// export const addTask = async (task) => {
//   const result = await Axios.post(
//     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/",
//     task
//   )
//   return result.data
// }

// export const updateTask = async (id, task) => {
//   const result = await Axios.put(
//     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + id,
//     task
//   )
//   return result.data
// }

// export const deleteTask = async (id) => {
//   const result = await Axios.delete(
//     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + id
//   )
//   return result.data
// }

// export const fetchTaskById = async (taskId) => {
//   const result = await Axios.get(
//     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + taskId
//   )
//   return result.data
// }

// export const fetchTasks = async () => {
//   // await delay(500)
//   const result = await Axios.get(
//     "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/"
//   )
//   return result.data._embedded.tasks
// }
