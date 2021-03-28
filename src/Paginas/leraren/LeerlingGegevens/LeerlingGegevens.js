import { useTheme } from "@react-navigation/native";
import { View } from "react-native";
import fetchData from "../../../Database/fetchData";
import FouwDoos from "../../../Gui/Basic/FouwDoos";
import Text from "../../../Gui/Basic/Text";
import Jacket from "../../../Gui/Pagina-layout/Jacket";
import useFetch from "../../../Hooks/useFetch";
import LeerlingGegevens1 from "./LeerlingGegevens1";
import ToevoegenMenu from "../../../Gui/Basic/ToevoegenMenu";

export default function LeerlingGegevensPagina({ navigation }) {
  const [klassen, updateKlassen] = useFetch("klassen", {}, (klassen) =>
    klassen.map((klas) => klas.klas)
  );
  const { addSucces } = useTheme();

  return (
    <Jacket>
      <Text style={{ textAlign: "center" }}>
        <b>Selecteer een klas:</b> <br />
      </Text>
      <View
        style={{
          padding: 10,
          alignSelf: "stretch"
        }}
      >
        {klassen &&
          klassen.map((klas) => (
            <FouwDoos
              key={klas}
              titel={klas}
              onEdit={(tekst) => {
                fetchData("updateklas", {
                  oudeklas: klas,
                  nieuweklas: tekst
                }).then(() => {
                  updateKlassen();
                  addSucces("Klas is succesvol aangepast!");
                });
              }}
              onDelete={() => {
                fetchData("deleteklas", { klas: klas }).then(() => {
                  updateKlassen();
                  addSucces("Klas is succesvol verwijdert!");
                });
              }}
            >
              <LeerlingGegevens1 klas={klas} navigation={navigation} />
            </FouwDoos>
          ))}
        <ToevoegenMenu
          naam="klas"
          onCreate={(tekst) => {
            fetchData("insertklas", { klas: tekst }).then(() => {
              addSucces("Klas succesvol aangemaakt.");
              updateKlassen();
            });
          }}
        />
      </View>
    </Jacket>
  );
}
