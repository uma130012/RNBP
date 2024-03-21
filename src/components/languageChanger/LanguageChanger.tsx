import {useTheme} from '@react-navigation/native';
import i18next from 'i18next';
import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {setSelectedLanguage} from '../../redux/slices';
import {AppDispatch, RootState} from '../../redux/store/store';
import {AppTheme, DropDownDataType} from '../../types';
import {DropDown} from '../dropdown/Dropdown';
import {styling} from './style';

export const LanguageChanger = React.memo(() => {
  const {colors}: AppTheme = useTheme();
  const styles = styling(colors);
  const languageData: DropDownDataType[] = React.useMemo(
    () => [
      {label: 'English', value: 'en'},
      {label: 'Burmese', value: 'bu'},
    ],
    [],
  );
  const dispatch = useDispatch<AppDispatch>();
  const selectedLanguage = useSelector(
    (state: RootState) => state.setting.selectedLanguage,
    shallowEqual,
  );

  const handleOnChangeLanguage = useCallback(
    (value: string) => {
      if (selectedLanguage !== value) dispatch(setSelectedLanguage(value));
    },
    [selectedLanguage, dispatch],
  );

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <View style={styles.container}>
      <DropDown
        defaultValue={selectedLanguage}
        data={languageData}
        onChange={handleOnChangeLanguage}
        containerStyle={styles.dropContainerStyle}
        placeholderStyle={styles.textStyle}
        selectedTextStyle={styles.textStyle}
        dropdownContainerStyle={styles.dropdownContainerStyle}
        activeColor={colors.silverSand}
      />
    </View>
  );
});
