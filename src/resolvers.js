//Ejecuta funciones de acuerdo a los tipos 
//definidos en el schema
import { tasks } from './sample'

export const resolvers = {
    Query: {
        hello: ()=>(
             "Hello world con graphql"
        ),
        greet(root,{ name }) {

            return `Hello ${name}`
        },
        tasks(){
            return tasks
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id =  tasks.length;
            tasks.push(input); 
            return input
        }
    }
}