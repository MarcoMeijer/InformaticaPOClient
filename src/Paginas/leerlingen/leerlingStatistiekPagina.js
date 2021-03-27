import * as React from "react";
import Jacket from "../../Gui/Pagina-layout/Jacket";
import LeerlingStatistiek from "./statistiek/LeerlingStatistiek";

export default function LeerlingStatistiekPagina() {
  return (
    <Jacket
      width={500}
      height={1000}
    >
      <LeerlingStatistiek/>
    </Jacket>
  );
}
