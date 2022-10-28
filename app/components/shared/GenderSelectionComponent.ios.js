import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import GenderSelectionButtonComponent from './genderSelections/GenderSelectionButtonComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import genders from '../../db/json/genders';

const GenderSelectionComponent = (props) => {
  const {t, i18n} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);
  const renderGenders = () => {

    return genders.map((gender, index) => {
      return <GenderSelectionButtonComponent key={index} uuid={gender.uuid}
                icon={gender.icon}
                size={gender.size}
                label={gender[`name_${i18n.language}`]}
                value={gender.value}
                selectedValue={props.selectedValue}
                audio={gender.audio}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                updateValue={props.updateValue}
             />
    });
  }

  return (
    <View>
      <TextComponent label={t('genderIdentity')} required={true} style={{color: color.whiteColor, fontSize: largeFontSize()}} />
      <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
        { renderGenders() }
      </View>
    </View>
  )
}

export default GenderSelectionComponent;