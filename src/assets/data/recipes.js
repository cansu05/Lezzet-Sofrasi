import productImg01 from "../../assets/images/waffle.jpg";
import productImg02 from "../../assets/images/pancake.jpg";
import productImg03 from "../../assets/images/hot-chocolate.jpg";

import productImg04 from "../../assets/images/donut.jpg";
import productImg05 from "../../assets/images/yulaf.jpg";
import productImg06 from "../../assets/images/cookie.jpg";

const recipes = [
  {
    id: "01",
    recipeName: "Waffle",
    imgUrl: productImg01,
    category: "favorite",
    shortDesc: "Sabahları arkadaşlarla yemek için güzel bir tarif.",
  },

  {
    id: "02",
    recipeName: "Pankek",
    imgUrl: productImg02,
    category: "favorite",
    shortDesc: "Sabahları arkadaşlarla yemek için güzel bir tarif.",
  },

  {
    id: "03",
    recipeName: "Sıcak çikolata",
    imgUrl: productImg03,
    category: "favorite",
    shortDesc: "Sabahları arkadaşlarla yemek için güzel bir tarif.",
  },

  {
    id: "04",
    recipeName: "Tatlı Çörek",
    imgUrl: productImg04,
    category: "latest",
    shortDesc:
      "Yumuşacık hamuru ve lezzetli sosları ile dayanılmaz ev yapımı donutlar.",
  },

  {
    id: "05",
    recipeName: "Mısır gevreği",
    imgUrl: productImg05,
    category: "latest",
    shortDesc:
      "Gevrek ve lezzetli mısır gevreği, kahvaltı veya hızlı bir atıştırmalık için mükemmeldir. Güne enerjik başlamak için lezzetli ve besleyici bir seçenek.",
  },

  {
    id: "06",
    recipeName: "Kurabiye",
    imgUrl: productImg06,
    category: "latest",
    shortDesc: "Yumuşacık hamuru ve bol çikolata parçalarıyla karşı konulamaz ev yapımı kurabiyeler.",
  },
];

export default recipes;
