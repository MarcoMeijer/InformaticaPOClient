import * as React from "react";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";


export function ToevoegenKnop(props) {
  return <TouchableOpacity {...props}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-plus-circle"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <Path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
    </Svg>
  </TouchableOpacity>;
}

export function EditKnop(props) {
  return <TouchableOpacity {...props}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-pencil"
      viewBox="0 0 16 16"
    >
      <Path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z" />
    </Svg>
  </TouchableOpacity>;
}

export function VerwijderKnop(props) {
  return <TouchableOpacity {...props}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-trash"
      viewBox="0 0 16 16"
    >
      <Path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
      <Path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </Svg>
  </TouchableOpacity>;
}

export function FouwKnop(props) {
  const [open, zetOpen2] = useState( false );
  const { zetOpen } = props;

  useEffect(() => {
    if(zetOpen) zetOpen(open);
  }, [open]);

  return (
    <TouchableOpacity
      onPress={() => zetOpen2(!open)}
      {...props}
    >
      {
        open ?
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="prefix__bi prefix__bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <Path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
          />
        </Svg> :
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="prefix__bi prefix__bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <Path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
          />
        </Svg>
      }
    </TouchableOpacity>
  )
}