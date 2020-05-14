import React from 'react'
import { View, Text } from 'react-native'
import "./slider.css"
export const Slide = (props: any) => {

  const { title } = props;

  return (
    <View className='slide'>
      <Text className='slideText'>
        {title}
      </Text>
    </View>
  );
}

export default Slide;
