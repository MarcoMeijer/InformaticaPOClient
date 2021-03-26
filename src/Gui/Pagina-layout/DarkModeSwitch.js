import { useTheme } from "@react-navigation/native";
import { Switch, View } from "react-native";
import { Svg, Path } from "react-native-svg/src/ReactNativeSVG.web";

export default function DarkModeSwitch(props) {
  const { darkMode, zetDarkMode } = useTheme();

  return (
    <View {...props} style={{ flexDirection: "row", alignItems: "center" }}>
      {darkMode ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="#ddd"
          className="prefix__bi prefix__bi-moon"
          viewBox="0 0 16 16"
          {...props}
        >
          <Path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278zM4.858 1.311A7.269 7.269 0 001.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 005.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="prefix__bi prefix__bi-brightness-high"
          viewBox="0 0 16 16"
          {...props}
        >
          <Path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
        </Svg>
      )}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        activeThumbColor={"#fff"}
        thumbColor={darkMode ? "#bbb" : "#bbb"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          zetDarkMode(!darkMode);
        }}
        style={{ margin: 10 }}
        value={!darkMode}
      />
    </View>
  );
}
