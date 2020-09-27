import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense ,addExpense, editExpense, removeExpense } from '../../actions/expenses'
import database from '../../firebase/firebase'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup remove expense action object', () => {
    const action = removeExpense()
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{
        note: 'New note value'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2],
            id: expect.any(String)
        }
    })
})

test('Should add expense to database and store', async () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Product',
        amount: 11000,
        note: 'Useful',
        createdAt: 1000
    }
    await store.dispatch(startAddExpense(expenseData))
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            ...expenseData
        }
    })
    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value')
    expect(snapshot.val()).toEqual(expenseData)
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({})
    const defaultData = {
        description: '', 
        note: '', 
        amount: 0,
        createdAt: 0 
    } 
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData)
        done()
    }) 
})

// test('should setup add expense action object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '', 
//             note: '', 
//             amount: 0,
//             createdAt: 0 
//         }
//     })
// })