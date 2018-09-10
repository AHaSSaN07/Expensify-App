import moment from 'moment';



const filterSteteDefultValues = {
    text: '',
    sortBy: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  
  }
  const filtersReducer = (state = filterSteteDefultValues, action) => {
  
    switch (action.type) {
      case 'SETTEXTFILTER':
        return {
          ...state,
          text: action.text
        }
      case 'SORTBYDATE':
        return {
          ...state,
          sortBy: action.sortBy
        }
      case 'SORTBYAMOUNT':
        return {
          ...state,
          sortBy: action.sortBy
        }
      case 'SETSTARTDATE':
        return {
          ...state,
          startDate: action.startDate
        }
      case 'SETENDDATE':
        return {
          ...state,
          endDate: action.endDate
        }
      default:
        return state;
    }
  }
  export default  filtersReducer;