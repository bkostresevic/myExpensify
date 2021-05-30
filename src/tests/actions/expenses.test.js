import {addExpense, removeExpense, editExpense} from '../../actions/expenses' 

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const id = '123abc'
    const updates = {note: 'New note value'}
    const action = editExpense(id, updates)
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 500,
        note: 'my new rent',
        createdAt: 1000
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
                description: '',
                amount: 0,
                note: '',
                createdAt: 0   
        }
    })
})