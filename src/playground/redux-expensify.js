import { createStore, combineReducers } from 'redux'

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisivleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 110000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 400, createdAt: -10000 }))

// store.dispatch(removeExpense({ id:expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

const demoState = {
    expenses: [{
        id: 'kgi;opauhauio',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startData: undefined,
        endData: undefined
    }
}
