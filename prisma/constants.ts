export const categories = [
  { name: "Pizzas" },
  { name: "Combos" },
  { name: "Appetizers" },
  { name: "Cocktails" },
  { name: "Coffee" },
  { name: "Beverages" },
  { name: "Desserts" },
];

export const ingredients = [
  {
    name: "Cheese Border",
    price: 3,
    imageUrl: "https://i.ytimg.com/vi/OFb7HPNC5-o/maxresdefault.jpg",
  },
  {
    name: "Creamy Mozzarella",
    price: 1.2,
    imageUrl:
      "https://www.thespruceeats.com/thmb/foj5j6DX53tnifpXL6K8oslbpho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-mozzarella-slices-154947518-582dd1b55f9b58d5b172bbc3.jpg",
  },
  {
    name: "Cheddar and Parmesan Cheese",
    price: 1,
    imageUrl:
      "https://thelaughingcow-sea.com/wp-content/uploads/2023/07/shutterstock_1031210920_resized.webp",
  },
  {
    name: "Hot Jalapeño",
    price: 2,
    imageUrl:
      "https://www.allrecipes.com/thmb/CSofglj43lNMG-x5wEd1s04uI7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-jalapeno-peppers-allrecipes-magazine-4x3-b7f663eddd5e49b1a1cf3eb672335a02.jpg",
  },
  {
    name: "Tender Chicken",
    price: 2,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/NkhLR1XbIUrlrprU49hGgYScnys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Air-Fryer-Chicken-Tenders-LEAD-1-ef1958edfe3145a9a7abcaaecbdcbce5.jpg",
  },
  {
    name: "Champignons",
    price: 0.7,
    imageUrl:
      "https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Champignons-700x700.png",
  },
  {
    name: "Ham",
    price: 1.1,
    imageUrl:
      "https://denningers.com/cdn/shop/products/BlackforestHamSliced-100g_800x.jpg?v=1739720056",
  },
  {
    name: "Spicy Pepperoni",
    price: 1,
    imageUrl:
      "https://trealyfarmcharcuterie.co.uk/wp-content/uploads/2023/08/DSC03184-Large-2.jpeg",
  },
  {
    name: "Spicy Chorizo",
    price: 1,
    imageUrl:
      "https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/13d0f042-646a-44f4-a883-ccb7b66327c4/500x500.jpg",
  },
  {
    name: "Pickled Cucumbers",
    price: 0.7,
    imageUrl:
      "https://www.thefullhelping.com/wp-content/uploads/2023/06/pickled-cucumber-slices-2.jpg",
  },
  {
    name: "Fresh Tomatoes",
    price: 0.7,
    imageUrl:
      "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
  },
  {
    name: "Red Onion",
    price: 0.7,
    imageUrl:
      "https://i5.walmartimages.com/asr/df54c034-a747-4f00-81ce-47191ab4972c.9efd669f6daffd19ffaf32e270ef7598.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    name: "Juicy pineapples",
    price: 0.7,
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/061/220/304/large_2x/high-resolution-of-juicy-pineapple-chunks-photo.jpg",
  },
  {
    name: "Italian Herbs",
    price: 0.5,
    imageUrl:
      "https://banka-speciy.in.ua/image/cache/data/0001414/xitalyanskie-travi-620x620.jpg.pagespeed.ic.YxYxNsmmTC.jpg",
  },
  {
    name: "Sweet peppers",
    price: 0.7,
    imageUrl:
      "https://askthefoodgeek.com/wp-content/uploads/2017/02/bell-peppers-in-season.jpg",
  },
  {
    name: "Feta cheese cubes",
    price: 1,
    imageUrl:
      "https://www.henderson-foodservice.com/media/catalog/product/cache/f7e3a2766b9a655912e97eacaab031ec/b/b/bb8993a308c482798899d841aa0617b6.png",
  },
  {
    name: "Meatballs",
    price: 1.2,
    imageUrl:
      "https://www.giallozafferano.com/images/270-27011/Meatballs_1200x800.jpg",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Ham and Mushroom Omelet",
    imageUrl:
      "https://asset.slimmingworld.co.uk/content/media/20548/ham-and-mushroom-omelette-sq_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=1200&height=630",
    categoryId: 2,
  },
  {
    name: "Pepperoni Omelet",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/19/64/87/kyldn4hpRNuWZpXKy8CE_0S9A8470.jpg",
    categoryId: 2,
  },
  {
    name: "Caffè Latte",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg",
    categoryId: 2,
  },
  {
    name: "Danwich Ham and Cheese",
    imageUrl:
      "https://www.seriouseats.com/thmb/s1tqfozqvGgOEDO6xe3gzaskncg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240305-SEA-HamandCheese-AmandaSuarez15-fa4cf0500a28452ab2f1575057e5c059.jpg",
    categoryId: 3,
  },
  {
    name: "Chicken Nuggets",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKn8bAK7OLYdmCh7tuNwhfHQ4u5n3fQ5bH9A&s",
    categoryId: 3,
  },
  {
    name: "Baked Potatoes with Gravy 🌱",
    imageUrl:
      "https://luda.ca/wp-content/uploads/2021/02/Stuffed-Baked-Potato_334054-e1614358011881.jpg",
    categoryId: 3,
  },
  {
    name: "Dodster",
    imageUrl:
      "https://i1.sndcdn.com/avatars-sVnstTGoqXzTiDA4-a1xd4w-t240x240.jpg",
    categoryId: 3,
  },
  {
    name: "Spicy Dodster 🌶️🌶️",
    imageUrl:
      "https://imageproxy.wolt.com/menu/menu-images/660416e1d4a559e7518f071f/a11a5106-4ccc-11f0-8c50-06903abbc2b2_image_recipe_11eee50a8dc73d6b3760846c6403d331_0_58_fe99b8b1_807d_4c23_900a_7ed818992266.jpg",
    categoryId: 3,
  },
  {
    name: "Banana Milkshake",
    imageUrl:
      "https://www.crazyvegankitchen.com/wp-content/uploads/2021/07/banana-milkshake4.jpeg",
    categoryId: 4,
  },
  {
    name: "Caramel Apple Milkshake",
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/10/0/FN_Andrea-Ament_Holiday-Milkshakes_Salted-Caramel-Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1481576464972.webp",
    categoryId: 4,
  },
  {
    name: "Oreo Milkshake",
    imageUrl:
      "https://confessionsofabakingqueen.com/wp-content/uploads/2023/04/Oreo-Milkshake-featured-image-1-of-1.jpg",
    categoryId: 4,
  },
  {
    name: "Classic Milkshake 👶",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/banana-milkshake_1-f95690e.jpg",
    categoryId: 4,
  },
  {
    name: "Irish Cappuccino",
    imageUrl:
      "https://noplatelikehome.com/wp-content/uploads/IMG_4107-scaled.jpg",
    categoryId: 5,
  },
  {
    name: "Caramel Cappuccino",
    imageUrl:
      "https://www.smeg.com/binaries/content/gallery/web_img_5627.jpg.jpg/web_img_5627.jpg.jpg/brx%3ApostcardDeskLarge",
    categoryId: 5,
  },
  {
    name: "Coconut Latte",
    imageUrl:
      "https://images.ctfassets.net/v601h1fyjgba/5EeTOtCSLZQsc1vH53jJJc/113f7e0b3f46e0246b6f69088c53d9c0/15697_Keurig_CafeCreations_Vanilla_Coconut_Latte_COMP_Hi__1_.jpg",
    categoryId: 5,
  },
  {
    name: "Americano Coffee",
    imageUrl:
      "https://loveincrediblerecipes.com/wp-content/uploads/2023/12/nespresso-americano-1200x1200-1.jpg",
    categoryId: 5,
  },
  {
    name: "Coffee Latte",
    imageUrl:
      "https://cornercoffeestore.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",
    categoryId: 5,
  },
];
