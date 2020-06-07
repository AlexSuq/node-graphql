import express from "express";
//midlaware de express
import graphqlHTTP from "express-graphql";
import schema from "./schema"



const app = express();

app.get('/',(req,res)=>{
    res.json({
        message: "Hello world"
    }
    )
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, ()=>console.log('Server on port 3000'));