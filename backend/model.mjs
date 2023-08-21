import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const mon_con = mongoose.connection;

mon_con.once("open", (error) => {
    if (error){
        res.status(500).json({error: 'Uh Oh! It looks like your connection failed, please try again!'});
    }
    else{
        console.log("You have successfully connected to MongoDB using Mongoose!")}
});


const moneySchema = mongoose.Schema({
    date: { type: Date, required: true, default: Date.now},
    purchase: { type: String, required: true },
	category: { type: String, required: true },
    cost: { type: Number, required: true}
});

const Expense = mongoose.model('Expense', moneySchema);

const newExpense = async (date, purchase, category, cost) => {
    const expense = new Expense({ 
        date: date,
        purchase: purchase,
        category: category,
        cost: cost,
    });
    return expense.save();
}


// RETRIEVE models *****************************************

const findExpense = async () => {
    const query = Expense.find();
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const expensebyId = async (_id) => {
    const query = Expense.findById(_id);
    return query.exec();
}

// UPDATE model *****************************************
const updateExpense = async (_id, date, purchase, category, cost) => {
    const result = await Expense.replaceOne({_id: _id}, {
        date: date,
        purchase: purchase,
        category: category,
        cost: cost
    });
    return {
        _id:_id,
        date: date,
        purchase: purchase,
        category: category,
        cost: cost
    }
};

// DELETE models  *****************************************
// Delete based on the ID.
const deleteExpense = async (_id) => {
    const result = await Expense.deleteOne({_id: _id});
    return result.deletedCount;
};


// Export our variables for use in the controller file.
export { newExpense, findExpense, expensebyId, updateExpense, deleteExpense}