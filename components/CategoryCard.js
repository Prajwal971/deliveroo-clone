import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image
            source={{
                uri:imgUrl,
            }}
            className="h-20 w-20 rounded"
        />
      <Text className="absolute bottom-2 left-1">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard