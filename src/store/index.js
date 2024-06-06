import { legacy_createStore,combineReducers} from "redux";
import NumStatusReducer from "@/store/NumStatus/reducer.js";
import ArrStatusReducer from "@/store/ArrStatus/reducer.js";

const reducers = combineReducers({
    NumStatusReducer,
    ArrStatusReducer,
})
//创建数据仓库，让浏览器能正常使用 REDUX_DEVTOOLS
// const store  = legacy_createStore(reducer)
const store  = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
