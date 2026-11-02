// Hastalık / zararlı / bakım sorunu içerikleri. Sayfalar bu veriden statik üretilir.
// tur: "hastalik" | "zararli" | "bakim"
export const HASTALIKLAR = [
  {
    slug: "yaprak-ucu-kurumasi",
    ad: "Yaprak Ucu Kuruması",
    tur: "bakim",
    ozet: "Yaprakların uçlarında ve kenarlarında kahverengi, kuru, kağıt gibi kısımlar oluşur. Çoğu zaman hastalık değil, bakım kaynaklı bir stres işaretidir.",
    belirtiler: [
      "Yaprak ucu veya kenarı kahverengiye döner ve kurur.",
      "Kuruyan kısımla yeşil kısım arasında net bir sınır vardır, bazen sarı bir halka görülür.",
      "Sorun genellikle önce eski yapraklarda başlar.",
    ],
    nedenler: [
      "Havanın çok kuru olması (kalorifer, klima).",
      "Düzensiz sulama: toprağın tamamen kuruyup sonra aşırı sulanması.",
      "Musluk suyundaki klor ve tuzların birikmesi.",
      "Fazla gübre, toprakta tuz birikimi.",
      "Saksının kök için küçük kalması.",
    ],
    cozum: [
      "Kuru kısımları temiz makasla, yaprağın doğal şeklini koruyacak biçimde kesin.",
      "Suyu bir gün dinlendirip kullanın ya da süzülmüş su tercih edin.",
      "Toprağı üst 2-3 cm kuruyunca sulayın, saksı altından su akana kadar verip fazlasını boşaltın.",
      "Ayda bir toprağı bol suyla yıkayarak biriken tuzu uzaklaştırın.",
      "Bitkiyi radyatör ve klima akımından uzaklaştırın, çevresinde nem artırın.",
    ],
    onleme: [
      "Sulamayı takvime değil toprağın durumuna göre yapın.",
      "Gübreyi üretici dozunun yarısıyla başlayın ve büyüme mevsiminde kullanın.",
      "Kökler saksıyı doldurduysa bir numara büyük saksıya alın.",
    ],
    etkilenen: ["Dracaena", "Spathiphyllum (barış çiçeği)", "Kaplan dili", "Kalatya", "Areka palmiyesi"],
    sss: [
      {
        s: "Kuruyan uç yeniden yeşillenir mi?",
        c: "Hayır. Ölen doku geri dönmez. Sorun giderilirse yeni çıkan yapraklar sağlıklı olur. Estetik için kuru kısmı kesebilirsiniz.",
      },
      {
        s: "Yaprak ucu kuruması bulaşıcı mı?",
        c: "Bakım kaynaklıysa bulaşıcı değildir. Ancak lekeler yumuşak, sulu ya da halkalıysa mantar kaynaklı olabilir; bu durumda başka bir sayfaya bakın.",
      },
    ],
  },
  {
    slug: "yaprak-sararmasi",
    ad: "Yaprak Sararması",
    tur: "bakim",
    ozet: "Yaprakların yeşilini kaybedip sararması, bitkinin en sık verdiği uyarıdır. Neden çoğu zaman sulama, ışık ya da besin dengesindedir.",
    belirtiler: [
      "Alt ve eski yapraklar sararır, sonra dökülür (aşırı sulama veya doğal yaşlanma).",
      "Yeni yapraklar soluk sarı çıkar, damarlar yeşil kalır (demir veya besin eksikliği).",
      "Yaprak tümüyle sararır ve toprak sürekli ıslaktır (kök boğulması).",
    ],
    nedenler: [
      "Aşırı sulama ve kötü drenaj.",
      "Yetersiz ışık.",
      "Azot, demir veya magnezyum eksikliği.",
      "Ani yer değişikliği veya sıcaklık şoku.",
      "Kök çürümesi ya da zararlılar.",
    ],
    cozum: [
      "Önce toprağı parmakla kontrol edin: sürekli ıslaksa sulamayı durdurun ve toprağın kurumasını bekleyin.",
      "Saksının altında drenaj deliği olduğundan ve tabaktaki suyun boşaltıldığından emin olun.",
      "Bitkiyi daha aydınlık ama doğrudan öğle güneşi almayan bir yere alın.",
      "Damarlar yeşil kalıp yaprak sararıyorsa dengeli bir sıvı gübre ya da demir içeren bir takviye verin.",
      "Toprak kokuyorsa ya da kök kahverengiyse kök çürümesi sayfasına bakın.",
    ],
    onleme: [
      "Bitkiye uygun sulama aralığını öğrenin; her bitki aynı sıklıkta sulanmaz.",
      "Drenajlı saksı ve hafif, iyi su tutan ama havalı bir toprak karışımı kullanın.",
    ],
    etkilenen: ["Pothos", "Ficus", "Monstera", "Orkide", "Fikus lirata"],
    sss: [
      {
        s: "Sararan yaprağı koparmalı mıyım?",
        c: "Tamamen sararmış yaprak geri yeşillenmez; bitki enerji harcamasın diye temiz bir makasla kesebilirsiniz. Kısmen sarı olanları kesmek için acele etmeyin.",
      },
      {
        s: "Sararma aşırı sulamadan mı susuzluktan mı?",
        c: "Aşırı sulamada yapraklar yumuşak ve sarıdır, toprak ıslaktır. Susuzlukta yapraklar kurur, kıvrılır ve toprak çatlar.",
      },
    ],
  },
  {
    slug: "kok-curumesi",
    ad: "Kök Çürümesi",
    tur: "hastalik",
    ozet: "Aşırı su ve havasız toprak yüzünden köklerin kahverengileşip çürümesidir. Hızlı müdahale edilmezse bitkiyi öldürür.",
    belirtiler: [
      "Toprağa rağmen yapraklar solar ve sarararak düşer.",
      "Toprak yüzeyi ve saksı kötü, bataklık gibi kokar.",
      "Kökler kahverengi-siyah, yumuşak ve sümüksüdür; sağlıklı kök beyaz-krem ve serttir.",
      "Gövdenin toprağa yakın kısmı yumuşar.",
    ],
    nedenler: [
      "Çok sık sulama ya da drenaj deliği olmayan saksı.",
      "Su tutan ağır toprak.",
      "Saksı tabağında bekleyen su.",
      "Soğuk ortamda sulama.",
    ],
    cozum: [
      "Bitkiyi saksıdan çıkarıp eski toprağı kökten nazikçe silkeleyin.",
      "Yumuşak, kahverengi ve kokulu tüm kökleri temiz, dezenfekte edilmiş makasla kesin.",
      "Sağlıklı kökleri akan suyla yıkayın, gerekiyorsa bitki için uygun bir fungisitle kısaca bekletin (ambalajdaki talimata uyun).",
      "Yeni, taze ve drenajlı toprakla; eski saksıyı iyice yıkayarak ya da yeni saksıyla yeniden dikin.",
      "Birkaç gün sulamayın, sonra çok ölçülü sulayın.",
    ],
    onleme: [
      "Her zaman delikli saksı kullanın.",
      "Toprağa perlit ya da iri kum katarak drenajı artırın.",
      "Tabaktaki suyu 15-20 dakika sonra boşaltın.",
    ],
    etkilenen: ["Orkide", "Sukulentler", "Ficus", "Kaktüs", "Dolar bitkisi (ZZ)"],
    sss: [
      {
        s: "Kök çürümüş bitki kurtarılabilir mi?",
        c: "Kökün yarısından fazlası sağlıklıysa şansı yüksektir. Hiç sağlam kök kalmadıysa gövdeden çelik alarak yeni bitki elde etmeyi deneyebilirsiniz.",
      },
      {
        s: "Kök çürümesi başka bitkilere bulaşır mı?",
        c: "Mantar kaynaklıysa aynı toprağı ve aletleri paylaşırsanız bulaşabilir. Makası dezenfekte edin ve eski toprağı başka saksıda kullanmayın.",
      },
    ],
  },
  {
    slug: "unlu-bit",
    ad: "Unlu Bit",
    tur: "zararli",
    ozet: "Yaprak koltuklarında ve gövdede pamuk gibi beyaz tüylü kümeler oluşturan, bitki özsuyunu emen küçük bir zararlıdır.",
    belirtiler: [
      "Yaprak koltuklarında, gövdede ve yaprak altında pamuk benzeri beyaz kümeler.",
      "Yapışkan bir tabaka (balımsı salgı) ve üzerinde kara küf.",
      "Yaprakların sararması, kıvrılması ve büyümenin durması.",
    ],
    nedenler: [
      "Yeni alınan, kontrol edilmeden evdeki bitkilerin yanına konan bitki.",
      "Sıcak, kuru ve havalanmayan ortam.",
      "Aşırı azotlu gübre.",
    ],
    cozum: [
      "Enfekte bitkiyi diğerlerinden hemen ayırın.",
      "Bitler az ise %70'lik izopropil alkole batırılmış pamuklu çubukla tek tek silin.",
      "Bitkiyi duşta nazikçe yıkayın, ardından neem yağı ya da zararlı sabunu (sıvı sabun bazlı bitki sabunu) uygulayın.",
      "Uygulamayı 7-10 günde bir, en az 3-4 hafta tekrarlayın; yumurtalar sonradan çıkar.",
      "Yaygın istilada ruhsatlı bir böcek ilacı ve ambalaj talimatı kullanın.",
    ],
    onleme: [
      "Yeni bitkileri 2 hafta ayrı yerde gözlemleyin.",
      "Yaprak altlarını düzenli kontrol edin.",
    ],
    etkilenen: ["Kaktüs", "Sukulentler", "Orkide", "Kalanşo", "Hoya"],
    sss: [
      {
        s: "Unlu bit tamamen yok olur mu?",
        c: "Evet, ama tek seferde değil. Yumurtalar kuluçkadan çıktığı için en az 3-4 hafta düzenli uygulama gerekir.",
      },
      {
        s: "Unlu bit insanlara veya evcil hayvanlara zararlı mı?",
        c: "Hayır, ama kullandığınız ilaçlar olabilir. Ambalaj talimatını izleyin ve uygulama sonrası hayvanları bitkiden uzak tutun.",
      },
    ],
  },
  {
    slug: "kirmizi-orumcek",
    ad: "Kırmızı Örümcek (Akar)",
    tur: "zararli",
    ozet: "Gözle zor görülen, yaprak altında yaşayan çok küçük bir akardır. Kuru ve sıcak ortamda hızla çoğalır.",
    belirtiler: [
      "Yaprakta çok küçük sarı-beyaz noktalar (benekler).",
      "Yaprak altında ya da yaprak koltuğunda ince ağlar.",
      "Yaprağın soluk, bronz ya da gri görünmesi ve dökülmesi.",
    ],
    nedenler: [
      "Düşük nem ve sıcak hava.",
      "Kalorifer ya da sıcak, kapalı ortam.",
      "Zayıf hava dolaşımı.",
    ],
    cozum: [
      "Bitkiyi ayırın ve yaprak altlarını güçlü ama nazik bir su ile yıkayın.",
      "Neem yağı ya da zararlı sabunuyla yaprak altlarını da kapsayacak biçimde püskürtün.",
      "Uygulamayı 5-7 günde bir en az 3 kez tekrarlayın.",
      "Çevre nemini artırın; akarlar nemli ortamı sevmez.",
      "İstila şiddetliyse akarlara karşı ruhsatlı bir akarisit kullanın.",
    ],
    onleme: [
      "Yapraklara arada su püskürtün (hastalığa uygun olan bitkilerde).",
      "Bitkiler arasında hava dolaşımı bırakın.",
    ],
    etkilenen: ["Kalatya", "Areka palmiyesi", "Fikus", "Gül", "Sardunya"],
    sss: [
      {
        s: "Akarları çıplak gözle görebilir miyim?",
        c: "Çok zor. Yaprağın altını beyaz bir kağıda silkerek bakarsanız hareket eden küçük noktalar görebilirsiniz. Ağ ve benekler en belirgin işarettir.",
      },
    ],
  },
  {
    slug: "yaprak-biti",
    ad: "Yaprak Biti (Afit)",
    tur: "zararli",
    ozet: "Yeşil, siyah ya da kahverengi renkli, yumuşak gövdeli küçük böceklerdir; taze sürgünlerde ve tomurcuklarda kümelenirler.",
    belirtiler: [
      "Taze sürgün ve tomurcuklarda küçük böcek kümeleri.",
      "Yapışkan balımsı salgı, üzerinde kara küf.",
      "Yeni yaprakların deforme olması, kıvrılması.",
    ],
    nedenler: [
      "Dışarıdan gelen böcekler, açık pencere.",
      "Aşırı azotlu gübreleme ve yumuşak, sulu sürgünler.",
    ],
    cozum: [
      "Bitkiyi duşa tutarak ya da nemli bezle böcekleri uzaklaştırın.",
      "Zararlı sabunu veya seyreltilmiş neem yağını yaprak altları dahil püskürtün.",
      "Uygulamayı 5-7 günde bir tekrarlayın.",
      "Gerekirse sistemik, ruhsatlı bir böcek ilacı kullanın ve talimata uyun.",
    ],
    onleme: [
      "Yeni sürgünleri düzenli kontrol edin.",
      "Fazla azotlu gübreden kaçının.",
    ],
    etkilenen: ["Gül", "Hibiscus", "Fikus", "Sardunya", "Kalanşo"],
    sss: [
      {
        s: "Yaprak biti çiçek ve meyveye zarar verir mi?",
        c: "Evet, özsuyu emerek tomurcukların açılmasını engelleyebilir ve sürgünleri zayıflatabilir.",
      },
    ],
  },
  {
    slug: "kulleme",
    ad: "Külleme (Beyaz Küf)",
    tur: "hastalik",
    ozet: "Yaprak yüzeyinde un serpilmiş gibi beyaz-gri bir toz tabakası oluşturan mantar hastalığıdır.",
    belirtiler: [
      "Yaprak üstünde beyaz-gri, un benzeri leke ya da tabaka.",
      "Zamanla yaprak sararır, kıvrılır ve kurur.",
      "Taze sürgün ve tomurcuklarda da görülebilir.",
    ],
    nedenler: [
      "Durağan, nemli ve havasız ortam.",
      "Gündüz ılık, gece serin sıcaklık farkı.",
      "Bitkilerin birbirine çok yakın durması.",
    ],
    cozum: [
      "Hastalıklı yaprakları kesin ve çöpe atın, kompost yapmayın.",
      "Bitkiyi diğerlerinden ayırın, hava dolaşımını artırın.",
      "Neem yağı ya da küllemeye karşı ruhsatlı bir fungisit uygulayın.",
      "Yapraklara su püskürtmeyin, sulamayı toprağa yapın.",
    ],
    onleme: [
      "Bitkiler arasında boşluk bırakın.",
      "Yaprakları ıslak bırakmayın.",
    ],
    etkilenen: ["Begonya", "Gül", "Afrika menekşesi", "Kalanşo", "Sardunya"],
    sss: [
      {
        s: "Külleme ile unlu bit karışır mı?",
        c: "Evet, ilk bakışta benzerler. Külleme düz bir toz tabakasıdır ve silinince dağılır; unlu bit ise pamuk gibi, yığılı kümelerdir.",
      },
    ],
  },
  {
    slug: "yaprak-lekesi",
    ad: "Yaprak Lekesi",
    tur: "hastalik",
    ozet: "Yaprakta kahverengi, siyah ya da sarı halkalı lekeler oluşturan mantar ve bakteri kaynaklı hastalıklardır.",
    belirtiler: [
      "Kahverengi-siyah, çevresi sarı halkalı lekeler.",
      "Lekeler büyüyüp birleşebilir ve yaprak dökülebilir.",
      "Bakteriyel lekelerde yağlı, sulu bir görünüm olur.",
    ],
    nedenler: [
      "Yaprakları ıslatan sulama ve yüksek nem.",
      "Havasız ortam ve birbirine temas eden yapraklar.",
      "Dökülmüş hastalıklı yaprakların toprakta kalması.",
    ],
    cozum: [
      "Lekeli yaprakları temiz makasla kesip atın.",
      "Sulamayı yaprağa değil toprağa yapın, yaprakları kuru tutun.",
      "Fungisit (mantar kaynaklıysa) ya da bakır bazlı ürün kullanın, talimata uyun.",
      "Bitkiyi daha havadar bir yere alın.",
    ],
    onleme: [
      "Yaprakları gereksiz ıslatmayın.",
      "Dökülen yaprakları hemen toplayın.",
    ],
    etkilenen: ["Fikus", "Begonya", "Monstera", "Aglaonema", "Palmiye türleri"],
    sss: [
      {
        s: "Lekeler iyileşir mi?",
        c: "Lekeli doku geri dönmez. Amaç yeni lekeleri durdurmaktır; bunun için nem ve havalandırmayı düzeltin.",
      },
    ],
  },
  {
    slug: "toprak-sinegi",
    ad: "Toprak Sineği (Fungus Gnat)",
    tur: "zararli",
    ozet: "Nemli toprakta üreyen küçük, siyah, sivrisinek benzeri sineklerdir. Larvaları köklere zarar verebilir.",
    belirtiler: [
      "Bitkinin etrafında uçan küçük siyah sinekler.",
      "Toprak yüzeyinde sürekli nem.",
      "Genç bitkilerde gelişme zayıflaması ve solma.",
    ],
    nedenler: [
      "Sürekli ıslak toprak.",
      "Organik madde bakımından zengin, nemli torf.",
      "Çok sık sulama.",
    ],
    cozum: [
      "Toprağın üst kısmının kurumasına izin verin; sinek larvası kuru toprakta yaşayamaz.",
      "Sarı yapışkan tuzaklar yetişkinleri yakalar.",
      "Toprak yüzeyine ince bir kat kum ya da perlit serin.",
      "Gerekirse toprak ıslatma için Bacillus thuringiensis israelensis (BTI) içeren ürün kullanın.",
    ],
    onleme: [
      "Tabakta su bırakmayın.",
      "Sulama aralıklarını açın.",
    ],
    etkilenen: ["Pothos", "Barış çiçeği", "Filodendron", "Fidan ve çelikler"],
    sss: [
      {
        s: "Toprak sinekleri insanlara zarar verir mi?",
        c: "Hayır, ısırmaz ve hastalık taşımaz. Sorun bitki köklerine ve rahatsız edici görüntüsüne yöneliktir.",
      },
    ],
  },
  {
    slug: "kabuklu-bit",
    ad: "Kabuklu Bit",
    tur: "zararli",
    ozet: "Yaprak ve gövdeye yapışan, küçük kahverengi kabuk ya da kalkan şeklinde görünen, özsuyu emen zararlıdır.",
    belirtiler: [
      "Gövde ve yaprak damarlarında küçük, düz kahverengi-gri kabarcıklar.",
      "Yapışkan salgı ve kara küf.",
      "Yaprakların sararması ve bitkinin zayıflaması.",
    ],
    nedenler: [
      "Enfekte yeni bitki.",
      "Zayıf havalandırma, kurak ve sıcak iç mekan.",
    ],
    cozum: [
      "Kabukları sert olmayan bir fırça ya da alkollü pamukla kazıyın.",
      "Neem yağı ya da zararlı sabunuyla tüm bitkiyi silin ya da püskürtün.",
      "Uygulamayı 7-10 günde bir birkaç hafta tekrarlayın.",
      "Yoğun istilada ruhsatlı bir sistemik ilaç kullanın.",
    ],
    onleme: [
      "Yeni bitkileri ayrı tutup izleyin.",
      "Gövde ve yaprak altlarını düzenli kontrol edin.",
    ],
    etkilenen: ["Defne", "Portakal ve limon bitkileri", "Kentia palmiyesi", "Orkide", "Fikus"],
    sss: [
      {
        s: "Kabuklu bit ile yaprak lekesi nasıl ayırt edilir?",
        c: "Kabuklu bit tırnakla kazınabilir ve altından sıvı ya da böcek çıkabilir. Yaprak lekesi ise dokunun kendisinin renk değiştirmesidir.",
      },
    ],
  },
  {
    slug: "yaprak-dokulmesi",
    ad: "Yaprak Dökülmesi",
    tur: "bakim",
    ozet: "Bitkinin birden çok yaprak bırakması çoğu zaman çevre değişikliği, ışık, sulama ya da sıcaklık şokunun işaretidir.",
    belirtiler: [
      "Yeşil ya da sarı yaprakların topluca düşmesi.",
      "Yeni yer değişikliğinden birkaç gün sonra başlayan dökülme.",
      "Alt yapraklardan yukarıya doğru ilerleme.",
    ],
    nedenler: [
      "Yer değiştirme ve ışık değişimi.",
      "Soğuk hava akımı ya da ani sıcaklık değişimi.",
      "Aşırı veya yetersiz sulama.",
      "Kışın ışık azalması.",
      "Zararlılar ve kök sorunu.",
    ],
    cozum: [
      "Bitkiyi sabit, aydınlık ve hava akımı olmayan bir yere yerleştirin.",
      "Toprağı kontrol edin; çok ıslak ya da tamamen kuruysa sulamayı düzeltin.",
      "Yaprak altlarında zararlı olup olmadığına bakın.",
      "Beklemek gerekebilir: yeni ortama uyum 2-4 hafta sürebilir.",
    ],
    onleme: [
      "Bitkiyi gereksiz yere yerinden oynatmayın.",
      "Kışın sulamayı azaltın ve camdan gelen soğuktan koruyun.",
    ],
    etkilenen: ["Fikus benjamin", "Fikus lirata", "Schefflera", "Croton", "Dracaena"],
    sss: [
      {
        s: "Fikus neden yaprak döküyor?",
        c: "Fikuslar yer değişikliğine karşı çok hassastır. Yeni ortama alışırken yaprak dökmeleri normaldir; sabit ışık, düzenli sulama ve hava akımından uzak tutmak çözüm olur.",
      },
    ],
  },
  {
    slug: "gunes-yanigi",
    ad: "Güneş Yanığı",
    tur: "bakim",
    ozet: "Bitkinin alışık olmadığı doğrudan güneşe maruz kalması sonucu yaprakta oluşan beyaz-sarı-kahverengi yanık lekeleridir.",
    belirtiler: [
      "Yaprağın güneşe bakan yüzünde beyaz, sarımtırak ya da kahverengi kuru lekeler.",
      "Lekeler yaprağın üst yüzeyinde, düzensiz ve kağıt gibidir.",
      "Camdan gelen öğle güneşinde birkaç saat içinde belirir.",
    ],
    nedenler: [
      "Bitkinin birden güçlü doğrudan güneşe alınması.",
      "Cam arkasında odaklanan öğle güneşi.",
      "Yapraklardaki su damlalarının büyüteç etkisi.",
    ],
    cozum: [
      "Bitkiyi dolaylı, parlak ışığa ya da tül perde arkasına alın.",
      "Yanmış yapraklar geri yeşillenmez; çok bozulduysa kesebilirsiniz.",
      "Dışarı çıkaracaksanız önce gölgede başlayıp kademeli olarak ışığa alıştırın.",
    ],
    onleme: [
      "Işığa kademeli alıştırın.",
      "Öğle güneşinde yapraklara su püskürtmeyin.",
    ],
    etkilenen: ["Kaladyum", "Kalatya", "Eğrelti otları", "Monstera", "Peperomia"],
    sss: [
      {
        s: "Güneş yanığı ile mantar lekesini nasıl ayırırım?",
        c: "Güneş yanığı bitkinin ışığa bakan tarafında ve düzgün sınırlı, kuru olur. Mantar lekeleri genelde halkalı ve nemli bir görünüme sahiptir.",
      },
    ],
  },
];

export function hastalikBul(slug) {
  return HASTALIKLAR.find((h) => h.slug === slug);
}

export const TUR_ETIKETI = {
  hastalik: "Hastalık",
  zararli: "Zararlı",
  bakim: "Bakım sorunu",
};
