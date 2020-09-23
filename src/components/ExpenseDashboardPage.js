import React from 'react'
import ExpenseList from './ExpenseList'
import ExpsenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpsenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage