import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}    
    />)
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'This is text'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const dates = {
        startDate: moment(0).subtract(10, 'years'),
        endDate: moment(0).add(10, 'years')
    }
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates)
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate)
})

test('should handle date focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)
})

