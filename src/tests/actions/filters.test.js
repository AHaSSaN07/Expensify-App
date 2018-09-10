import { SetEndDate, sortByDate, sortByAmount, SetStartDate, SetTextFilter } from '../../actions/filters'



test("text filter test", () => {
    const action = SetTextFilter("rent");
    expect(action).toEqual({
        type: 'SETTEXTFILTER',
        text: "rent"
    })
}) 

