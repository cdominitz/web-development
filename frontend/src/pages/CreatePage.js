import {MdPostAdd} from 'react-icons/md';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreatePage({}){

    const [date, setDate]           = useState('');
    const [purchase, setPurchase]   = useState('');
    const [category, setCategory]   = useState('');
    const [cost, setCost]           = useState('');

    const redirect = useNavigate();

    const addExpense = async () => {
        const newExpense = {date, purchase, category, cost};
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newExpense),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert(`The expense has been added.`);
            redirect("/log");
        } else {
            alert(`expense was not added status code = ${response.status}`);
            redirect("/log")
        }

    };

    return (
        <>
        <h2>Add a new expense</h2>
        <article>
            <p>Please fill out the boxes below to enter the details about your expense</p>
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
                        placeholder="i.e. Lunch"
                        value={purchase}
                        onChange={e => setPurchase(e.target.value)}
                        id="purchase" /></label></td>


                    <td><label for="category" class="required">
                    <input
                        type="text"
                        placeholder="i.e. Food"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        id="category" /></label></td>

                    <td><label for="cost" class="required">
                    <input
                        type="number"
                        placeholder="$"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        id="cost" />
                    </label></td>

                    <td><label for="submit"><button
                        onClick={addExpense}
                        id="submit"
                    >Submit</button></label></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>

    )

}


export default CreatePage