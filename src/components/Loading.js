import {ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

export default function Loading(props) {

  return (
    <SafeAreaView style={styles.mainBox}>
      <Text style={styles.text}>{props.el}</Text>
      <ActivityIndicator color={'#EEEEEE'} size={'large'}/>
      <StatusBar barStyle={'light-content'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#303841',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#EEEEEE',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
  },
});
