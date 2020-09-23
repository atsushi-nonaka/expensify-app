import React from 'react'
import { connect } from 'react-redux'
import expenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
        </div>
    )
}    
const mapStateToProps = (state) => {
    const visibleExpenses = expenses(state.expenses, state.filters) 
    return {
        expensesCount: visibleExpenses.length, 
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)