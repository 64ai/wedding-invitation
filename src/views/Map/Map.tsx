import {useEffect} from 'react';
import {Divider, Title} from '../../components';
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
      zoomControl: true,
      minZoom: 10,
      maxZoom: 15,
    };

    var map = new naver.maps.Map('map', mapOptions);
    var marker = new naver.maps.Marker({
      map,
      position: map.getCenter(),
    });
  },[]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Title text="찾아오시는 길" />
      <div id="map" style={{width: '100%', height: '400px'}} />
      <Divider />
    </div>
  );
};

export default Map;
