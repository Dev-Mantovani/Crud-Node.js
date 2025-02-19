import express from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


// Get > Listas
// Post > Criar "body" 
// Put > Editar Varios
// Patch > Editar Um
// Delete > Deletar

// app.get('/usuarios/:id',(req,res) => {
// AWAIT >< ASYNC
//const user = await prisma.user.create ({

// npm rum start 
// npx prisma studio


//LISTAR

app.get('/usuarios', async (req, res) => {

    const list = await prisma.user.findMany() // listar varios (many) 

    res.status(200).json(list)

})

// CRIAR
app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })



    res.status(201).json(user)
})

// EDIT
app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({

        where: {
            id: req.params.id

        },

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

//DELETE
app.delete('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.delete({

        where: {
            id: req.params.id

        },


    })
    res.status(200).json({message: 'Usuario deletado com sucesso'})

}
)
app.listen(3000)



// CLASSES //
/*
class Person{
    constructor (name, age){
console.log (`Hello, Im ${name}`)

this.name = name
this.age = age


}

talk()
{

console.log(`Hello, my name is ${this.name} and I'm ${this.age} Years old`)

}

}

const newPerson = new Person ('André', 25)

newPerson.talk()

*/