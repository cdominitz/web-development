import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogTable from '../components/LogTable';

function LogPage({setExpense}) {

    const redirect = useNavigate();

    const [expenses, setExpenses] = useState([]);

    const loadExpenses = async() => {
        const response = await fetch('/log');
        const expenses = await response.json();
        setExpenses(expenses);
    }
    
    const onEditExpense = async expense => {
        setExpense(expense);
        redirect('/edit');
    }

    const onDeleteExpense = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const expenses = await getResponse.json();
            setExpenses(expenses);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadExpenses();
    }, []);

    return (
        <>
            <h2>Travel Expense Log</h2>
            <article>
            <p>
                This page is used to keep track of various expenses that are incurred while traveling. Here, you can
                keep track of purchases such as plane tickets, hotel reservations, and more!
            </p>
            <LogTable
                onDelete={onDeleteExpense} 
                onEdit={onEditExpense} 
                expenses={expenses} 
            />
            </article>
        </>
    );
}

export default LogPage;