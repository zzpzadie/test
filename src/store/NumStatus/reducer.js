import handleNum from "./index.js";
//管理数据的
let reducer = (state = {
    ...handleNum.state, //解构的写法
}, action) => {
    //调用dispatch执行这里的代码
    let newState = JSON.parse(JSON.stringify((state)))

    switch (action.type) {
        case handleNum.add1:
            handleNum.actions[handleNum.add1](newState, action)
            break;
        case handleNum.add2:
            handleNum.actions[handleNum.add2](newState, action)
            break;
        default:
            break;
    }


    return newState
}

export default reducer
