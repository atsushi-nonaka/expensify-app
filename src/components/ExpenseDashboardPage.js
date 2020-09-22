import React from 'react'
import ExpenseList from './ExpenseList'
import ExpsenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpsenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage