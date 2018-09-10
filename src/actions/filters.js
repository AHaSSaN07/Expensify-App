export const SetTextFilter = (text = '') => {
    return {
        type: 'SETTEXTFILTER',
        text
    }
}

export const sortByDate = (sortBy = 'date') => {
    return {
        type: 'SORTBYDATE',
        sortBy
    }
}

export const sortByAmount = (sortBy = 'amount') => {
    return {
        type: 'SORTBYAMOUNT',
        sortBy
    }
}

export const SetStartDate = (startDate = undefined) => {
    return {
        type: "SETSTARTDATE",
        startDate
    }
}


export const SetEndDate = (endDate = undefined) => {
    return {
        type: "SETENDDATE",
        endDate
    }
}