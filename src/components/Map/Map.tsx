import {useEffect} from 'react';

import type {FC} from 'react';

export type MapProps = {};

const Map: FC<MapProps> = (props) => {
  const lat = 35.1877130;
  const lng = 129.2123966;

  useEffect(() => {
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

    const map = new naver.maps.Map('_map', mapOptions);
    new naver.maps.Marker({
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
        const addr = `nmap://place?lat=${lat}&lng=${lng}&name=대보름 오시리아 스퀘어&appname=https://kor-developer.github.io/wedding-invitation/`;
        window.location.href = encodeURI(addr);
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
