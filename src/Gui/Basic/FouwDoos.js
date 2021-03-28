import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import PercentageGoed from "../ExamenTekst/PercentageGoed";
import {
  AfbeeldingKnop,
  ConfiguratieKnop,
  EditKnop,
  FouwKnop,
  InfoKnop,
  VerwijderKnop
} from "./Knoppen";
import Text from "./Text";

export default function FouwDoos(props) {
  const {
    style,
    percentage,
    altijdOpen,
    lazy,
    titel,
    children,
    onEdit,
    onPicture,
    onConfiguration,
    onDelete,
    onInfo
  } = props;
  const [open, zetOpen] = useState(props.open || altijdOpen);
  const { colors } = useTheme();

  return (
    <View style={style}>
      <View
        style={{
          backgroundColor: colors.textboxAchtergrondKleur,
          margin: 1,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#aaa"
        }}
      >
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#e8f6f6",
              borderRadius: 10
            },
            open && {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              marginBottom: 3
            }
          ]}
        >
          {altijdOpen || (
            <FouwKnop value={open} style={{ margin: 10 }} zetOpen={zetOpen} />
          )}
          <Text style={{ margin: 5, flex: 1 }}>{titel}</Text>
          {percentage && (
            <PercentageGoed style={{ marginRight: 6 }} factor={percentage} />
          )}
          {onEdit && <EditKnop style={{ margin: 5 }} onPress={onEdit} />}
          {onPicture && (
            <AfbeeldingKnop style={{ margin: 5 }} onPress={onPicture} />
          )}
          {onConfiguration && (
            <ConfiguratieKnop style={{ margin: 5 }} onPress={onConfiguration} />
          )}
          {onDelete && (
            <VerwijderKnop style={{ margin: 5 }} onPress={onDelete} />
          )}
          {onInfo && <InfoKnop style={{ margin: 5 }} onPress={onInfo} />}
        </View>
        {lazy ? (
          open && <View style={{ padding: 6 }}>{children}</View>
        ) : (
          <View style={[{ padding: 6 }, open ? {} : { display: "none" }]}>
            {children}
          </View>
        )}
      </View>
    </View>
  );
}

export function FouwDropDown({ titel, children }) {
  return (
    <FouwDoos
      altijdOpen={true}
      titel={titel}
      style={{
        right: 0,
        zIndex: 5,
        position: "absolute",
        marginTop: 40
      }}
    >
      {children}
    </FouwDoos>
  );
}

export function FouwOpties({ titel, opties, onChangeText }) {
  return (
    <FouwDropDown titel={titel}>
      {opties &&
        opties.map((optie) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
                alignItems: "center",
                padding: 5
              }}
              key={optie}
              onPress={() => onChangeText(optie)}
            >
              <Text>{optie}</Text>
            </TouchableOpacity>
          );
        })}
    </FouwDropDown>
  );
}
