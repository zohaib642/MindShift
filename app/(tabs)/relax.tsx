import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';

interface MarkedDates {
  [key: string]: { marked: boolean; dotColor: string };
}

export default function HomeScreen() {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [isMeditating, setIsMeditating] = useState(false);
  const [timer, setTimer] = useState(300); // 5-minute timer
  const [isPaused, setIsPaused] = useState(false);

  // Function to toggle sleep for a selected date
  const handleDayPress = (day: { dateString: string }) => {
    const newMarkedDates = { ...markedDates };
    if (newMarkedDates[day.dateString]) {
      delete newMarkedDates[day.dateString]; // Remove marking
    } else {
      newMarkedDates[day.dateString] = { marked: true, dotColor: 'green' }; // Mark date with green
    }
    setMarkedDates(newMarkedDates);
  };

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isMeditating && !isPaused && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsMeditating(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMeditating, isPaused, timer]);

  const startMeditation = () => {
    setIsMeditating(true);
    setIsPaused(false);
    setTimer(300); // Reset to 5 minutes
  };

  const pauseMeditation = () => {
    setIsPaused(!isPaused); // Toggle pause/resume
  };

  const resetMeditation = () => {
    setTimer(300); // Reset to 5 minutes
    setIsMeditating(false);
    setIsPaused(false);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Relax</Text>

      {/* Sleep Section */}
      <Text style={styles.subtitle}>Sleep</Text>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          calendarBackground: '#000',
          dayTextColor: '#fff',
          monthTextColor: '#fff',
          arrowColor: '#fff',
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="Mark 8 Hours Sleep" onPress={() => console.log("Sleep marked")} />
      </View>

      {/* Meditate Section */}
      <Text style={styles.subtitle}>Meditate</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}
        </Text>

        {isMeditating ? (
          <Text style={styles.meditatingText}>Meditating...</Text>
        ) : null}

        {isMeditating ? (
          <>
            <TouchableOpacity onPress={pauseMeditation} style={styles.pauseButton}>
              <Text style={styles.pauseButtonText}>
                {isPaused ? 'Resume' : 'Pause'} Meditation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetMeditation} style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reset Meditation</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={startMeditation} style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Meditation</Text>
          </TouchableOpacity>
        )}
      </View>
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
