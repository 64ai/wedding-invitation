import {useEffect} from 'react';

import type {FC} from 'react';

export type MapProps = {};

const Map: FC<MapProps> = (props) => {
  useEffect(() => {
    const lat = 35.1877130;
    const lng = 129.2123966;
    const mapOptions = {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 13,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      minZoom: 10,
      maxZoom: 17,
      draggable: false,
      zoomOrigin: {lat, lng},
    };

    var map = new naver.maps.Map('_map', mapOptions);
    var marker = new naver.maps.Marker({
      map,
      position: map.getCenter(),
    });
  }, []);

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
        if (s) {
          window.location.href = 'https://m.place.naver.com/restaurant/1646847275/home';
        }
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
