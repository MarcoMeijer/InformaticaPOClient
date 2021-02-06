import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, View } from 'react-native';
import ExamTextComp from './Gui/ExamTextComp';
import QuestionComp from './Gui/QuestionComp';
import useArrayState from './Hooks/arrayState';
import fetchData from './server/fetchData';
import { styles } from './Styles';

export default function ExamEditPage({ route }) {
  const { tekstid } = route.params;
  const [vraagvolgorde, zetVraagvolgorde] = useState(0);
  const [text, zetText] = useState(undefined);
  const [vragen, zetVragen] = useState(undefined);
  const [correct, zetCorrect, zetIndexCorrect] = useArrayState();

  useEffect(() => {
    if (text === undefined) {
      fetchData("tekst", { tekstid: tekstid }).then(data => {
        zetText(JSON.parse(data.tekstinhoud));
      });
    }
  }, [text, tekstid]);

  useEffect(() => {
    if (vragen === undefined) {
      fetchData("vragen", { tekstid: tekstid }).then(data => {
        zetVragen(data.map(object => JSON.parse(object.vraaginhoud)));
        zetCorrect(data.map(() => false));
      });
    }
  }, [vragen, correct, zetCorrect, tekstid, vraagvolgorde]);

  const volgende = () => {
    zetVraagvolgorde(vraagvolgorde + 1);
  };
  const vorige = () => {
    zetVraagvolgorde(vraagvolgorde - 1);
  };

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
          vragen === undefined ?
            <ActivityIndicator /> :
            <View>
              <View style={styles.rowContainer}>
                {
                  vraagvolgorde !== 0 &&
                  <Button
                    title="Vorige"
                    onPress={vorige}
                  />
                }
                {
                  vraagvolgorde !== vragen.length - 1 &&
                  <Button
                    title="Volgende"
                    onPress={volgende}
                  />
                }
              </View>
              {
                vragen.map((vraag, index) => {
                  return <View style={{ display: index === vraagvolgorde ? null : 'none' }}>
                    <QuestionComp
                      data={vraag}
                      zetCorrect={zetIndexCorrect(index)}
                    />
                  </View>;
                })
              }
            </View>
        }
      </View>
    </View>
  );
}
