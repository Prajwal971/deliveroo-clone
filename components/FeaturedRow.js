import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CC88" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal:15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restraunts cards */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow