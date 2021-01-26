import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    justifyContent: 'flex-start',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: '10px',
    borderRadius: '10px',
    margin: '7px',
    flex: 1
  },
  text: {
    fontSize: '16px'
  },
  textBox: {
    maxHeight: 2000,
    borderColor: 'deepskyblue',
    backgroundColor: '#eeeeee',
    borderWidth: 1
  }
});
