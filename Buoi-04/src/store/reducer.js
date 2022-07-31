import { v4 as uuidv4 } from 'uuid';
import { getLocalStore, setLocalStore } from '../helpers';


const listDataIncome = [{
  id: uuidv4(),
  description: 'Thu nhap thang 06',
  amount: 3000000
},
{
  id: uuidv4(),
  description: 'Chi tieu ngay 27/07',
  amount: -150000
}]

const initState = {
  listDataIncome: getLocalStore() || listDataIncome
};

function reducer(state = initState, { type, payload }) {
  switch (type) {
    case 'ACT_DELETE_INCOME':
      let newAr = state.listDataIncome.filter(item => item.id !== payload.id);
      setLocalStore(newAr);
      return { ...state, listDataIncome: newAr }
    case 'ACT_ADD_INCOME':
      const { data } = payload
      data.id = uuidv4();
      let listAddNew = [...state.listDataIncome, data]
      setLocalStore(listAddNew);
      return { ...state, listDataIncome: listAddNew };
    default:
      return state
  }
}

export default reducer;




