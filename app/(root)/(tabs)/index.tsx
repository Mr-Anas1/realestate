import { View, Text } from 'react-native'
import React from 'react'
import { jsxAttribute } from '@babel/types'
import { Link } from 'expo-router'

export default function Index(){
  return (
    <View 
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  )
}