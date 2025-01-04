import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Slot />
}


