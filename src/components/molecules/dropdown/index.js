import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, FontSize, Fonts} from '../../../constants';
import {IcChevronDown} from '../../../assets/icons';

export default function DropdownField({
  label,
  required,
  onPress,
  placeholder,
  inputValue,
  onChangeText,
  showDropdown,
  value,
}) {
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
          <Text
            style={
              value.includes('Pilih') ? styles.valuePlaceholder : styles.value
            }>
            {value.includes('Pilih') ? 'Pilih Permasalahan' : value}
          </Text>
          <View>
            <IcChevronDown />
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{padding: 16}}>
      <View style={styles.titleSection}>
        {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
        {required ? <Text style={{color: Color.DANGER}}>*</Text> : null}
      </View>
      <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 14,
  },
  labelStyle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
  },

  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  valuePlaceholder: {
    color: Color.BLACK,
  },
  inputValue: {
    fontSize: 14,
    color: Color.BLACK,
    flex: 1,
    padding: 12,
  },
  value: {
    fontSize: 14,
    color: Color.BLACK,
  },

  item: {
    fontSize: 14,
    color: Color.BLACK,
    lineHeight: 21,
    paddingVertical: 12,
  },

  divider: {
    height: 1,
  },
});
