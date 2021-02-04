import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import QuestionComp from './Gui/QuestionComp';
import fetchData from './server/fetchData';
import { styles } from './Styles';

export default function ExamEditPage({ route, navigation }) {
  const { tekstid, vraagid } = route.params;
  const [text, setText] = useState(undefined);
  const [vraag, setVraag] = useState(undefined);

  useEffect(() => {
    if (text === undefined) {
      fetchData("tekst", { tekstid: tekstid }).then(data => {
        setText(JSON.parse(data.tekstinhoud));
      });
    }
  }, [text, tekstid]);

  useEffect(() => {
    if (vraag === undefined) {
      console.log(vraagid);
      fetchData("vraag", { vraagid: vraagid }).then(data => {
        setVraag(JSON.parse(data.vraaginhoud));
      });
    }
  }, [vraag, vraagid]);

  return (
    <View style={styles.rowContainer}>
      <View style={styles.box}>
        {
          text === undefined ?
            <ActivityIndicator /> :
            <ExamTextComp text={text}>
            </ExamTextComp>
        }
      </View>
      <View style={styles.box}>
        {
          vraag === undefined ?
            <ActivityIndicator /> :
            <QuestionComp data={vraag}>
            </QuestionComp>
        }
        <Button
          title="Submit"
          onPress={() => { }}
        />
      </View>
    </View>
  );
}
