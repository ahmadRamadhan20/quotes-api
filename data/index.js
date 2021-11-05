const quotes = [
  {
    id: "1",
    quote:
      "Di manapun engkau berada selalulah menjadi yg terbaik dan berikan yang terbaik dari yg bisa kita berikan.",
    author: "bj habibie",
  },
  {
    id: "2",
    quote:
      "Tanpa cinta kecerdasan itu berbahaya, dan tanpa kecerdasan cinta itu tidak cukup.",
    author: "bj habibie",
  },
  {
    id: "3",
    quote: "Kegagalan hanya terjadi bila kita menyerah.",
    author: "bj habibie",
  },
  {
    id: "4",
    quote:
      "Hiduplah seperti anda akan mati besok dan berbahagialah seperti akan hidup selamanya.",
    author: "bj habibie",
  },
  {
    id: "5",
    quote:
      "Orang pintar kebanyakan ide dan akhirnya tidak ada satupun yang jadi kenyataan. Orang goblok cuma punya satu ide dan itu jadi kenyataan.",
    author: "bob sadino",
  },
  {
    id: "6",
    quote:
      "Setinggi apapun pangkat yang anda miliki, Anda tetaplah karyawan. Sekecil apapun usaha anda, anda adalah BOS-nya.",
    author: "bob sadino",
  },
  {
    id: "7",
    quote:
      "Yang beneran punya, nggak akan banyak bicara seperti mereka yang berlaga sok punya.",
    author: "bob sadino",
  },
  {
    id: "8",
    quote:
      "Kegagalan adalah bumbu kehidupan. Kegagalan membuat kita bisa menjadi manusia yang tangguh.",
    author: "bob sadino",
  },
  {
    id: "9",
    quote:
      "Kemauan yang dilandasi dengan tekad yang bulat, dan harus berani dalam mengambil peluang yang ada.",
    author: "bob sadino",
  },
  {
    id: "10",
    quote:
      "Jangan menjelaskan tentang siapa dirimu kepada siapapun, karena yang menyukaimu tidak butuh itu. Dan yang membencimu tidak percaya itu.",
    author: "ali bin abi thalib",
  },
  {
    id: "11",
    quote:
      "Dirimu yang sebenarnya adalah apa yang kamu lakukan disaat tiada orang yang melihatmu.",
    author: "ali bin abi thalib",
  },
  {
    id: "12",
    quote:
      "Jangan melihat siapa yang bicara tapi lihatlah apa yang dibicarakannya.",
    author: "ali bin abi thalib",
  },
  {
    id: "13",
    quote:
      "Belajar tanpa berpikir itu tidaklah berguna, tapi berpikir tanpa belajar itu sangatlah berbahaya.",
    author: "bung karno",
  },
  {
    id: "14",
    quote:
      "Banyak Hal yang dapat menjatuhkanmu. Tapi satu-satunya hal yang benar benar dapat menjatuhkanmu adalah sikapmu sendiri.",
    author: "r.a. kartini",
  },
  {
    id: "15",
    quote:
      "Jika saatnya tiba, sedih akan menjadi tawa, perih akan menjadi cerita, kenangan akan menjadi guru, rindu akan menjadi temu, kau dan aku akan menjadi kita.",
    author: "fiersa bersari",
  },
  {
    id: "16",
    quote:
      "Pada waktunya, dunia hanya perlu tahu kalau kita hebat. Kebahagiaan tidak membutuhkan penilaian orang lain.",
    author: "fiersa bersari",
  },
  {
    id: "17",
    quote: "Berhentilah membuat rencana, melangkahlah",
    author: "bob sadino",
  },
  {
    id: "18",
    quote:
      "Kita gatau gimana dapur mereka, yang kita lihat cuma kesenangan nya saja, jadi tak usah iri dengan pencapaian mereka, justru harusnya dijadikan motivasi",
    author: "ahmad ramadhan",
  },
  {
    id: "19",
    quote:
      "Kita gak akan pernah bisa control lingkungan kita, yang harus di control adalah diri kita sendiri.",
    author: "ahmad ramadhan",
  },
  {
    id: "20",
    quote:
      "Saya tidak gagal, saya hanya menemukan 10.000 cara yang tidak berhasil.",
    author: "thomas edison",
  },
  {
    id: "21",
    quote: "Jika kamu bisa memimpikannya, kamu bisa melakukannya.",
    author: "walt disney",
  },
  {
    id: "22",
    quote: "Jangan berhenti ketika lelah. Berhentilah ketika selesai.",
    author: "ahmad ramadhan",
  },
  {
    id: "23",
    quote:
      "Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan dibalik impianmu.",
    author: "josh hinds",
  },
  {
    id: "24",
    quote: "Adakah yang lebih hina, daripada bergantung kepada orang lain?",
    author: "r.a. kartini",
  },
  {
    id: "25",
    quote: "Setiap orang menjadi guru, setiap rumah menjadi sekolah.",
    author: "ki hajar dewatara",
  },
  {
    id: "26",
    quote: "Memaafkan adalah kemenangan terbaik.",
    author: "ali bin abi thalib",
  },
  {
    id: "27",
    quote:
      "Di antara pendosa, yang paling buruk adalah dia yang meluangkan waktunya untuk membahas kesalahan orang lain.",
    author: "utsman bin affan",
  },
  {
    id: "28",
    quote: "Secapek-capeknya kerja lebih cape nganggur.",
    author: "ernest prakasa",
  },
  {
    id: "29",
    quote: "Seorang pemenang adalah pemimpi yang tidak pernah menyerah",
    author: "nelson mandela",
  },
  {
    id: "30",
    quote: "Doa adalah kata sayang yang paling sederhana dan tulus.",
    author: "ahmad ramadhan",
  },
  {
    id: "31",
    quote: "Saya tidak harus menjadi yang anda inginkan.",
    author: "muhammad ali",
  },
  {
    id: "32",
    quote:
      "Aku ingin menggunakan kepopuleranku dan wajah ini yang banyak dikenali orang untuk membantu dan menginspirasi banyak orang diseluruh dunia.",
    author: "muhammad ali",
  },
  {
    id: "33",
    quote: "Terbanglah seperti kupu-kupu dan menyengat bagai lebah",
    author: "muhammad ali",
  },
  {
    id: "34",
    quote:
      "Kamu lebih kuat dari yang kamu tau, lebih cakep dari yang pernah kamu impikan. Dan kamu dicintai lebih dari yang bisa kamu bayangkan.",
    author: "ahmad ramadhan",
  },
  {
    id: "35",
    quote: "Hati yang paling kuat memiliki bekas luka paling banyak.",
    author: "ahmad ramadhan",
  },
  {
    id: "36",
    quote:
      "Kecantikan adalah apa yang kamu rasakan tentang diri kamu, bukan tentang apa yang kamu lihat di cermin",
    author: "unknown",
  },
  {
    id: "37",
    quote:
      "Hidup sederhana tanpa hutang lebih damai daripada kelihatan kaya karena hutang.",
    author: "gus miftah.",
  },
];

module.exports = quotes;
