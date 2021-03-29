import { useTheme } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import fetchData from "../../../Database/fetchData";
import { VerwijderKnop } from "../../../Gui/Basic/Knoppen";
import Text from "../../../Gui/Basic/Text";
import useFetch from "../../../Hooks/useFetch";

export default function LeerlingGegevens1({ navigation, klas }) {
  const [leerlingen, updateLeerlingen] = useFetch("klas", { klas: klas });
  const { colors, zetPrompt, addSucces } = useTheme();

  return (
    <View>
      {leerlingen === undefined ? (
        <ActivityIndicator />
      ) : (
        leerlingen.map((leerling, index) => {
          return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  margin: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.fouwDoosLijnKLeur
                }}
                key={index}
                onPress={() => {
                  navigation.navigate("Leerling gegevens2", {
                    leerling: leerling
                  });
                }}
              >
                {leerling.voornaam} {leerling.achternaam}
              </Text>
              <VerwijderKnop
                style={{ margin: 5, color: colors.tekstKleur }}
                onPress={() => {
                  zetPrompt({
                    message:
                      "Weet je zeker dat je deze leerling wilt verwijderen?",
                    onClose: () => {
                      fetchData("deleteleerling", {
                        persoonid: leerling.persoonid
                      }).then(() => {
                        addSucces("De leerling is succesvol verwijdert!");
                        updateLeerlingen();
                      });
                    }
                  });
                }}
              />
            </View>
          );
        })
      )}
    </View>
  );
}
