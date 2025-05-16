export default function Media(json) {
  if (!json) {
    return;
  }
  const totalEdad = json.map((elem) => {
    if (elem && typeof value !== "number") {
      return elem.edad;
    }
  });
  return totalEdad.reduce((a, b) => a + b, 0) / totalEdad.length;
}
