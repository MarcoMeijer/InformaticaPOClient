import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { EditKnop, AnnuleerKnop, CheckKnop } from "./Knoppen";
import Text from "./Text";

export default function AanpasbareTekst({ value, onChange }) {
  const [tekst, zetTekst] = useState(value);
  const [editen, zetEditen] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    zetTekst(value);
  }, [value]);

  return editen ? (
    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
      <TextInput style={{ flex: 1 }} value={tekst} onChangeText={zetTekst} />
      <AnnuleerKnop
        style={{ margin: 5, color: colors.tekstKleur }}
        onPress={() => zetEditen(false)}
      />
      <CheckKnop
        style={{ margin: 5, color: colors.tekstKleur }}
        onPress={() => {
          zetEditen(false);
          onChange(tekst);
        }}
      />
    </View>
  ) : (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <Text style={{ flex: 1 }}>{tekst}</Text>
      <EditKnop
        style={{ margin: 5, color: colors.tekstKleur }}
        onPress={() => zetEditen(true)}
      />
    </View>
  );
}
