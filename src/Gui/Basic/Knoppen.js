import * as React from "react";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Path, Svg } from "svgs";
import { CheckIcoon } from "./Icoontjes";

export function AnnuleerKnop(props) {
  let { size } = props;
  if (size === undefined) size = 16;

  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="prefix__bi prefix__bi-x"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function CheckKnop(props) {
  return (
    <TouchableOpacity {...props}>
      <CheckIcoon />
    </TouchableOpacity>
  );
}

export function UitlogKnop(props) {
  let { size } = props;
  if (size === undefined) size = 16;

  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        className="prefix__bi prefix__bi-box-arrow-right"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path
          fillRule="evenodd"
          d="M10 12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 001 0v-2A1.5 1.5 0 009.5 2h-8A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h8a1.5 1.5 0 001.5-1.5v-2a.5.5 0 00-1 0v2z"
        />
        <Path
          fillRule="evenodd"
          d="M15.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L14.293 7.5H5.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export function InfoKnop(props) {
  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="prefix__bi prefix__bi-info-circle"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
        <Path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 11-2 0 1 1 0 012 0z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function AfbeeldingKnop(props) {
  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="prefix__bi prefix__bi-image"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M6.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <Path d="M2.002 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12zm12 1a1 1 0 011 1v6.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12V3a1 1 0 011-1h12z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function ConfiguratieKnop(props) {
  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="prefix__bi prefix__bi-gear"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M8 4.754a3.246 3.246 0 100 6.492 3.246 3.246 0 000-6.492zM5.754 8a2.246 2.246 0 114.492 0 2.246 2.246 0 01-4.492 0z" />
        <Path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 01-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 01-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 01.52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 011.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 011.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 01.52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 01-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 01-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 002.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 001.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 00-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 00-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 00-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 001.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 003.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 002.692-1.115l.094-.319z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function SluitKnop(props) {
  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="prefix__bi prefix__bi-x-circle"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
        <Path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function ToevoegenKnop(props) {
  let { size } = props;
  if (size === undefined) size = 16;

  return (
    <TouchableOpacity {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        className="prefix__bi prefix__bi-plus-circle"
        viewBox="0 0 16 16"
        {...props}
      >
        <Path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
        <Path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
      </Svg>
    </TouchableOpacity>
  );
}

export function EditKnop(props) {
  return (
    <TouchableOpacity {...props}>
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
    </TouchableOpacity>
  );
}

export function VerwijderKnop(props) {
  return (
    <TouchableOpacity {...props}>
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
    </TouchableOpacity>
  );
}

export function FouwKnop(props) {
  const [open, zetOpen2] = useState(props.value);
  const { zetOpen } = props;

  useEffect(() => {
    if (zetOpen) zetOpen(open);
  }, [open]);

  return (
    <TouchableOpacity onPress={() => zetOpen2(!open)} {...props}>
      {open ? (
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
        </Svg>
      ) : (
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
      )}
    </TouchableOpacity>
  );
}
