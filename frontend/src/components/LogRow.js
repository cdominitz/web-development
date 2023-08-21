import React from 'react';
import {RiDeleteBin5Line, RiEditLine} from 'react-icons/ri';

function LogRow({expense, onDelete, onEdit}){
    return (
        <tr>
            <td><i><RiDeleteBin5Line onClick={() => onDelete(expense._id)} title="Clicking on this delete icon will get rid of this row"/></i></td>
            <td><i><RiEditLine onClick={() => onEdit(expense)} title="Clicking on this icon will take you to a new screen to edit"/></i></td>
            <td title="What date did you complete this purchase?">{expense.date.slice(0,10)}</td>
            <td title="what did you buy?">{expense.purchase}</td>
            <td title="What category does it belong in?">{expense.category}</td>
            <td title="How much did it cost?">{expense.cost.toLocaleString('en-US', {style: 'currency', currency:"USD"})}</td>
            <td></td>
        </tr>
    );
}

export default LogRow;
