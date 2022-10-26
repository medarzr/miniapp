import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

type Props = {
  title: string,
  content: string | undefined,
};

export default function ProfileField(props: Props) {
  const { title, content } = props;
  const hideInfo = () => {
    switch (title) {
      case 'Password': {
        return content?.replace(content, '*********');
      }
      case 'Email': {
        return content?.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1***@$2');
      }
      default: {
        return content;
      }
    }
  };

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{hideInfo()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#748D63',
  },
  contentText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
});
