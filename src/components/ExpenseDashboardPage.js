import React from 'react'
import ExpenseList from './ExpenseList'
import ExpsenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpsenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage