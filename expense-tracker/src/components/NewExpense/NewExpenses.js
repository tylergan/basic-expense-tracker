import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        if (Number.isNaN(new Date(expenseData.date).getTime())) {
            return
        }

        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (            
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}