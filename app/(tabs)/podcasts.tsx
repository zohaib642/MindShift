import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Podcasts</Text>

      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // marginHorizontal: 20
  },
  container: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Palatino',
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: 'Palatino',
    fontSize: 40,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  timerText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontFamily: 'Palatino',
  },
  startButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  pauseButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFA500',
    borderRadius: 5,
  },
  pauseButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  resetButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  meditatingText: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 20,
  },
});
