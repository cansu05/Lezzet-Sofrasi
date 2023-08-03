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
    ingredients: [
      "2 su bardağı (chá) farinha de trigo",
      "2 yemek kaşığı (sopa) şeker",
      "2 çay kaşığı (chá) kabartma tozu",
      "½ çay kaşığı tuz",
      "2 yemek kaşığı mısır nişastası (amido de milho)",
      "3 adet çırpılmış yumurta",
      "4 yemek kaşığı tuzsuz eritilmiş tereyağı",
      "1 su bardağı + ¾ su bardağı (chá) süt",
      "1 yemek kaşığı (sopa) vanilya özütü",
    ],
    preparation: [
      "Bir kaba unu, şekeri, nişastayı, kabartma tozunu ve tuzu eleyerek koyun. Kenara alın.",
      "Başka bir kaptaki çırpılmış yumurtaları, sütü, eritilmiş tereyağını ve vanilya özütünü karıştırın.",
      "Karışımı una dökün ve hızlıca malzemeleri bir araya getirin.",
      "Waffle makinesini ısıtın. Bir kepçe dolusu hamuru dökün ve makine yüzeyini kaplayacak şekilde yayın. Kapağı kapatın ve hamur iyice kızarana kadar pişirin.",
      "Silikon spatula ile çıkarın. Bal, meyve veya reçel ile servis yapın.",
    ],
    additionalInfo:
      "Arkadaşlarınızla sabahları keyifli bir şekilde tüketmek için harika :D",
  },

  {
    id: "02",
    recipeName: "Pankek",
    imgUrl: productImg02,
    category: "favorite",
    shortDesc: "Sabahları arkadaşlarla yemek için güzel bir tarif.",
    ingredients: [
      "1 su bardağı + ½ su bardağı un",
      "3 yemek kaşığı şeker",
      "1 yemek kaşığı kabartma tozu",
      "½ çay kaşığı tuz",
      "1 su bardağı + ¼ su bardağı süt",
      "1 adet yumurta",
      "3 yemek kaşığı eritilmiş tereyağı",
      "Bitkisel yağ tavayı yağlamak için",
      "İsteğe bağlı kaplamalar akçaağaç şurubu, taze meyveler, krem şanti vb.",
    ],
    preparation: [
      "Büyük bir kase içinde unu, şekeri, kabartma tozunu ve tuzu karıştırın.",
      "Başka bir kasede sütü, yumurtayı ve eritilmiş tereyağını homojen bir karışım elde edene kadar çırpın.",
      "Sıvı karışımı, kuru malzemelerin bulunduğu kaba dökün. Bir kaşık veya çırpıcı yardımıyla malzemelerin sadece karıştığı bir noktaya gelene kadar nazikçe karıştırın. Fazla karıştırmaktan kaçının, çünkü bu pankekleri ağırlaştırabilir.",
      "Anti yapışkan tavayı orta ateşte ısıtın. Tavayı hafifçe bitkisel yağ ile yağlayın.",
      "Her bir pankek için yaklaşık ¼ su bardağı hamur kullanın. Sıcak tavaya hamuru dökün ve hafifçe yayarak yuvarlak bir pankek oluşturun.",
      "Pankek yüzeyinde küçük kabarcıklar belirip kenarları hafifçe kızarana kadar pişirin. Bu yaklaşık 2-3 dakika sürer.",
      "Pankeki bir spatula ile çevirin ve 1-2 dakika daha pişirin, veya tamamen kızarana kadar.",
      "Pankeki bir tabağa aktarın ve geri kalan hamur ile işlemi tekrarlayın.",
      "Sıcak pankekleri akçaağaç şurubu, taze meyveler, krem şanti vb. gibi istediğiniz kaplamalarla servis yapın.",
    ],
    additionalInfo:
      "Bu tarif yaklaşık olarak 8 orta boy pankek elde eder. Pankeklerin boyutunu tercihinize göre ayarlayabilirsiniz. Amerikan tarzı pankeklerinizi keyifle tüketin!",
  },

  {
    id: "03",
    recipeName: "Sıcak çikolata",
    imgUrl: productImg03,
    category: "favorite",
    shortDesc: "Sabahları arkadaşlarla yemek için güzel bir tarif.",
    ingredients: [
      "2 su bardağı süt",
      "½ su bardağı kakao",
      "2 yemek kaşığı şeker (isteğe bağlı olarak)",
      "½ çay kaşığı vanilya özütü",
      "Bir tutam tuz",
      "Krem şanti (isteğe bağlı)",
      "Rendelenmiş çikolata (isteğe bağlı)",
    ],
    preparation: [
      "Bir tencerede, sütü orta ateşte kaynamaya başlayana kadar ısıtın. Sütün tencerenin dibine yapışmaması için ara sıra karıştırın.",
      "Sıcak sütün içine kakao, şeker ve tuzu ekleyin. Kakao ve şeker tamamen çözünene kadar iyi bir şekilde karıştırın.",
      "Ocağın ısısını orta-düşük seviyeye indirin ve sıcak çikolatayı yaklaşık 2-3 dakika boyunca sürekli karıştırarak kaynatın. Bu, içeceğin hafifçe koyulaşmasına yardımcı olacaktır.",
      "Tencereyi ocaktan alın ve vanilya özütünü ekleyin. İyice karıştırın.",
      "Sıcak çikolatayı kuplara veya bardaklara dökün. İsteğe bağlı olarak üzerine krem şanti ekleyin ve rendelenmiş çikolata serpin.",
      "Hemen servis yapın ve lezzetli sıcak çikolatanın tadını çıkarın!",
    ],
    additionalInfo:
      "Şeker miktarını kişisel tercihinize göre ayarlayabileceğinizi unutmayın. Ayrıca, sıcak çikolatanıza ekstra bir lezzet katmak için tarçın tozu veya marshmallow gibi diğer malzemeleri de ekleyebilirsiniz.",
  },

  {
    id: "04",
    recipeName: "Tatlı Çörek",
    imgUrl: productImg04,
    category: "latest",
    shortDesc:
      "Yumuşacık hamuru ve lezzetli sosları ile dayanılmaz ev yapımı donutlar.",
    ingredients: [
      "2 su bardağı süt",
      "½ su bardağı kakao",
      "2 yemek kaşığı şeker (isteğe bağlı olarak)",
      "½ çay kaşığı vanilya özütü",
      "Bir tutam tuz",
      "Krem şanti (isteğe bağlı)",
      "Rendelenmiş çikolata (isteğe bağlı)",
    ],
    preparation: [
      "Bir tencerede, sütü orta ateşte kaynamaya başlayana kadar ısıtın. Sütün tencerenin dibine yapışmaması için ara sıra karıştırın.",
      "Sıcak sütün içine kakao, şeker ve tuzu ekleyin. Kakao ve şeker tamamen çözünene kadar iyi bir şekilde karıştırın.",
      "Ocağın ısısını orta-düşük seviyeye indirin ve sıcak çikolatayı yaklaşık 2-3 dakika boyunca sürekli karıştırarak kaynatın. Bu, içeceğin hafifçe koyulaşmasına yardımcı olacaktır.",
      "Tencereyi ocaktan alın ve vanilya özütünü ekleyin. İyice karıştırın.",
      "Sıcak çikolatayı kuplara veya bardaklara dökün. İsteğe bağlı olarak üzerine krem şanti ekleyin ve rendelenmiş çikolata serpin.",
      "Hemen servis yapın ve lezzetli sıcak çikolatanın tadını çıkarın!",
    ],
    additionalInfo:
      "Şeker miktarını kişisel tercihinize göre ayarlayabileceğinizi unutmayın. Ayrıca, sıcak çikolatanıza ekstra bir lezzet katmak için tarçın tozu veya marshmallow gibi diğer malzemeleri de ekleyebilirsiniz.",
  },

  {
    id: "05",
    recipeName: "Mısır gevreği",
    imgUrl: productImg05,
    category: "latest",
    shortDesc:
      "Gevrek ve lezzetli mısır gevreği, kahvaltı veya hızlı bir atıştırmalık için mükemmeldir. Güne enerjik başlamak için lezzetli ve besleyici bir seçenek.",
      ingredients: [
        "2 su bardağı süt",
        "½ su bardağı kakao",
        "2 yemek kaşığı şeker (isteğe bağlı olarak)",
        "½ çay kaşığı vanilya özütü",
        "Bir tutam tuz",
        "Krem şanti (isteğe bağlı)",
        "Rendelenmiş çikolata (isteğe bağlı)",
      ],
      preparation: [
        "Bir tencerede, sütü orta ateşte kaynamaya başlayana kadar ısıtın. Sütün tencerenin dibine yapışmaması için ara sıra karıştırın.",
        "Sıcak sütün içine kakao, şeker ve tuzu ekleyin. Kakao ve şeker tamamen çözünene kadar iyi bir şekilde karıştırın.",
        "Ocağın ısısını orta-düşük seviyeye indirin ve sıcak çikolatayı yaklaşık 2-3 dakika boyunca sürekli karıştırarak kaynatın. Bu, içeceğin hafifçe koyulaşmasına yardımcı olacaktır.",
        "Tencereyi ocaktan alın ve vanilya özütünü ekleyin. İyice karıştırın.",
        "Sıcak çikolatayı kuplara veya bardaklara dökün. İsteğe bağlı olarak üzerine krem şanti ekleyin ve rendelenmiş çikolata serpin.",
        "Hemen servis yapın ve lezzetli sıcak çikolatanın tadını çıkarın!",
      ],
      additionalInfo:
        "Şeker miktarını kişisel tercihinize göre ayarlayabileceğinizi unutmayın. Ayrıca, sıcak çikolatanıza ekstra bir lezzet katmak için tarçın tozu veya marshmallow gibi diğer malzemeleri de ekleyebilirsiniz.",
  },

  {
    id: "06",
    recipeName: "Kurabiye",
    imgUrl: productImg06,
    category: "latest",
    shortDesc:
      "Yumuşacık hamuru ve bol çikolata parçalarıyla karşı konulamaz ev yapımı kurabiyeler.",
    ingredients: [
      "2 su bardağı süt",
      "½ su bardağı kakao",
      "2 yemek kaşığı şeker (isteğe bağlı olarak)",
      "½ çay kaşığı vanilya özütü",
      "Bir tutam tuz",
      "Krem şanti (isteğe bağlı)",
      "Rendelenmiş çikolata (isteğe bağlı)",
    ],
    preparation: [
      "Bir tencerede, sütü orta ateşte kaynamaya başlayana kadar ısıtın. Sütün tencerenin dibine yapışmaması için ara sıra karıştırın.",
      "Sıcak sütün içine kakao, şeker ve tuzu ekleyin. Kakao ve şeker tamamen çözünene kadar iyi bir şekilde karıştırın.",
      "Ocağın ısısını orta-düşük seviyeye indirin ve sıcak çikolatayı yaklaşık 2-3 dakika boyunca sürekli karıştırarak kaynatın. Bu, içeceğin hafifçe koyulaşmasına yardımcı olacaktır.",
      "Tencereyi ocaktan alın ve vanilya özütünü ekleyin. İyice karıştırın.",
      "Sıcak çikolatayı kuplara veya bardaklara dökün. İsteğe bağlı olarak üzerine krem şanti ekleyin ve rendelenmiş çikolata serpin.",
      "Hemen servis yapın ve lezzetli sıcak çikolatanın tadını çıkarın!",
    ],
    additionalInfo:
      "Şeker miktarını kişisel tercihinize göre ayarlayabileceğinizi unutmayın. Ayrıca, sıcak çikolatanıza ekstra bir lezzet katmak için tarçın tozu veya marshmallow gibi diğer malzemeleri de ekleyebilirsiniz.",
  },
];

export default recipes;
