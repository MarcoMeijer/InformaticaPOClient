import { useTheme } from "@react-navigation/native";
import { getDocumentAsync } from "expo-document-picker";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import FouwDoos, { FouwDropDown } from "../../../Gui/Basic/FouwDoos";
import NumberInput from "../../../Gui/Basic/NumberInput";
import Text from "../../../Gui/Basic/Text";
import { styles } from "../../../Styles";
import TekstEditorTips from "./TekstEditorTips";


export default function ExamenTekstEditor({ examenTekst, zetExamenTekst}) {
  const [open, zetOpen] = useState(false);
  const [title, changeTitle] = useState(examenTekst.title);
  const [text, changeText] = useState(examenTekst.text);
  const [afbeelding, zetAfbeelding] = useState(examenTekst.afbeelding);
  const [afbeeldingX, zetAfbeeldingX] = useState(examenTekst.afbeeldingX);
  const [afbeeldingY, zetAfbeeldingY] = useState(examenTekst.afbeeldingY);
  const [afbeeldingW, zetAfbeeldingW] = useState(examenTekst.afbeeldingW);
  const [afbeeldingH, zetAfbeeldingH] = useState(examenTekst.afbeeldingH);
  const [afbeeldingGrote, zetAfbeeldingGrote] = useState(1);
  const { colors } = useTheme();
  
  const examText = {
    title: title,
    text: text,
    afbeelding: afbeelding,
    afbeeldingX: afbeeldingX,
    afbeeldingY: afbeeldingY,
    afbeeldingW: afbeeldingW * afbeeldingGrote,
    afbeeldingH: afbeeldingH * afbeeldingGrote
  };

  useEffect(() => {
    zetExamenTekst(examText);
  }, [title, text, afbeelding, afbeeldingX, afbeeldingY, afbeeldingW, afbeeldingH, afbeeldingGrote]);
  
  const selecteerAfbeelding = ({ uri }) => {
    zetAfbeelding(uri);

    const img = new Image();
    img.src = uri;

    img.onload = () => {
      zetAfbeeldingW(img.naturalWidth);
      zetAfbeeldingH(img.naturalHeight);
    };
  };
  
  return <View style={{zIndex: 5}}>
    {
      open &&
      <FouwDropDown
        titel="Tools om de tekst te stylen"
      >
        <TekstEditorTips/>
      </FouwDropDown>
    }
    <FouwDoos
      style={{margin: 5, flex: 1}}
      titel="Algemeen"
      onInfo={() => zetOpen(!open)}
    >
      <Text style={styles.text}>Titel:</Text>
      <TextInput
        style={[
          styles.textBox,
          {
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBorderKleur,
            borderWidth: 1,
            color: colors.tekstKleur
          }
        ]}
        onChangeText={(text) => changeTitle(text)}
        value={title}
      />

      <Text style={styles.text}>Tekst:</Text>
      <TextInput
        style={[
          styles.textBox,
          {
            backgroundColor: colors.inputTextBoxBackgroundKleur,
            borderColor: colors.inputTextBoxBorderKleur,
            borderWidth: 1,
            color: colors.tekstKleur
          }
        ]}
        multiline
        numberOfLines={20}
        onChangeText={(text) => changeText(text)}
        value={text}
      />
    </FouwDoos>
    <FouwDoos
      style={{margin: 5}}
      titel="Afbeelding"
      onPicture={() => {
        getDocumentAsync({ type: "image/*" }).then(selecteerAfbeelding);
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <NumberInput
          style={{ flexGrow: 1 }}
          number={afbeeldingX}
          title="Afbeelding x"
          onChangeNumber={zetAfbeeldingX}
        />
        <NumberInput
          style={{ flexGrow: 1 }}
          number={afbeeldingY}
          title="Afbeelding y"
          onChangeNumber={zetAfbeeldingY}
        />
      </View>
      <NumberInput
        title="Afbeelding grote"
        number={afbeeldingGrote}
        onChangeNumber={zetAfbeeldingGrote}
        float={true}
      />
    </FouwDoos>
  </View>
}