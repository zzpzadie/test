import handleArr from "./index.js";
//管理数据的
let reducer = (state = {
    ...handleArr.state //解构的写法
}, action) => {
    //调用dispatch执行这里的代码
    let newState = JSON.parse(JSON.stringify((state)))

    switch (action.type) {
        case handleArr.sarrpush:
            handleArr.actions[handleArr.sarrpush](newState, action)
            break;
        default:
            break;
    }


    return newState
}

export default reducer
