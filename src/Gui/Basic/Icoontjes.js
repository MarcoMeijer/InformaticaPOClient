import { Path, Svg } from "svgs";
import { useTheme } from "@react-navigation/native";

export function LeegIcoon(props) {
  const { colors } = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor" //{colors.tekstKleur}
      className="prefix__bi prefix__bi-check2"
      viewBox="0 0 16 16"
      {...props}
    ></Svg>
  );
}

export function CheckIcoon(props) {
  const { colors } = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor" //{colors.tekstKleur}
      className="prefix__bi prefix__bi-check2"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
    </Svg>
  );
}
