export default {
    state: {
        num: 20
    },
    actions: {
        add1(newState, action) {
            newState.num++
        },
        add2(newState, action) {
            newState.num += action.val
        }
    },
    // 名字统一管理
    add1:"add1",
    add2:"add2"
}
