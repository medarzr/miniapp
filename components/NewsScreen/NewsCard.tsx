import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { StackParamList } from '../../navigator/types';

type Props = {
  item: {
    title: string,
    body: string,
  }
  photo: any,
  navigation: StackNavigationProp<StackParamList, 'NewsScreen'>
};

export default function NewsCard(props: Props) {
  const { item, photo, navigation } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CurrentNewsScreen', { item, photo })}
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Text
          numberOfLines={2}
          style={styles.titleContainer}
        >
          {item.title}

        </Text>
        <Text
          numberOfLines={3}
          style={styles.bodyContainer}
        >
          {item.body}

        </Text>
      </View>
      <Image
        style={styles.imageContainer}
        source={photo}
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 8,
  },
  bodyContainer: {
    fontSize: 12,
    fontWeight: '400',
  },
});
