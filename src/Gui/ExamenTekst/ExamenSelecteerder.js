import { View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import DropDownMenu from "../Basic/DropDownMenu";

export default function ExamenSelecteerd({ title, onChangeText }) {
  const [examens] = useFetch("examens");

  return (
    <View>
      <DropDownMenu
        title={title === undefined ? "Selecteer examen" : title}
        opties={
          examens === undefined
            ? []
            : examens.map((examen) => examen.examennaam)
        }
        onChangeText={onChangeText}
      />
    </View>
  );
}
