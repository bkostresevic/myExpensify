import React from 'react' 
import {shallow} from 'enzyme' 
import {ExpensesSummary} from '../../components/ExpensesSummary' 

test('should render ExpensesSummary correctly with one expense', () => {
   const wrapper = shallow(<ExpensesSummary expensesCount={1} ExpensesSummary={235}/>)
   expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} ExpensesSummary={587982544}/>)
    expect(wrapper).toMatchSnapshot()
})