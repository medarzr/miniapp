import React from 'react';
import {
  StyleSheet, TouchableOpacity,
} from 'react-native';
import Animated, {
  SlideInLeft, Layout, ZoomOut, useAnimatedStyle, useSharedValue, withTiming, useAnimatedGestureHandler, withSpring,
} from 'react-native-reanimated';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

type Props = {
  deleteCard: () => void;
};

type ContextType = {
  translateX: number;
  translateY: number;
};

function Card({ deleteCard }: Props) {
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{
      rotateZ: `${rotation.value}deg`,
    },
    {
      translateX: translateX.value,
    },
    {
      translateY: translateY.value,
    }],
  }));

  const panGestureEvent = useAnimatedGestureHandler<
  PanGestureHandlerGestureEvent,
  ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View
        layout={Layout.springify()}
        style={[styles.container, animatedStyle, { backgroundColor: generateColor() }]}
        entering={SlideInLeft}
        exiting={ZoomOut}
      >

        <TouchableOpacity
          onPress={() => { rotation.value = withTiming(rotation.value + 360, { duration: 550 }); }}
        >
          <FontAwesomeIcon name="rotate-right" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButtonContainer}
          onPress={deleteCard}
        >
          <MaterialIcon name="delete" size={20} color="gray" />
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
} export default Card;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 16,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  deleteButtonContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 8,
    borderRadius: 8,
  },
});
