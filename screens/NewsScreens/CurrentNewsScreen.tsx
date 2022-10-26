import React from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { StackParamList } from '../../navigator/types';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'CurrentNewsScreen'>
  route: any
};

export default function CurrentNewsScreen(props: Props) {
  const { navigation, route } = props;
  const { item, photo } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: '100%', flex: 1 }}
        source={photo}
      />
      <View style={styles.listContainer}>
        <ScrollView
          contentContainerStyle={{ padding: 16, flexGrow: 1 }}
        >
          <Text style={styles.titleContainer}>
            {item.title}
          </Text>
          <Text style={styles.bodyContainer}>
            {item.body}
          </Text>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style={styles.inBottomContainer}>
            <Text style={styles.subText}>12.12.2020</Text>
          </View>
          <View style={styles.inBottomContainer}>
            <Text style={styles.subText}>Nature</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={navigation.goBack}
      >
        <MaterialIcon name="arrow-back" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 8,
  },
  bodyContainer: {
    fontSize: 14,
    fontWeight: '400',
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: -14,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
  },
  bottomContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  inBottomContainer: {
    backgroundColor: '#93AAB0',
    padding: 8,
    borderRadius: 18,
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
});
