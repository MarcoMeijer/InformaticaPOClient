import * as React from 'react';
import { ActivityIndicator, Button, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import QuestionListComp from './Gui/QuestionListComp';
import getData from './server/fetchData';
import { styles } from './Styles';

export default function ExamEditPage() {
  const [text, setText] = React.useState(undefined);
  const [questions, setQuestions] = React.useState(undefined);

  React.useEffect(() => {
    if (text === undefined) {
      setTimeout(() => {
        getData("test").then(data => setText(data));
      }, 0);
    }
  }, [text]);

  React.useEffect(() => {
    if (questions === undefined) {
      setTimeout(() => {
        getData("vragen").then(data => setQuestions(data));
      }, 0);
    }
  }, [questions]);
  
  return (
    <View style={styles.rowContainer}>
      <View style={styles.box}>
        {
          text === undefined ?
          <ActivityIndicator/> :
          <ExamTextComp text={text}>
          </ExamTextComp>
        }
      </View>
      <View style={styles.box}>
        {
          questions === undefined ?
          <ActivityIndicator/> :
          <QuestionListComp questions={questions}>
          </QuestionListComp>
        }
        <Button
          title="Submit"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
