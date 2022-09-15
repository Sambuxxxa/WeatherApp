import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

export default function Index({temp, condition}) {

  let weather = condition

  if (weather === 'Rain') {
    return (
      <ImageBackground style={{flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}}
                       source={require("../assets/images/rain.jpg")}>
        <View style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "rgba(1, 1, 1, 0.2)"}}/>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Дощ</Text>
        <Ionicons name={'rainy-outline'} size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
      </ImageBackground>);
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
        <ImageBackground style={{flex: 1, width: "100%", alignItems: "center", justifyContent: "center"}} source={require("../assets/images/clouds.jpg")}>
          <View style={{height: "100%", width: "100%", position: "absolute", backgroundColor: "rgba(1, 1, 1, 0.3)"}} />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.weather}>Хмарно</Text>
        <Ionicons name="cloud-outline" size={60} color="white"/>
        <StatusBar barStyle={'light-content'}/>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
