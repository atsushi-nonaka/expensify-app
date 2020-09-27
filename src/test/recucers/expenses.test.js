import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//should add an expense
test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Utility',
        note: '', 
        amount: 6500,
        createdAt: 0
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(
        [...expenses,expense]
    )
})

//should edit an expense
test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            note: 'This is rent'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].note).toBe('This is rent')
})

//should not edit an expense if expense not found
test('should not edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        update: {
            note: 'This is rent'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})