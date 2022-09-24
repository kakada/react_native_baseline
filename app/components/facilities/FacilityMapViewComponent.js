import React, {useEffect, useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import FacilityServiceScrollBarComponent from './FacilityServiceScrollBarComponent';
import FacilityCardItemComponent from './FacilityCardItemComponent';
import CurrentLocationButtonComponent from '../shared/CurrentLocationButtonComponent';
import MapComponent from '../shared/MapComponent';
import Facility from '../../models/Facility';
import mapHelper from '../../helpers/map_helper';

const screenWidth = Dimensions.get('screen').width;

const FacilityMapViewComponent = () => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [facilities, setFacilities] = useState(Facility.getAll());
  const [mapRegion, setMapRegion] = useState({});
  const [markers, setMarkers] = useState([]);
  const regionOffset = 0.0016;

  useEffect(() => {
    setMapRegion({latitude: facilities[0].latitude - regionOffset, longitude: facilities[0].longitude});
    setMarkers(mapHelper.getMarkers(facilities));
  }, []);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: screenWidth - 32, marginTop: 0, marginRight: 8}}
             />
    });
  }

  const updateFacilities = (facilities) => {
    setFacilities(facilities);

    if (facilities.length > 0) {
      setMapRegion({latitude: facilities[0].latitude - regionOffset, longitude: facilities[0].longitude});
      setMarkers(mapHelper.getMarkers(facilities));
    }
  }

  return (
    <View style={{flexGrow: 1}}>
      <MapComponent region={mapRegion} markers={markers} facilities={facilities} />

      <FacilityServiceScrollBarComponent updateFacilities={(facilities) => updateFacilities(facilities)}
        containerStyle={{paddingHorizontal: 16}}
      />

      <View style={{bottom: 68, position: 'absolute', flexGrow: 0, width: '100%'}}>
        <CurrentLocationButtonComponent  updatePosition={(coords) =>setMapRegion({latitude: coords.latitude, longitude: coords.longitude})}/>
        <ScrollView
          contentContainerStyle={{paddingBottom: 4, paddingLeft: 16, paddingRight: 8}}
          style={{flexGrow: 0, width: '100%'}}
          horizontal={true}
        >
          { renderFacilities() }
        </ScrollView>
      </View>
    </View>
  )
}

export default FacilityMapViewComponent;