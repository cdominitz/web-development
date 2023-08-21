import {MdPostAdd} from 'react-icons/md';
import LogRow from '../components/LogRow.js';
import {useNavigate} from 'react-router-dom';

function LogTable({expenses, onDelete, onEdit}){

    const redirect = useNavigate();
    return (
        <table id="expenses">
                <caption>
                    Click on the create icon to add a new expense, or click on the icons in an
                    existing entry to delete or edit the expense.
                </caption>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Date</th>
                        <th>Purchase</th>
                        <th>Category</th>
                        <th>Cost</th>
                        <th><i><MdPostAdd onClick={() => redirect("/create")} title="Click to create a new entry"/></i></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, i) => 
                        <LogRow onDelete={onDelete}
                                onEdit={onEdit} 
                                expense={expense}
                                key={i}/>)}
                </tbody>
        </table>
    );
}

export default LogTable

