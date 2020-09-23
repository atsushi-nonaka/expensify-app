import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render ExpenseSummary with a single expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={123000} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with a multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={453000} />)
    expect(wrapper).toMatchSnapshot()
})
