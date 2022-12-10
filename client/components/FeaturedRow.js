import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type->{
                name
              }
            },
          }[0]          
        `, { id }
        ).then((data) => {
            setRestaurants(data?.restaurants)
        })
    }, [id])

    console.log(restaurants)

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
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}

                {/* Restraunts cards */}
                {/* <RestaurantCard
                    id={1}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre="Japanese"
                    address='123 Main St'
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={20}
                />

                <RestaurantCard
                    id={1}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre="Japanese"
                    address='123 Main St'
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={20}
                />

                <RestaurantCard
                    id={1}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre="Japanese"
                    address='123 Main St'
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={20}
                />

                <RestaurantCard
                    id={1}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title='Yo! Sushi'
                    rating={4.5}
                    genre="Japanese"
                    address='123 Main St'
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={20}
                /> */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow