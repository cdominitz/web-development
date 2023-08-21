import 'dotenv/config';
import express from 'express';
import * as expenses from './model.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(express.json())

// CREATE controller ******************************************
app.post('/log', (req,res) => { 
    expenses.newExpense(
        req.body.date,
        req.body.purchase,
        req.body.category,
        req.body.cost
    )

        .then(expense => {
            res.status(201).json(expense);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error: 'Unable to create expense document due to an user input error. Please try again.'})
        });
});



// RETRIEVE ****************************************************
// ALL or filtered set of documents controller   
app.get('/log', (req,res) => { 
    expenses.findExpense()
    .then(expense => {
        if (expense !== null){
            res.json(expense);
        }
        else {
            res.status(404).json({error: 'The expense document cannot be found.'})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'The request for the expense document failed.'})
    });
});

// UPDATE documents controller ************************************
app.put('/log/:id', (req, res) => {
    // Find the movie via the _id and if found, filter, 
    // make the update, and print the number of updated documents.
    expenses.updateExpense(
        req.params.id,
        req.body.date,
        req.body.purchase,
        req.body.category,
        req.body.cost
        )

        .then(expense => {
            res.json(expense);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({error: 'The request failed, unable to update expense.'});
        });

});



// DELETE Functions and Controller ******************************

// Delete by ID with error catching
app.delete('/log/:id',(req, res) => {
    expenses.deleteExpense(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1){
                res.status(204).send();
            } else{
                res.status(404).json({error: 'Id was not found.'})
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The request to delete the expense by ID failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});