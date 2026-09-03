import {EventEmitter} from "node:events";
const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Loggedin ${name}`)
}
task.on('greet',sayHi)
task.on('greet',(name) => {
    console.log(`Logged Out ${name}`)
})
task.once('greet',() => {
    console.log("System Started......");
})
task.once('exit',(name)=>{
    console.log(`System is shutting down by ${name}`);
})

task.emit('greet','Aryan Sharma') 
task.emit('greet','Arnav')
task.off('greet',sayHi)
task.emit('greet','Archit')
task.emit('exit','Manager')


