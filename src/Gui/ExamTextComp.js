import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExamTextComp(props) {
  let text = props.text;

  return (
    <View>
      <Text style={styles.titleText}>{text.title}</Text>
      {
        text.paragraphs.map((para, index) => {
          return (
            <Text>
              <Text style={{ fontWeight: 'bold' }}>({index + 1}) </Text>
              {para}
            </Text>
          );
        })
      }
    </View>
  )
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: '16px',
    fontWeight: 'bold'
  }
});
