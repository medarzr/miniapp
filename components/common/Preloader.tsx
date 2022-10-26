/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  View, ActivityIndicator, StyleProp, ViewStyle,
} from 'react-native';

type Props = {
  size?: 'small' | 'large',
  color?: string | undefined;
  backgroundColor?: string,
  style?: StyleProp<ViewStyle>
};

const Preloader: React.FC<Props> = ({
  size, color, backgroundColor, style,
}) => (
  <View style={[style, { backgroundColor: backgroundColor || 'red' }]}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

Preloader.defaultProps = {
  size: 'large',
  color: undefined,
  backgroundColor: '',
  style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default React.memo(Preloader);
