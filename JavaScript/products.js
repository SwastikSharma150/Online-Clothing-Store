/**
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "c1", "c2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 *
 */

window.products = [

  // Apparels - Men
  {
    id: "11300",
    title: "Plain Round Neck T-shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210304/RwLW/604110437cdb8c1f14568a6e/-473Wx593H-410258410-grey-MODEL.jpg",

    description:
      "Choose among a wide range of selection of Plain T-shirts provided by 'the Apparel store'. These plain round necked T-shirts are available in 7 different colours (subject to availability) all at the same price.",
    price: 1500,
    discontinued: false,
    categories: ["P1", "P2", "P3"]
  },

  {
    id: "11301",
    title: "Plain V Neck T-shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210324/GVGu/605b326bf997dd7b64540e08/-473Wx593H-410258406-blue-MODEL.jpg",
    description:
      "Choose among a wide range of selection of Plain T-shirts provided by 'the Apparel store' which are V-necked. T-shirts are available in 7 different colours (subject to availability) all at the same price.",
    price: 1500,
    discontinued: true,
    categories: ["P1", "P2", "P3"]
  },

  {
    id: "11302",
    title: "T-Shirt Striped",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220603/GI50/62991ce9f997dd03e25d6aa2/-473Wx593H-441102621-darkred-MODEL.jpg",
    description:
      "Casual striped shirt made of premium imported cotton, excellent fitting available in all sizes from small to extra large (subject to availability).",
    price: 1999,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11303",
    title: "Checked Shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220120/h8I8/61e98266aeb2695cdd224a3b/-473Wx593H-441127655-jetblack-MODEL.jpg",
    description:
      "Modern checked shirt available in 3 different colour combinations, the shirt provides a smart and casual look with a attractively designed checked pattern.",
    price: 3200,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11304",
    title: "Track Pants",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20211202/D6Ax/61a7dc85f997ddf8f12d197d/-473Wx593H-441131070-jetblack-MODEL.jpg",
    description:
      "Comfortable track pants available in 4 dark shades, designed for comfortable running, walking and jogging.",
    price: 3000,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11305",
    title: "Blue Jeans",
    description:
      "One can never go wrong with a pair of classic blue jeans - they simply go along with everything and the Apparel's store brings them at an affordable price.",
    price: 2600,
    discontinued: false,
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210202/uhE2/601889ccaeb26969815b039b/-473Wx593H-441102621-mediumblue-MODEL.jpg",
    categories: ["P1"]
  },

  {
    id: "11306",
    title: "Jogger Pants",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210824/vNUc/61240cc17cdb8cb824031b24/-473Wx593H-441124922-olive-MODEL.jpg",
    description:
      "Comfortable jogger pants for men - available in cargo design and are perfect for a casual gym attire.",
    price: 2299,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11307",
    title: "Black Trousers",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/h79/h02/10267307016222/-473Wx593H-440717974-black-MODEL.jpg",
    description:
      "A pair of black trousers (currently on sale), made up of fine fabric which will keep you warm and comfortable.",
    price: 2400,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11308",
    title: "Slim-fit grey jeans",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210923/tPLR/614b7f50f997ddce89d7740b/-473Wx593H-441115756-tintblue-MODEL.jpg",
    description:
      "Skinny grey jeans which come with a slim-fit look are now available in sizes ranging from medium to extra large.",
    price: 2899,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11309",
    title: "Classic shorts",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/hbf/h70/10295143923742/-473Wx593H-440672489-blue-MODEL.jpg",
    description:
      "Classic shorts for men available in 4 different colours: red, orange, black and grey.",
    price: 1800,
    discontinued: false,
    categories: ["P1"]
  },

  {
    id: "11310",
    title: "Premium checked shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210316/9gAe/604fab51aeb2696981863192/-473Wx593H-460698917-white-MODEL.jpg",
    description:
      "Checked shirt made from premium fabric imported from the finest traders across the ocean, one can never go wring with this fit which is the finest we have to offer",
    price: 4500,
    discontinued: true,
    categories: ["P1"]
  },

  // Apparels - Women

  {
    id: "11502",
    title: "Indian kurti",
    description:
      "Authentic handmade kurti imported directly from the indian sub-continent at an affordable price (shipping charges extra)",
    price: 3250,
    discontinued: false,
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210403/xWml/606877c07cdb8c1f14764c63/-473Wx593H-461191248-yellow-MODEL.jpg",
    categories: ["P2"]
  },

  {
    id: "11503",
    title: "Formal shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220107/YKv5/61d73adaaeb2695cdd077284/-473Wx593H-441129510-pink-MODEL.jpg",
    description:
      "Formal shirt for women available in 7 different light coloured shades ranging from sizes - small to large",
    price: 2000,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11504",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210614/eFui/60c77a1ef997ddb312c8c237/-473Wx593H-441121416-red-MODEL.jpg",
    title: "Casual Pink T-Shirt",
    description:
      "T-shirt coloured with a light shade of pink with a comfortable fitting for casual wear at an affordable price.",
    price: 1500,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11505",
    title: "Polka dot skirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220429/xyKd/626c18b0f997dd03e28b40fa/-473Wx593H-441142606-navyblue-MODEL.jpg",
    description:
      "The Apparel store's most in-demand item under the women's category is now back in stock - white polka dots skirt with a fine finishing at the borders.",
    price: 3499,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11506",
    title: "Denim Jacket",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210817/Ph7r/611ab4bdaeb269a26873c407/-473Wx593H-441120528-darkblue-MODEL.jpg",
    description:
      "Stylish denim - jean styled sleeveless jacket which is perfect for party wear is available in sizes ranging from - medium to large.",
    price: 2500,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11507",
    title: "Slim Fit Jeans",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210528/ywDs/60b10a99f997ddb312ad122d/-473Wx593H-441120625-grey-MODEL.jpg",
    description:
      "Blue slim fit jeans available at an affordable price which provide a casual yet smart look when worn along with a shirt or any matching top.",
    price: 2899,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11508",
    title: "White Silk Top",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220723/nvvN/62daef81aeb26921af9148fb/-473Wx593H-462368202-white-MODEL.jpg",
    description:
      "Stylish white silk top is now back in stock with sizes available from small to extra large and is now available across all store branches and locations.",
    price: 3000,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11509",
    title: "Casual Shorts",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220125/So0i/61eef778f997dd662337fd86/-473Wx593H-441135213-blue-MODEL.jpg",
    description:
      "Casual home-wear shorts for women now available in 7 different colours, made with an elastic band and comfortable fabric",
    price: 1600,
    discontinued: false,
    categories: ["P2"]
  },

  {
    id: "11510",
    title: "Premium Black Slim Fit Jeans",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20210403/PrCa/60687e8aaeb269a9e3334366/-473Wx593H-461208122-black-MODEL.jpg",
    description:
      "This product is a mutual collaboration between the Apparels store and the Englishmen stitching, we introduce the finest slim fit jeans with the best material we have to offer with the promise of comfort.",
    price: 4600,
    discontinued: true,
    categories: ["P2"]
  },

  // Apparels - Children

  {
    id: "11702",
    title: "Kids Casual Shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20211123/6JIf/619cdedbaeb2690110d2c16e/-473Wx593H-441129905-peach-MODEL.jpg",
    description:
      "Casual shirt made with comfortable material available in bright colours for kids ranging from ages: 3 to 6",
    price: 1000,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11703",
    title: "Casual Shorts",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20201015/p1Jo/5f8841c1aeb269d563df7794/-473Wx593H-460565951-blue-MODEL.jpg",
    description:
      "Casual shorts made for kids ranging from ages: 8 - 12 for home-wear purposes and is available in 7 different colours (subject to availability).",
    price: 1200,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11704",
    title: "Kids cap",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20211012/dr7v/616581b9aeb2692b85d0c464/-473Wx593H-460807240-black-MODEL.jpg",
    description: "Stylish kids sports cap which can go along with any attire.",
    price: 800,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11705",
    title: "Sleeveless T-Shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20211229/fcAq/61cc54daf997ddf8f167c9b3/-473Wx593H-441130039-navy-MODEL.jpg",
    description:
      "Comfortable Sleeveless T-shirt for kids which goes well with their summer attire and is available in sizes ranging from small to large.",
    price: 1800,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11706",
    title: "Party-wear Jeans",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220221/kS5l/6213882ef997dd03e2dd816f/-473Wx593H-441125414-blue-MODEL.jpg",
    description:
      "Special Party-wear jeans designed for kids ranging from ages: 8 - 12, available in black, grey and dark blue colour.",
    price: 1899,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11707",
    title: "Premium Brown Trousers",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220520/SPuT/6286ebeff997dd03e2f824bc/-473Wx593H-469102863-multi-MODEL.jpg",
    description:
      "Dark brown trousers made from the most expensive fabric in order to provide kids with a comfortable experience, now available in 3 kids sizes: small, medium and large",
    price: 2899,
    discontinued: false,
    categories: ["P3"]
  },

  {
    id: "11708",
    title: "Pokemon T-Shirt",
    imageURL:
      "https://assets.ajio.com/medias/sys_master/root/20220701/8wr8/62bf09a0aeb26921af590ade/-473Wx593H-469210192-multicolour-MODEL.jpg",
    description:
      "Your child's favourite cartoon show designed over light grey coloured shade which brings out a beautifully crafted comfortable t-shirt, made for kids ranging from ages: 12 - 15.",
    price: 1899,
    discontinued: false,
    categories: ["P3"]
  }
];