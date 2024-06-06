import {useSelector, useDispatch} from "react-redux";
import {Button} from "antd";

const View = () => {
    //修改仓库数据,dispatch执行reducer
    const dispatch = useDispatch()
    // //获取仓库数据
    const {num} = useSelector((state) => ({
        num: state.NumStatusReducer.num
    }))
    const {sarr} = useSelector((state) => ({
        sarr: state.ArrStatusReducer.sarr
    }))
    const changeNUm = () => {
        dispatch({type: "add1"})
    }
    const changeArr = () => {
        dispatch({type: "sarrpush",val:100})
    }
    return (
        <div className={"accountInfo"}>
            <p>
                accountInfo
            </p>
            <p>{num}</p>
            <Button type="primary" onClick={changeNUm}>点击</Button>
            <Button type="primary" onClick={changeArr}>点击changeArr</Button>
            <p>{sarr}</p>
        </div>
    )
}

export default View
