import { ActivityIndicator, View } from "react-native";
import Enter from "../../Gui/Basic/Enter";
import FouwDoos from "../../Gui/Basic/FouwDoos";
import Text from "../../Gui/Basic/Text";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import useFetch from "../../Hooks/useFetch";
import AanpasbareTekst from "../../Gui/Basic/AanpasbareTekst";
import fetchData from "../../Database/fetchData";
import TextBox from "../../Gui/Basic/TextBox";
import { useTheme } from "@react-navigation/native";
import Button from "../../Gui/Basic/Button";
import { useState } from "react";

export default function EigenGegevens({ navigation }) {
  const [leerling] = useFetch(
    "eigengegevens",
    {},
    (leerlingen) => leerlingen[0]
  );
  const { addSucces, addError } = useTheme();
  const [oudWachtwoord, zetOudWachtwoord] = useState("");
  const [nieuwWachtwoord, zetNieuwWachtwoord] = useState("");
  const [herhaalNiewWachtwoord, zetHerhaalNieuwWachtwoord] = useState("");

  let submit = () => {
    if (oudWachtwoord === "") {
      addError("U heeft uw oude wachtwoord niet ingevuld.");
    } else if (nieuwWachtwoord === "") {
      addError("U heeft uw nieuwe wachtwoord niet ingevuld.");
    } else if (herhaalNiewWachtwoord === "") {
      addError("Uw heeft uw wachtwoord niet herhaald.");
    } else if (herhaalNiewWachtwoord !== nieuwWachtwoord) {
      addError(
        "Uw wachtwoord komt niet overeen met het wachtwoord dat u heeft herhaald."
      );
    } else {
      fetchData("updatewachtwoord", {
        nieuwewachtwoord: nieuwWachtwoord,
        oudewachtwoord: oudWachtwoord
      }).then((data) => {
        if (data.affectedRows === 0) {
          addError("Je oude wachtwoord klopt niet");
        } else {
          addSucces("Wachtwoord is succesvol aangepast!");
        }
      });
    }
  };

  return (
    <Jacket>
      <FouwDoos
        altijdOpen={true}
        titel="Jouw gegevens"
        style={{ alignSelf: "stretch" }}
      >
        {leerling === undefined ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text>
              <b>{`Gegevens van ${leerling.voornaam} ${leerling.tussenvoegsel} ${leerling.achternaam}`}</b>{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Voornaam: </Text>
              <AanpasbareTekst
                value={leerling.voornaam}
                onChange={(tekst) => {
                  fetchData("updatevoornaam", {
                    voornaam: tekst
                  }).then(() => {
                    addSucces("Voornaam is succesvol aangepast!");
                  });
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>Tussenvoegsel: </Text>
              <AanpasbareTekst
                value={leerling.tussenvoegsel}
                onChange={(tekst) => {
                  fetchData("updatetussenvoegsel", {
                    tussenvoegsel: tekst
                  }).then(() => {
                    addSucces("Tussenvoegsel is succesvol aangepast!");
                  });
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>Achternaam: </Text>
              <AanpasbareTekst
                value={leerling.achternaam}
                onChange={(tekst) => {
                  fetchData("updateachternaam", {
                    achternaam: tekst
                  }).then(() => {
                    addSucces("Achternaam is succesvol aangepast!");
                  });
                }}
              />
            </View>
            <Text>
              {`Klas: ${leerling.klas}`} <Enter />
              {`Leerlingnummer: ${leerling.llnr}`} <Enter />
              {`Bevoegdheid: ${leerling.bevoegdheid}`} <Enter />
            </Text>
          </View>
        )}
      </FouwDoos>
      <Text style={{ marginTop: "10px" }}>
        <b>Wachtwoord aanpassen:</b>
      </Text>
      <TextBox
        title="Oude wachtwoord"
        onChangeText={zetOudWachtwoord}
        value={oudWachtwoord}
        secureTextEntry={true}
      />
      <TextBox
        title="Nieuwe wachtwoord"
        onChangeText={zetNieuwWachtwoord}
        value={nieuwWachtwoord}
        secureTextEntry={true}
      />
      <TextBox
        style={{ marginBottom: "10px" }}
        title="Herhaal wachtwoord"
        onChangeText={zetHerhaalNieuwWachtwoord}
        value={herhaalNiewWachtwoord}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={submit} />
    </Jacket>
  );
}
