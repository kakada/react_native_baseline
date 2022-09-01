import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../themes/color';
import {normalFontSize} from '../../../utils/font_size_util';
import {screenHorizontalPadding} from '../../../constants/component_constant';

const screenWidth = Dimensions.get('screen').width;
const cardWidth = ((screenWidth - (screenHorizontalPadding * 2)) / 2) - 8; // 8 is the margin between the card in a row

const tiltedCardComponentStyles = StyleSheet.create({
  container: {
    height: 154,
    width: cardWidth,
  },
  tiltedView: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: cardWidth,
    borderTopWidth: 30,
    borderRadius: 14,
    borderRightColor: "transparent",
    borderTopColor: color.whiteColor,
    borderTopLeftRadius: 0,
    height: 0,
    position: 'absolute',
    transform: [{ rotate: "180deg" }],
    top: 1.2,
    top: -28.8,
    width: 0,
    zIndex: -1
  },
  backgroundContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: 10,
    borderTopRightRadius: 0,
    height: '100%',
    paddingTop: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: normalFontSize()
  },
  footer: {
    flex: 2,
    paddingHorizontal: 8
  }
});

export default tiltedCardComponentStyles;