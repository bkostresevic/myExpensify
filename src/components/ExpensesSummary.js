import React from 'react' 
import numeral from 'numeral'
import {connect} from 'react-redux' 
import selectExpensesTotal from '../selectors/expenses-total' 
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral((expensesTotal / 100)).format('$0,0.00')
    return (
        <div>
           <h2>Viewing {expensesCount} {expenseWord} totaling {formatedExpensesTotal}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
      expensesCount: state.expenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)

