import {StatusBar, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

export default function Weather({temp, condition}) {

  let weather = condition

  if (weather === 'Rain') {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Дощ</Text>
        <Ionicons name={'rainy-outline'} size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>);
  } else if (weather === 'Thunderstorm') {
    return (
      <LinearGradient
        colors={['#47B5FF', '#1363DF', '#06283D']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Гроза</Text>
        <Ionicons name="thunderstorm-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>
    );
  } else if (weather === 'Drizzle') {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Дощик</Text>
        <Ionicons name="rainy-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>
    );
  } else if (weather === 'Snow') {
    return (
      <LinearGradient
        colors={['#F7F5F2', '#DFDFDE', '#BBBFCA']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Сніг</Text>
        <Ionicons name="snow-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>
    );
  } else if (weather === 'Clear') {
    return (
      <LinearGradient
        colors={['#FFEF82', '#EFD345', '#BABD42']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Сонце</Text>
        <Ionicons name="sunny-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>
    );
  } else if (weather === 'Clouds') {
    return (
      <LinearGradient
        colors={['#C4DDFF', '#7FB5FF', '#5D8BF4']}
        style={styles.container}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Хмарно</Text>
        <Ionicons name="cloud-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 60,
    color: 'white',
  },
  weather: {
    fontSize: 30,
    color: 'white',
  }
});
