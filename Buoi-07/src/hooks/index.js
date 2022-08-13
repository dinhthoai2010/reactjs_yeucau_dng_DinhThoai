const state = useSelector(state => state);
console.log(state);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(listDataAsy({per_page:3,page:1}));
}, []);

