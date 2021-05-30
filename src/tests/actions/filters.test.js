import moment from 'moment'
import {
    setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate
} from '../../actions/filters' 

test('should setup set start date action object correctly', () => {
   const startDate = moment(0)
   const action = setStartDate(startDate)
   expect(action).toEqual({
       type: 'SET_START_DATE',
       startDate
   })
})

test('should setup set end date action object correctly', () => {
    const endDate = moment(0)
    const action = setEndDate(endDate) 
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    })
})

test('should setup set text filter action object with data', () => {
    const text = 'rent' 
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should setup set text filter action object with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sort by date action object', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})

test('should setup sort by amount action object', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})