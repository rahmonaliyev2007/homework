
function ProductCard(title) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="yeah"></div>
  `;
  return div;
}

export default ProductCard;

export const headerLinks = ["<img src='./images/haftaTovarlari.png' alt='weekly'> Hafta tovarlari", "Elektronika", "Maishiy Texnika","Kiyim","Poyabzallar","Aksessuarlar","Go'zallik va Parvarish","Salomatlik","Uy-ro'zg'or buyumlari","Qurilish va ta'mirlash"]