import Text from "../../../Gui/Basic/Text";

export default function TekstEditorTips() {
  return <Text>
    {"\u2022"} Text <b>dikgedrukt</b> maken: <br /> {`<b> text </b>`}{" "}
    <br /> <br />
    {"\u2022"} Text <i>schuingedrukt</i> maken:
    <br /> {`<i> text </i>`} <br /> <br />
    {"\u2022"} Paragraaf maken: <br /> {`<p> text </p>`} <br />
    <br /> De titel is automatisch dikgedrukt.
  </Text>
}