import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';

const FacilityNavigationHeaderRightButtonsComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', height: '100%'}}>
      <NavigationHeaderButtonComponent
        icon={<FeatherIcon name="search" size={20} color="white"/>}
      />

      { props.isListView ?
        <NavigationHeaderButtonComponent onPress={() => props.updateIsListView(false)}
          icon={<FeatherIcon name="map" size={20} color="white"/>}
        />
        :
        <NavigationHeaderButtonComponent onPress={() => props.updateIsListView(true)}
          icon={<IonIcon name="list-sharp" size={20} color="white"/>}
        />
      }
    </View>
  )
}

export default FacilityNavigationHeaderRightButtonsComponent;