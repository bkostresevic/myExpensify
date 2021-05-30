import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper 

beforeEach(() => {
    setTextFilter = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
           filters={filters}
           setTextFilter={setTextFilter}
           setStartDate={setStartDate}
           setEndDate={setEndDate}
           sortByAmount={sortByAmount}
           sortByDate={sortByDate}
        />)
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text changes', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

// should sort by date 
test('should sort by date', () => { 
    wrapper.setProps({
        filters: altFilters
    })
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {value}
    }) 
    expect(sortByDate).toHaveBeenCalled()
})

// should sort by amount 
test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

// should handle date changes 
test('should handle date changes', () => {
   const startDate = moment(0)
   const endDate = moment(0).add(8, 'days') 
   wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
   expect(setStartDate).toHaveBeenLastCalledWith(startDate)
   expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

// should handle date focus change
test('should handle date focus change', () => {
    const focused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
    expect(wrapper.state('calendarFocused')).toBe(focused)
})


