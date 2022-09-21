import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import AudioWaveButtonRippleComponent from './audioWaveButtons/AudioWaveButtonRippleComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const size = componentUtil.pressableItemSize();

const AudioWaveButtonComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={[styles.center, props.containerStyle]}>
      <AudioWaveButtonRippleComponent size={size} isPlaying={isPlaying} />
      <PlayAudioComponent
        playIcon='play'
        pauseIcon='pause'
        muteIcon='play'
        iconSize={24}
        audio={props.audio}
        btnStyle={styles.audioBtn}
        itemUuid={props.itemUuid}
        playingUuid={props.playingUuid}
        toggleIsPlaying={(isPlaying) => setIsPlaying(isPlaying)}
        updatePlaySeconds={props.updatePlaySeconds}
        updatePlayingUuid={props.updatePlayingUuid}
      >
        <FeatherIcon/>
      </PlayAudioComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioBtn: {
    backgroundColor: color.whiteColor,
    borderColor: color.whiteColor,
    borderRadius: 45,
    borderWidth: 0,
    elevation: 4,
    zIndex: 10,
  }
});

export default AudioWaveButtonComponent;