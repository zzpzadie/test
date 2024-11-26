import {useSelector, useDispatch} from "react-redux";
import {Button} from "antd";
import {useEffect, useRef, useState} from "react";

const View = () => {
    //修改仓库数据,dispatch执行reducer
    const dispatch = useDispatch()
    // //获取仓库数据
    const {num} = useSelector((state) => ({
        num: state.NumStatusReducer.num || 0
    }))
    const {sarr} = useSelector((state) => ({
        sarr: state.ArrStatusReducer.sarr || []
    }))
    const changeNUm = () => {
        dispatch({type: "add1"})
    }
    const changeArr = () => {
        dispatch({type: "sarrpush",val:100})
    }

    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        import('/videos/video.mp4')
            .then((module) => {
                setVideoSrc(module.default);
            })
            .catch((error) => {
                console.error('Failed to load video:', error);
            });
    }, []);
    return (
        <div className={"accountInfo"}>
            <p>
                accountInfo
            </p>
            <p>{num}</p>
            <Button type="primary" onClick={changeNUm}>点击</Button>
            <Button type="primary" onClick={changeArr}>点击changeArr</Button>
            <p>{sarr}</p>

            <div>
                {videoSrc && (
                    <video width="320" height="240" controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
            </div>
        </div>
    )
}

export default View
