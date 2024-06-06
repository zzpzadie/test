export default {
    state: {
        sarr: [10,20,30]
    },
    actions: {
        sarrpush(newState, action) {
            newState.sarr.push(action.val)
        },
    },
    // 名字统一管理
    sarrpush:"sarrpush",
}
