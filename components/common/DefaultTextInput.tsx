/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
  Keyboard, KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput as RNTextInput,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  valueInput: string | undefined,
  onChangeText: (((text: string) => void) & Function),
  maxLength: number,
  label: string,
  lineColor?: string,
  inputIcon?: string,
  secureTextEntry?: boolean,
  multiline?: boolean,
  keyType?: ReturnKeyTypeOptions,
  style?: {},
  disabled?: boolean,
  editable?: boolean,
  keyboardType?: KeyboardTypeOptions,
  numberOfLines?: number,
  onSubmitEditing?: ((() => void) & Function),
  onPress?: ((() => void) & Function),
  primary?: { width: number, color: string } };

const DefaultTextInput = React.forwardRef<RNTextInput, Props>(({ ...props }, ref?) => {
  const {
    valueInput, onChangeText, maxLength, label, secureTextEntry,
    numberOfLines, style, lineColor, multiline, onSubmitEditing,
    keyType, disabled, keyboardType, inputIcon, editable, onPress,
  } = props;

  const [visiblePass, setvisiblePass] = useState(secureTextEntry);

  return (
    <TextInput
      autoCapitalize="none"
      disabled={disabled}
      mode="flat"
      textContentType="oneTimeCode"
      ref={ref}
      returnKeyType={keyType}
      autoCorrect={false}
      maxLength={maxLength}
      keyboardType={keyboardType}
      secureTextEntry={visiblePass}
      value={valueInput}
      blurOnSubmit={false}
      selectionColor="#748D63"
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      numberOfLines={numberOfLines}
      activeUnderlineColor={lineColor || '#748D63'}
      underlineColor={lineColor || '#748D63'}
      multiline={multiline || false}
      editable={editable}
      onPressOut={onPress}
      style={{
        backgroundColor: 'white',
        fontSize: 16,
        overflow: 'hidden',
        ...style,
      }}
      label={label}
      right={secureTextEntry ? (
        <TextInput.Icon
          name={() => (
            <Icon
              name={visiblePass ? 'visibility' : 'visibility-off'}
              size={24}
              color="gray"
            />
          )}
          style={{ marginRight: 15 }}
          onPress={() => {
            setvisiblePass(!visiblePass);
            return false;
          }}
        />
      ) : (
        <TextInput.Icon
          name={() => (<Icon name={inputIcon || ''} size={24} color="gray" />)}
          style={{ marginRight: 15 }}
        />
      )}
      theme={{
        colors: {
          disabled: 'gray',
          placeholder: lineColor || '#748D63',
          text: 'black',
          primary: '#748D63',
        },
      }}
      autoComplete="off"
    />
  );
});

export default DefaultTextInput;

DefaultTextInput.defaultProps = {
  keyboardType: 'default',
  keyType: 'done',
  multiline: false,
  disabled: false,
  editable: true,
  style: {},
  inputIcon: '',
  lineColor: '',
  secureTextEntry: false,
  numberOfLines: 1,
  primary: { width: 0, color: 'transparent' },
  onSubmitEditing: Keyboard.dismiss,
  onPress: undefined,
};
