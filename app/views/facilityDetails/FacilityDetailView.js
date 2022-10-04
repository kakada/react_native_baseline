import React from 'react';
import {Animated, View, Text, ScrollView} from 'react-native';

import FacilityDetailNavigationHeaderComponent from '../../components/facilityDetails/FacilityDetailNavigationHeaderComponent';
import FacilityDetailGalleryComponent from '../../components/facilityDetails/FacilityDetailGalleryComponent';
import FacilityDetailInfoComponent from '../../components/facilityDetails/FacilityDetailInfoComponent';
import color from '../../themes/color'
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityDetailView = (props) => {
  const scrollY = new Animated.Value(0);

  return (
    <View style={{flexGrow: 1}}>
      <FacilityDetailNavigationHeaderComponent scrollY={scrollY} uuid={props.route.params.uuid} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}}
        contentContainerStyle={{paddingBottom: scrollViewPaddingBottom}}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        <FacilityDetailGalleryComponent/>
        <FacilityDetailInfoComponent uuid={props.route.params.uuid}/>
      </ScrollView>
    </View>
  )
}

export default FacilityDetailView;