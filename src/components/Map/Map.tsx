import {useEffect} from 'react';

import type {FC} from 'react';

export type MapProps = {};

const Map: FC<MapProps> = (props) => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(35.1877130,129.2123966),
      zoom: 12,
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
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div id="_map" style={{
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        width: '100%',
        height: '100%',
      }}
      />
    </div>
  );
};

export default Map;
