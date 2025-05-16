function transformarPalabra(palabra) {
  return palabra
    .replace(/ /g, "")
    .replace(/,/g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split("")
    .sort()
    .join("");
}
export default function Anagrama(palabra1, palabra2) {
  let firstWord = transformarPalabra(palabra1);

  let secondWord = transformarPalabra(palabra2);

  return firstWord === secondWord ? "Sí" : "No";
}
