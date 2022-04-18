import {useEffect} from 'react';

import type {FC} from 'react';

export type MapProps = {};

const Map: FC<MapProps> = (props) => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(35.1877130,129.2123966),
      zoom: 13,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      // zoomControl: true,
      minZoom: 10,
      maxZoom: 15,
    };

    var map = new naver.maps.Map('_map', mapOptions);
    var marker = new naver.maps.Marker({
      map,
      position: map.getCenter(),
    });
  },[]);

  return (
    <div 
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '15px',
        overflow: 'hidden',
        isolation: 'isolate',
      }}
      onClick={() => {
        const s = window.confirm('네이버 지도로  이동하시겠습니까?');

      }}
    >
      <div id="_map" style={{
        width: '100%',
        height: '100%',
      }}
      />
    </div>
  );
};

export default Map;
