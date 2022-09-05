import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import componentUtil from '../../../utils/component_util';

const NavigationHeaderButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.btnBack}>
      {props.icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: componentUtil.pressableItemSize(12),
  }
});

export default NavigationHeaderButtonComponent;