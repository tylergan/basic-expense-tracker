import { useState } from "react"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import './Expenses.css'

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const [filteredExpenses, setFilteredExpenses] = useState(
        props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        })
    )
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        setFilteredExpenses(props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === selectedYear
        }))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}