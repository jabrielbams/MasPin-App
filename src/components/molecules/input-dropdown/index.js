import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {noop} from '../../../utils/helpers';
import styles from './style';
import {Card} from 'react-native-paper';
import {Color} from '../../../constants';

const TextFieldDropdown = props => {
  const {
    label,
    required,
    onPress,
    value,
    inputValue,
    onChangeText,
    Icon,
    showDropdown,
    onPressSelectItem,
    placeholder,
    onPressCloseDropdown,
    dropdownData,
    valueContainer,
    customCard,
    valueInputContainer,
  } = props;

  const RenderContent = ({item}) => (
    <TouchableOpacity onPress={() => onPressSelectItem(item)}>
      <Text style={styles.item} numberOfLines={1}>
        {item.label_type}
      </Text>
    </TouchableOpacity>
  );

  const ItemSeparator = () => <View style={styles.divider} />;

  const RenderValue = () => {
    if (showDropdown) {
      return (
        <View style={[styles.valueContainer, styles.valueInputContainer]}>
          <TextInput
            placeholder={placeholder}
            value={inputValue}
            onChangeText={onChangeText}
            returnKeyType="search"
            style={styles.inputValue}
          />
          <TouchableOpacity onPress={onPressCloseDropdown}>
            <View>{Icon}</View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={onPress} style={[styles.valueContainer]}>
          <Text style={value ? styles.value : styles.valuePlaceholder}>
            {value ? value : placeholder}
          </Text>
          <View>{Icon}</View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      <View style={styles.titleSection}>
        {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
        {required ? <Text style={{color: Color.DANGER}}>*</Text> : null}
      </View>
      {RenderValue()}
      {showDropdown && (
        <Card style={[styles.card, customCard]}>
          <FlatList
            data={dropdownData}
            renderItem={RenderContent}
            ItemSeparatorComponent={ItemSeparator}
          />
        </Card>
      )}
    </View>
  );
};

export default TextFieldDropdown;

TextFieldDropdown.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onPress: PropTypes.func,
  value: PropTypes.string,
  inputValue: PropTypes.string,
  onChangeText: PropTypes.func,
  Icon: PropTypes.object,
  showDropdown: PropTypes.bool,
  onPressSelectItem: PropTypes.func,
  placeholder: PropTypes.string,
  onPressCloseDropdown: PropTypes.func,
  dropdownData: PropTypes.array,
  valueContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  valueInputContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  customCard: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

TextFieldDropdown.defaultProps = {
  label: '',
  required: false,
  onPress: noop,
  value: '',
  inputValue: '',
  onChangeText: noop,
  Icon: <View />,
  showDropdown: false,
  onPressSelectItem: noop,
  placeholder: '',
  onPressCloseDropdown: noop,
  dropdownData: [],
  valueContainer: {},
};
