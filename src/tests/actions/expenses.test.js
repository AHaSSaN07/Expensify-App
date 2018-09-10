import { AddExpense, RemoveExpense, EditExpense } from '../../actions/expenses'



test("remove expense test", () => {
    const action = RemoveExpense({ id: "123" });
    expect(action).toEqual({
        type: "REMOVEEXPENSE",
        id: "123"
    })
})

test("Edit expense test", () => {
    const action = EditExpense("123", { note: "adflkn" });
    expect(action).toEqual({
        type: 'EDITEXPENSE',
        id: "123",
        NewExpense: {
            note: "adflkn"
        }
    })
})

test("add expense test with vals", () => {
    const data = {
        description: 'ahmed',
        note: '155258',
        amount: 500,
        createdAt: 4100
    }
    const action = AddExpense(data);
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            ...data
        }
    })
})

test("add expense test without vals", () => {
    
    const action = AddExpense();
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})