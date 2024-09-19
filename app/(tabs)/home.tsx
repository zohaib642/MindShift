import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.genStyle}>
      <TouchableOpacity style={[styles.button, {left: 60, top: 120}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {left: 45}]}>Schedule</Text>
          <Image style={{height: 90, width: 90, right: 30, bottom: 13}} source={require('@/assets/images/calendar.png')} resizeMode='contain'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {left: 320, top: -55}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {left: 45}]}>Body</Text>
          <Image style={{height: 90, width: 90, right: 17, bottom: 13}} source={require('@/assets/images/human.png')} resizeMode='contain'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {left: 60, top: 50}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {left: 45}]}>Podcasts</Text>
          <Image style={{height: 90, width: 90, right: 25, bottom: 13}} source={require('@/assets/images/podcast.png')} resizeMode='contain'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {left: 320, top: -125}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.text, {left: 45}]}>Relax</Text>
          <Image style={{height: 90, width: 90, right: 17, bottom: 13}} source={require('@/assets/images/meditation.png')} resizeMode='contain'/>
        </View>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  button: {
    borderColor: '#000080',
    borderWidth: 15,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 175,
    width: 175
  },
  genStyle: {
    backgroundColor: '#000000'
  },
  text: {
    color: '#FFFFFF',
    top: 55,
    fontFamily: 'Palatino'
  }
});
