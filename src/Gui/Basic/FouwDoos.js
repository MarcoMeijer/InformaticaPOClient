import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { AfbeeldingKnop, EditKnop, FouwKnop, VerwijderKnop } from "./Knoppen";
import Text from "./Text";


export default function FouwDoos({style, altijdOpen, lazy, titel, children, onEdit, onPicture, onDelete}) {
  const [open, zetOpen] = useState(altijdOpen);
  const {colors} = useTheme();

  return <View style={style}>
    <View style={{
      backgroundColor: colors.textboxAchtergrondKleur,
      margin: 1,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#aaa"
    }}>
      <View style={[{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e8f6f6",
        borderRadius: 10
      }, open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 3,
      }]}>
        {
          altijdOpen ||
          <FouwKnop
            style={{ margin: 10 }}
            zetOpen={zetOpen}
          />
        }
        <Text style={{margin: 5, flex: 1}}>{titel}</Text>
        {
          onEdit &&
          <EditKnop
            style={{ margin: 5 }}
            onPress={onEdit}
          />
        }
        {
          onPicture &&
          <AfbeeldingKnop
            style={{ margin: 5 }}
            onPress={onPicture}
          />
        }
        {
          onDelete &&
          <VerwijderKnop
            style={{ margin: 5 }}
            onPress={onDelete}
          />
        }
      </View>
      {
        lazy ?
        (open &&
          <View
            style={{ padding: 6}}
          >
            {children}
          </View>)
        :
        <View
          style={[{ padding: 6 }, open ? {} : {display: "none"}]}
        >
          {children}
        </View>
      }
    </View>
  </View>;
}