import React from 'react';
import {
  ScrollView, StyleSheet, TouchableOpacity, Image, View, Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { StackParamList } from '../../navigator/types';
import ProfileField from '../../components/ProfileScreen/ProfileField';
import DefaultButton from '../../components/common/DefaultButton';
import { profileDataSelector } from '../../redux/ducks/profile/profileSelectors';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'ProfileScreen'> | StackNavigationProp<StackParamList, 'ProfileEditScreen'>
};

export default function ProfileScreen({ navigation }: Props) {
  const profile = useSelector(profileDataSelector);
  return (
    <ScrollView
      style={{ backgroundColor: '#ECE3DC', flex: 1 }}
      contentContainerStyle={{ padding: 16, flexGrow: 1 }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.userImage}
            source={require('../../assets/images/man.jpg')}
          />
        </TouchableOpacity>

        <View style={styles.backgroundDataContainer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('ProfileEditScreen')}
          >
            <MaterialCommunityIcon name="account-edit" size={18} color="#748D63" />
          </TouchableOpacity>
          <Text numberOfLines={2} style={styles.nameText}>{`${profile?.name} ${profile?.lastName}`}</Text>
          <View style={{ marginTop: 8 }}>
            <Text style={{ textAlign: 'center' }}>
              They live in New York and they recently joined a new  data science startup.
              The new company is far from their home. They mostly spent their weekends in social activsist groups.
              She got divorced from her partner two years ago and she decided to give  more space to herself.
            </Text>
          </View>
          <ProfileField title="Email" content={profile?.email} />
          <ProfileField title="Phone" content={profile?.phone} />
          <ProfileField title="Password" content={profile?.password} />
        </View>
      </View>
      <DefaultButton
        title="Выход"
        icon={<FeatherIcon name="log-out" size={20} color="#748D63" />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 125,
    height: 125,
    borderRadius: 125,
  },
  editButton: {
    position: 'absolute',
    top: -16,
    right: -8,
    borderRadius: 100,
    backgroundColor: 'white',
    borderColor: '#748D63',
    borderWidth: 2,
    padding: 8,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#748D63',
    paddingRight: 10,
  },
  logoutButtonContainer: {
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
