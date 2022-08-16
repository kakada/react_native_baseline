import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import color from '../../themes/color';
import HeaderAudioControlsComponent from './HeaderAudioControlsComponent';

const ScrollViewWithAudioHeaderComponent = (props) => {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, props.headerScrollDistance],
    outputRange: [props.headerMaxheight, props.headerMinHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight, paddingBottom: 10 }]}>
      <Animated.View>
        <Appbar.Header style={{backgroundColor: color.primaryColor, elevation: 0}}>
          <Appbar.BackAction />
          <Appbar.Content title={props.title} />
        </Appbar.Header>
      </Animated.View>

      <HeaderAudioControlsComponent
        scrollY={props.scrollY}
        headerScrollDistance={props.headerScrollDistance}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: color.primaryColor,
    overflow: 'hidden',
  },
});

export default ScrollViewWithAudioHeaderComponent;