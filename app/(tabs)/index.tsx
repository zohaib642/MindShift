import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Alert } from 'react-native';
export default function logInScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/MindShift.png')}
          style={styles.logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MindShift</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Username:</ThemedText>
      </ThemedView>
      <ThemedView style = {styles.inputBar}>
        <TextInput style = {styles.inputText}></TextInput>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Password:</ThemedText>
      </ThemedView>
      <ThemedView style = {styles.inputBar}>
        <TextInput style = {styles.inputText}></TextInput>
      </ThemedView>
      <Button
        // onPress={this._onPressButton}
        title="Log In"
        color="#000000"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 157,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    top: 15,
  },
  logo: {
    height: 250,
    width: 360,
    bottom: 0,
    left: 100,
    position: 'absolute',
  },
  inputBar: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    color: '#fff',
  },
  inputText: {
    marginLeft: 5,
    color: '#fff',
  }
});
