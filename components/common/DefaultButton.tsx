import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text,
} from 'react-native';

type Props = {
  title: string,
  icon: any,
  onPress?: () => void;
  errors?: boolean
};

export default function DefaultButton(props: Props) {
  const {
    title, icon, onPress, errors,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { opacity: errors ? 0.5 : 1 }]}
      disabled={errors}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        { title }
      </Text>
      { icon }
    </TouchableOpacity>
  );
}

DefaultButton.defaultProps = {
  errors: false,
  onPress: undefined,
};
const styles = StyleSheet.create({

  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#748D63',
    paddingRight: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    borderColor: '#748D63',
    borderWidth: 2,
    marginTop: 16,
  },
  imageContainer: {
    borderWidth: 4,
    borderRadius: 125,
    borderColor: '#748D63',
    margin: 16,
    alignSelf: 'center',
  },
  backgroundDataContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
