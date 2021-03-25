import Pagina from "../../../Gui/Pagina-layout/Pagina";
import useFetch from "../../../Hooks/useFetch";

export default function EditVraagSoortenPagina() {
  const [vraagSoorten] = useFetch();

  return <Pagina></Pagina>;
}
