import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { StackParamList } from '../../navigator/types';
import newsCompositeActions from '../../redux/ducks/news/newsCompositeActions';
import { newsSelector, loadingSelector } from '../../redux/ducks/news/newsSelectors';
import NewsCard from '../../components/NewsScreen/NewsCard';

const PHOTOS = [
  {
    photo: require('../../assets/images/morning.jpg'),
  },
  {
    photo: require('../../assets/images/bridge.jpg'),
  },
  {
    photo: require('../../assets/images/cat.jpg'),
  },
  {
    photo: require('../../assets/images/hyacinth.jpg'),
  },
  {
    photo: require('../../assets/images/bulldog.jpg'),
  },
];

type Props = {
  navigation: StackNavigationProp<StackParamList, 'NewsScreen'>
};

export default function NewsScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const news = useSelector(newsSelector);
  const loading = useSelector(loadingSelector);

  const getData = () => {
    dispatch(newsCompositeActions.getNewsData.request());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={news}
        onRefresh={getData}
        refreshing={loading}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <NewsCard
            item={item}
            photo={PHOTOS[Math.floor(Math.random() * 5)].photo}
            navigation={navigation}
          />
        )}
        estimatedItemSize={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
  },
});
