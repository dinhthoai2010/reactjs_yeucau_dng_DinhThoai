## Ôn tập mô hình Redux và React Redux cơ bản

- Chỉ xử lí trong những tác vụ đồng bộ
- UI: React
- Action: An action is a plain JavaScript object { type: 'ACT_?????', payload: null }
- Reducer: Function
  - Input: 2 tham so state, action
  - Output: state moi

- UI -> dispatch actions -> reducer -> store -> UI (re-render)

- reducer (initState)
  - Đôi khi trong projects phức tạp -> Tách nhỏ ra thành nhiều reducer khác nhau
  - Có một hàm được hỗ trợ từ Redux gom reducers nhỏ lại thành một rootReducer: combineReducers(reducers)
- const store = createStore(reducer)
- index.js -> React -> <Provider store={store}><App /></Provider>

- useSelector(state => state.??????)
- const dispatch = useDispatch()