import {Col} from "antd";
import {useEffect, useState} from "react";
import {
    Map,
    Marker,
    NavigationControl,
    InfoWindow,
    CityListControl,
    PanoramaControl,
    MapTypeControl, ZoomControl
} from 'react-bmapgl';

const View = () => {
    // useEffect(() => {
    //     // 确保 BMap 已经加载完成
    //     const BMap = window.BMapGL;
    //
    //     if (BMap) {
    //         const map = new BMap.Map("mapContainer"); // 创建地图实例
    //         const point = new BMap.Point(116.404, 39.915); // 创建点坐标
    //         map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别
    //         // 开启鼠标滚轮缩放
    //         map.enableScrollWheelZoom(true);
    //         // //导航控件
    //         // map.addEventListener("tilesloaded", function() {
    //         //     const navigationControl = new BMap.NavigationControl();
    //         //     map.addControl(navigationControl);
    //         // });
    //
    //         //城市列表控件
    //         var cityCtrl = new BMap.CityListControl();                 // 添加城市列表控件
    //         map.addControl(cityCtrl);
    //     } else {
    //         console.error('BMap is not loaded');
    //     }
    // }, []);

    return (
        <div className="home">
            <Map
                style={{ width: '100%', height: '1000px'  }}
                center={new window.BMapGL.Point(110, 35)}
                className={'mapContainer'}
                mapType={"earth"}
                zoom={5}
                heading={0}
                tilt={40}
                onClick={e => console.log(e)}
                enableScrollWheelZoom
            >
                <CityListControl
                    anchor={'BMAP_ANCHOR_TOP_LEFT'}
                    offset={new window.BMapGL.Size(1000, 10)}/>
                <MapTypeControl />
                <ZoomControl />
            </Map>
            {/*<div id="mapContainer" style={{ width: '100%', height: '1000px' }}></div>;*/}
        </div>
    )
}
export default View
