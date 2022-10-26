import React, { useState } from 'react';
import {
  ScrollView, View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Card from '../../components/AnimationsScreen/Card';
import DefaultButton from '../../components/common/DefaultButton';

interface CardList {
  id: string;
}

export default function AnimationScreen() {
  const [cardList, setCardList] = useState<CardList[]>([]);

  const addCard = () => {
    setCardList((current) => [...current, { id: Date.now().toString() }]);
  };

  const deleteCard = (id: string) => {
    setCardList(cardList.filter((item) => item.id !== id));
  };

  return (
    <View style={{ flex: 1, marginVertical: 16 }}>
      <ScrollView style={{ width: '100%' }}>
        {cardList.map((item) => (
          <Card
            key={item.id}
            deleteCard={() => deleteCard(item.id)}
          />
        ))}
      </ScrollView>
      <View style={{ marginHorizontal: 16 }}>
        <DefaultButton
          title="Добавить карту"
          icon={<MaterialIcon name="add" size={20} color="#748D63" />}
          onPress={addCard}
        />
      </View>
    </View>
  );
}
