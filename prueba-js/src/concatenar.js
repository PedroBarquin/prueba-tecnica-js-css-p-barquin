function estandarizarNombre(valorNombre) {
  if (!valorNombre) {
    return "";
  }
  return valorNombre.toLowerCase().replace(/^./, (char) => char.toUpperCase());
}

export default function concatenarNombres(json) {
  return json.map((name) => {
    const nombre = estandarizarNombre(name?.nombre);
    const apellido1 = estandarizarNombre(name?.apellido);
    const apellido2 = estandarizarNombre(name?.apellido2);
    return `${nombre} ${apellido1}` + (apellido2 ? ` ${apellido2}` : "");
  });
}
