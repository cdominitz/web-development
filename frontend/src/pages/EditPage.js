import {MdPostAdd} from 'react-icons/md';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditPage({expense}){

    const [date, setDate]           = useState(expense.date.slice(0,10));
    const [purchase, setPurchase]   = useState(expense.purchase);
    const [category, setCategory]   = useState(expense.category);
    const [cost, setCost]           = useState(expense.cost);

    const redirect = useNavigate();

    const editExpense = async() => {
        const response = await fetch(`/log/${expense._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                date: date,
                purchase: purchase,
                category: category,
                cost: cost
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 200){
            alert(`document edited`);
        } else {
            const errorMsg = await response.json();
            alert(`document not edited; status ${response.status}. ${errorMsg.Error}`);
        }
        redirect("/log")
    }
    
    return (
        <>
        <h2>Edit Expense</h2>
        <article>
            <p>Change the value in any of the boxes below and click the button to 
                update your expense
            </p>
            <table id="createExpense">
            <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Date</th>
                        <th>Purchase</th>
                        <th>Category</th>
                        <th>Cost</th>
                        <th><i><MdPostAdd onClick={() => redirect("/create")} title="Click to create new entry"/></i></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td><label for="date" class="required">
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date" /></label></td>

                    <td><label for="purchase" class="required">
                    <input
                        type="text"
                        value={purchase}
                        onChange={e => setPurchase(e.target.value)}
                        id="purchase" /></label></td>


                    <td><label for="category" class="required">
                    <input
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        id="category" /></label></td>

                    <td><label for="cost" class="required">
                    <input
                        type="number"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        id="cost" />
                    </label></td>
                    <td><label for="save"><button
                        onClick={editExpense}
                        id="save">Save</button></label></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    );
}

export default EditPage;