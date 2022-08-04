
const ACT_ADD_INCOME = 'ACT_ADD_INCOME';
const ACT_DELETE_INCOME = 'ACT_DELETE_INCOME';

export function removeItemAmount(id) {
   return {
      type: ACT_DELETE_INCOME,
      payload: { id },
   }
}

export function addItemAmount(data) {
   return {
      type: ACT_ADD_INCOME,
      payload: { data },
   }
}
