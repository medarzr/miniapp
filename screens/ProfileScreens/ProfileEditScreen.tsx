/* eslint-disable unicorn/no-unsafe-regex */
/* eslint-disable sonarjs/no-duplicate-string */
import React, {
  RefObject, useRef,
} from 'react';
import { Formik } from 'formik';
import {
  ScrollView, StyleSheet, TouchableOpacity, Image, View, KeyboardAvoidingView, Keyboard,
  TextInput as RNTextInput,
  ViewStyle,
  StyleProp,
  ReturnKeyTypeOptions,
  Text,
} from 'react-native';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StackParamList } from '../../navigator/types';
import DefaultTextInput from '../../components/common/DefaultTextInput';
import DefaultButton from '../../components/common/DefaultButton';
import { profileDataSelector } from '../../redux/ducks/profile/profileSelectors';
import profileCompositeActions from '../../redux/ducks/profile/profileCompositeActions';

type FieldsType = {
  id: number;
  name: string;
  onSubmitEditing?: (() => void) | undefined;
  label: string;
  style?: StyleProp<ViewStyle>;
  ref?: undefined | RefObject<RNTextInput>;
  inputIcon?: string;
  keyType?: ReturnKeyTypeOptions | undefined;
  noEditable?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  secureTextEntry?: boolean;
};

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Введите минимум 2 символа')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(3, 'Введите минимум 3 символа')
    .required('Обязательное поле'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Неправильный формат телефона')
    .min(8, 'Введите минимум 8 символов')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Неправильный email').matches(emailRegExp, 'Неправильный email')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(7, 'Введите минимум 7 символов')
    .required('Обязательное поле'),
});

type Props = {
  navigation: StackNavigationProp<StackParamList, 'ProfileEditScreen'>
};

export default function ProfileEditScreen({ navigation }: Props) {
  const lastNameRef = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);
  const phoneNumberRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const profile = useSelector(profileDataSelector);
  const dispatch = useDispatch();

  const setData = (values: {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    password: string, }) => {
    dispatch(profileCompositeActions.editProfileData.request({
      data: values,
      callback: navigation.goBack,
    }));
  };
  return (
    <Formik
      validateOnBlur
      enableReinitialize
      initialValues={{
        name: profile?.name || '',
        lastName: profile?.lastName || '',
        email: profile?.email || '',
        phone: profile?.phone || '',
        password: profile?.password || '',
      }}
      validationSchema={validationSchema}
      onSubmit={setData}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleSubmit,
          setFieldError,
          values,
          errors,
        } = formikProps;

        const onChange = (value: string, type: string) => {
          handleChange(type)(value);
          if (errors) {
            setFieldError(type, '');
          }
        };

        const fields: FieldsType[] = [
          {
            id: 1,
            name: 'name',
            onSubmitEditing: lastNameRef?.current?.focus,
            label: 'Имя',
            style: { marginTop: 10 },
          },
          {
            id: 2,
            name: 'lastName',
            ref: lastNameRef,
            onSubmitEditing: emailRef?.current?.focus,
            label: 'Фамилия',
          },
          {
            id: 3,
            name: 'email',
            ref: emailRef,
            inputIcon: 'mail',
            onSubmitEditing: phoneNumberRef?.current?.focus,
            label: 'Email',
          },
          {
            id: 4,
            name: 'phone',
            ref: phoneNumberRef,
            keyType: 'done',
            inputIcon: 'call',
            onSubmitEditing: passwordRef?.current?.focus,
            label: 'Номер телефона',
          },
          {
            id: 5,
            name: 'password',
            ref: passwordRef,
            keyType: 'done',
            label: 'Пароль',
            secureTextEntry: true,
          },
        ];

        return (
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'white' }}
            onPress={Keyboard.dismiss}
            activeOpacity={1}
          >
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'center' }}
            >
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
                    { fields.map(((item) => (
                      <View>
                        <DefaultTextInput
                          key={item.id}
                          ref={item.ref ?? null}
                          maxLength={80}
                          secureTextEntry={item?.secureTextEntry}
                          keyType={item.keyType ?? 'next'}
                          inputIcon={item.inputIcon ?? undefined}
                          valueInput={values[item.name]}
                          onSubmitEditing={item.onSubmitEditing}
                          onChangeText={(value) => onChange(value, item.name)}
                          style={item.style ?? { marginTop: 14 }}
                          label={item.label}
                          lineColor={errors[item.name] ? 'red' : ''}
                        />
                        {(errors[item.name])
                          ? (<Text style={{ color: 'red', ...styles.errorText }}>{errors[item.name]}</Text>) : undefined}
                      </View>
                    )))}
                  </View>
                </View>
                <DefaultButton
                  title="Сохранить"
                  icon={<FeatherIcon name="save" size={20} color="#748D63" />}
                  onPress={handleSubmit}
                  errors={Object.keys(errors).length > 0}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </TouchableOpacity>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 125,
    height: 125,
    borderRadius: 125,
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
  errorText: {
    width: '100%',
    position: 'absolute',
    bottom: -14,
    fontSize: 10,
    textAlign: 'center',
  },
});
