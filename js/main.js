(function ($) {
  "use strict";

  /*--------------------------
         supplier form modal logic
    ---------------------------- */
  $("select.business")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var userType = $(this).attr("value");
          if (userType) {
            $(".custom-fields")
              .not("." + userType)
              .hide();
            $("." + userType).show();
          } else {
            $(".custom-fields").hide();
          }
        });
    })
    .change();

  setTimeout(function () {
    if ($("#ftco-loader").length > 0) {
      $("#ftco-loader").removeClass("show");
    }
  }, 1);

  $(".btn-comment").click(function () {
    $(".form-widget").slideToggle(0);
    $(".form-button").toggleClass("button-up");
    $(".btn-comment").toggleClass("big-button");
  });

  $("#lightgallery").lightGallery({
    // width: '500px',
    // height: '600px',
    mode: "lg-fade",
    // addClass: 'fixed-size',
    counter: false,
    download: false,
    startClass: "",
    enableSwipe: false,
    enableDrag: false,
    speed: 500,
    thumbnail: false,
  });

  /* jQuery MeanMenu */
  $("#mobile-menu-active").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu-area .mobile-menu",
  });

  /*--
    One Page Nav
    -----------------------------------*/
  var top_offset = $(".header-area").height() - -60;
  $(".hamburger-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset,
  });

  /*--- clickable menu active ----*/
  const slinky = $("#menu").slinky();
  /*====== sidebarmenu ======*/
  function sidebarMainmenu() {
    var menuTrigger = $(".clickable-mainmenu-active"),
      endTrigger = $("button.clickable-mainmenu-close"),
      container = $(".clickable-mainmenu");
    menuTrigger.on("click", function (e) {
      e.preventDefault();
      container.addClass("inside");
    });
    endTrigger.on("click", function () {
      container.removeClass("inside");
    });
  }
  sidebarMainmenu();

  /* slider active */
  $(".banner-slider").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    item: 1,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /* testimonials active */
  $(".testimonials-active").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    item: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  /* testimonials active */
  $(".product-fruit-slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    item: 5,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  /*--
    menu-toggle
    ------------------------*/
  $(".menu-toggle").on("click", function () {
    if ($(".menu-toggle").hasClass("is-active")) {
      $(".hamburger-menu nav").removeClass("menu-open");
    } else {
      $(".hamburger-menu nav").addClass("menu-open");
    }
  });

  /*--
        Hamburger js
    -----------------------------------*/
  var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener(
        "click",
        function () {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }

  /*--------------------------
        09. ScrollUp
    ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="ti-arrow-up"></i>',
    easingType: "linear",
    scrollSpeed: 0,
    animation: "fade",
  });

  /*--
    Header Search Toggle
    -----------------------------------*/
  var searchToggle = $(".search-toggle");
  searchToggle.on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).siblings(".handicraft-content").removeClass("open");
    } else {
      $(this).addClass("open");
      $(this).siblings(".handicraft-content").addClass("open");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 55) {
      $(".header-sticky-3").addClass("scrolled-navbar");
      $(".ul").addClass("scrolled-ul");
      $(".pisum-logo").addClass("scrolled-pisum-logo");
    } else {
      $(".header-sticky-3").removeClass("scrolled-navbar");
      $(".ul").removeClass("scrolled-ul");
      $(".pisum-logo").removeClass("scrolled-pisum-logo");
    }
  });
})(jQuery);

// Sample product data (this can be fetched from a database in real projects)
const products = [
  {
    id: 1,
    title: "Apple",
    description:
      "An apple is a sweet, crunchy fruit that is not only delicious but also packed with essential nutrients. Known for its variety of colors, ranging from red and green to yellow, apples are rich in fiber, antioxidants, and vitamin C. Whether eaten fresh, baked into pies, or blended into juices, apples are versatile and nutritious. Perfect for a quick snack, they support heart health, improve digestion, and help boost the immune system. The crisp texture and refreshing taste of an apple make it a favorite for all ages.",
    image: "./img/product/fruits/apple.jpg",
  },
  {
    id: 2,
    title: "Banana",
    description:
      "Bananas are a tropical fruit known for their natural sweetness and creamy texture. Rich in potassium, vitamin C, and vitamin B6, bananas are an excellent choice for a healthy snack or smoothie ingredient. Their high fiber content helps promote digestion and provides a quick energy boost, making them ideal for a pre-workout snack. Bananas are versatile and can be enjoyed on their own, added to cereals, baked goods, or even blended into smoothies. With their convenient, peelable skin and natural sweetness, bananas are perfect for on-the-go nutrition.",
    image: "./img/product/fruits/bananas.jpg",
  },
  {
    id: 3,
    title: "Mango",
    description:
      "Mangoes are a beloved tropical fruit known for their juicy, sweet flesh and vibrant color. Packed with vitamins A and C, mangoes are a rich source of antioxidants that support immune health and skin vitality. Their natural sweetness and tropical flavor make them perfect for fresh eating, blending into smoothies, or adding to salads and salsas. Mangoes are also high in fiber, which aids digestion and helps keep you feeling full. Whether enjoyed on their own or as part of a delicious dish, mangoes are a refreshing treat full of health benefits.",
    image: "./img/product/fruits/mango.jpg",
  },
  {
    id: 4,
    title: "Orange",
    description:
      "Oranges are one of the most popular citrus fruits in the world. Oranges can be consumed raw, in salads, juices, smoothies, desserts and in such other forms. Due to the rise in the demand for orange across the world Indian orange exporter has also increased the number of exports. India is the third-largest orange producer in the world. Therefore, the growth for orange export from India is also immense.",
    image: "./img/product/fruits/orange.jpg",
  },
  {
    id: 5,
    title: "Onion",
    description:
      "Onions are a staple in kitchens around the world, known for their distinctive flavor and versatility in cooking. Whether raw, sautéed, caramelized, or roasted, onions add depth and richness to a wide variety of dishes. They are rich in antioxidants, particularly flavonoids, which help promote heart health and reduce inflammation. Onions are also a great source of vitamins C and B6, fiber, and essential minerals like potassium. Available in a variety of colors—including red, white, and yellow—onions are essential for enhancing both savory and sweet recipes.",
    image: "./img/product/vegetables/Onion.jpg",
  },
  {
    id: 6,
    title: "Mushroom",
    description:
      "Mushrooms are a unique and nutritious addition to any meal, offering a rich, earthy flavor and a meaty texture. Known for their versatility, mushrooms can be sautéed, grilled, roasted, or used in soups and salads. They are low in calories but packed with essential nutrients like vitamin D, B-vitamins, potassium, and antioxidants, which help support immune health and promote energy production. With their natural umami taste, mushrooms are often used to enhance the flavor of vegetarian dishes, making them a popular meat alternative. Available in a variety of types, such as button, shiitake, and portobello, mushrooms add a depth of flavor to countless dishes.",
    image: "./img/product/vegetables/Mushroom.jpg",
  },
  {
    id: 7,
    title: "Broccoli",
    description:
      "Broccoli is a nutrient-packed vegetable known for its vibrant green color and versatility in the kitchen. Often referred to as a superfood, it’s loaded with essential vitamins and minerals, including vitamin C, vitamin K, folate, and fiber. Broccoli is rich in antioxidants, particularly sulforaphane, which has been linked to various health benefits, including promoting heart health and supporting the immune system. Whether steamed, roasted, stir-fried, or eaten raw, broccoli adds a satisfying crunch and a mild, slightly earthy flavor to salads, side dishes, and main courses. It's a perfect choice for those looking to eat healthy and boost their vegetable intake.",
    image: "./img/product/vegetables/broccoli.jpg",
  },
  {
    id: 8,
    title: "Potato",
    description:
      "Potatoes are one of the most versatile and widely consumed vegetables in the world. They can be prepared in countless ways, including mashed, baked, fried, roasted, or even boiled. Known for their starchy texture, potatoes are rich in carbohydrates, making them a great source of energy. They also contain essential vitamins like Vitamin C, B6, and minerals such as potassium. Whether used as a side dish, snack, or the main ingredient in dishes like potato salad, fries, or gratins, potatoes are a household favorite in many cuisines worldwide.",
    image: "./img/product/vegetables/potato.jpg",
  },
  {
    id: 9,
    title: "Pineapple",
    description:
      "Pineapple is a tropical fruit celebrated for its vibrant golden color, sweet-tart flavor, and refreshing juiciness. Known for its high vitamin C content, pineapple is a great immune booster and a rich source of antioxidants that support overall health. It also contains bromelain, an enzyme with anti-inflammatory properties that may aid digestion and reduce swelling. Whether eaten fresh, blended into smoothies, or used in cooking, pineapple adds a zesty, tropical twist to any dish. Its versatility also makes it a favorite for grilling or as an ingredient in salsas and desserts. A true taste of the tropics!",
    image: "./img/product/fruits/pineapple.jpg",
  },
  {
    id: 10,
    title: "Pomegranate",
    description:
      "Pomegranates are a vibrant and nutrient-packed fruit, renowned for their ruby-red seeds and refreshing, sweet-tart flavor. Packed with antioxidants, vitamins C and K, and fiber, pomegranates are known for their health benefits, including promoting heart health, improving digestion, and boosting the immune system. The juicy arils inside each pomegranate are not only delicious but also versatile, perfect for adding a burst of flavor to salads, smoothies, desserts, or enjoyed on their own. With their rich, tangy taste and numerous health benefits, pomegranates make a great addition to any diet.",
    image: "./img/product/fruits/pomegranate.jpg",
  },
  {
    id: 11,
    title: "Dragon Fruit",
    description:
      "Dragon fruit, also known as pitaya, is a tropical fruit with a vibrant, eye-catching appearance and a sweet, mildly tangy flavor. Its bright pink or yellow skin is covered in spiky scales, while the interior boasts a white or red flesh dotted with tiny black seeds. Rich in antioxidants, vitamin C, and fiber, dragon fruit is not only delicious but also offers numerous health benefits, including improving digestion and supporting immune health. This exotic fruit is perfect for smoothies, salads, and desserts, or can be enjoyed on its own for a refreshing snack. Dragon fruit is not only a treat for the taste buds but also a feast for the eyes with its unique and striking appearance.",
    image: "./img/product/fruits/dragon-fruit.jpg",
  },
  {
    id: 12,
    title: "Strawberry",
    description:
      "Strawberries are a delightful and juicy fruit, beloved for their sweet and slightly tangy flavor. These vibrant red berries are rich in vitamin C, antioxidants, and fiber, making them not only delicious but also a healthy choice for boosting the immune system and promoting skin health. Often enjoyed fresh, strawberries are also perfect for adding to smoothies, desserts, salads, or as a topping for cereals and baked goods. Their natural sweetness makes them a popular choice for both kids and adults alike. Fresh strawberries are typically in season during spring and summer, though they are available year-round in most markets.",
    image: "./img/product/fruits/strawberry.png",
  },
  {
    id: 13,
    title: "Spinach / Palak",
    description:
      "Spinach, also known as Palak, is a highly nutritious leafy green vegetable that is widely popular for its health benefits. Rich in vitamins A, C, and K, spinach is an excellent source of iron, calcium, and folate, making it an important food for supporting bone health, boosting the immune system, and promoting healthy skin. Spinach is versatile and can be enjoyed both raw in salads or cooked in various dishes like soups, stews, and curries. Its mild flavor and tender leaves make it a perfect addition to smoothies, sandwiches, and wraps. Regular consumption of spinach can help improve digestion, reduce inflammation, and provide essential nutrients for overall well-being.",
    image: "./img/product/vegetables/spinach.jpg",
  },
  {
    id: 14,
    title: "Cabbage",
    description:
      "Cabbage is a nutrient-dense leafy green vegetable that’s both versatile and easy to incorporate into a variety of dishes. Known for its crisp texture and mildly peppery flavor, cabbage is a key ingredient in salads, stir-fries, soups, and even fermented dishes like sauerkraut and kimchi. It’s an excellent source of vitamin C, vitamin K, fiber, and antioxidants, which contribute to immune support, digestive health, and overall well-being. Available in green, red, and savoy varieties, cabbage can be enjoyed raw, cooked, or pickled, making it a perfect addition to any meal.",
    image: "./img/product/vegetables/cabbage.jpg",
  },
  {
    id: 15,
    title: "Brinjal",
    description:
      "Brinjal, or eggplant, is a vibrant and versatile vegetable that adds a rich, savory flavor and smooth texture to a variety of dishes. With its deep purple skin and tender flesh, brinjal is a favorite in many cuisines, particularly in Mediterranean, Middle Eastern, and Indian cooking. It can be grilled, roasted, sautéed, or used in stews, curries, and salads. Brinjal is low in calories and high in fiber, making it an excellent addition to any healthy diet. It is also a good source of antioxidants, including anthocyanins, which help combat oxidative stress and inflammation in the body.",
    image: "./img/product/vegetables/brinjal.jpg",
  },
  {
    id: 16,
    title: "Cauliflower",
    description:
      "Cauliflower is a versatile and nutritious vegetable that belongs to the cruciferous family, alongside broccoli and cabbage. Known for its mild flavor and firm, white florets, cauliflower is often used as a low-carb alternative in many recipes, including mashed potatoes, pizza crusts, and rice. It’s rich in vitamins C and K, folate, fiber, and antioxidants that support immune health and reduce inflammation. With its delicate texture, cauliflower can be roasted, steamed, sautéed, or even eaten raw in salads and dips, making it a healthy and delicious addition to any meal.",
    image: "./img/product/vegetables/Cauliflower.jpg",
  },
  {
    id: 17,
    title: "Grapes",
    description:
      "Grapes are sweet, juicy fruits that come in a variety of colors, including green, red, purple, and black. They are not only delicious but also packed with health benefits, offering a rich source of vitamins C and K, antioxidants like flavonoids, and beneficial compounds such as resveratrol. Grapes are great for promoting heart health, improving digestion, and providing a natural energy boost. Whether eaten fresh, dried as raisins, or used in juices, wines, and jams, grapes are a versatile and refreshing treat. Their natural sweetness makes them a favorite snack, while their tartness enhances savory and sweet dishes alike.",
    image: "./img/product/fruits/grapes.jpg",
  },
  {
    id: 18,
    title: "Guava",
    description:
      "Guava is a tropical fruit renowned for its sweet, tangy flavor and vibrant color. Packed with nutrients, it is an excellent source of vitamin C, which supports the immune system and promotes healthy skin. Guava is also rich in dietary fiber, aiding digestion and helping to maintain a healthy gut. Its high antioxidant content, including vitamins A and E, helps protect against free radical damage. The fruit's juicy flesh can range in color from pale green to pink, and it can be enjoyed fresh, juiced, or in a variety of culinary dishes such as smoothies, jams, and desserts. The seeds are edible and add a unique crunch, further enhancing the fruit's appeal",
    image: "./img/product/fruits/guava.jpg",
  },
  {
    id: 19,
    title: "Coconut",
    description:
      "Coconuts are tropical fruits known for their versatility and numerous health benefits. The inner fruit contains a refreshing liquid known as coconut water, packed with electrolytes and a great source of hydration. The white flesh, or coconut meat, is rich in healthy fats, fiber, and essential minerals like manganese, copper, and iron. It can be eaten fresh or dried, and is used in a wide range of dishes, from curries to desserts. Coconut oil, derived from the meat, is popular for its use in cooking and skincare due to its nourishing properties. Whether in the form of water, milk, oil, or dried flakes, coconuts provide a unique flavor and a wealth of nutrients.",
    image: "./img/product/fruits/coconut.jpg",
  },
  {
    id: 20,
    title: "Papaya",
    description:
      "Papaya is a tropical fruit celebrated for its sweet, vibrant orange flesh and rich, juicy texture. Known for its tropical flavor, papayas are often enjoyed fresh, in smoothies, or as a topping for salads and desserts. Packed with vitamin C, papayas help boost immunity, improve digestion, and promote healthy skin. The fruit also contains papain, an enzyme that aids in breaking down proteins, making it a natural tenderizer for meats. Additionally, papayas are a good source of fiber, folate, and antioxidants, making them a nutritious addition to any diet.",
    image: "./img/product/fruits/papaya.png",
  },
  {
    id: 21,
    title: "Bitter Gourd",
    description:
      "Bitter gourd, also known as bitter melon or Momordica charantia, is a tropical and subtropical vine widely cultivated for its edible fruit. Known for its distinct, bumpy texture and intensely bitter taste, it is a staple in various Asian, African, and Caribbean cuisines. Rich in nutrients, it is an excellent source of vitamin C, vitamin A, and fiber, along with powerful antioxidants. Bitter gourd is also celebrated for its medicinal properties, particularly its potential to regulate blood sugar levels, making it popular among diabetics. The fruit is often used in stir-fries, curries, or juices and is appreciated for its health benefits despite its bitterness. It thrives in warm climates and grows as a climbing or trailing plant.",
    image: "./img/product/vegetables/BitterGourd.jpg",
  },
  {
    id: 22,
    title: "Lady Finger",
    description:
      "Lady Finger, also known as okra or bhindi, is a nutrient-rich vegetable widely used in cooking around the world. It is known for its elongated, slender, and green pods with a mildly sweet and earthy flavor. Lady Finger is a rich source of dietary fiber, vitamins (like Vitamin C and Vitamin K), and minerals such as potassium and magnesium. It is highly valued for its low calorie content and health benefits, including aiding digestion, promoting heart health, and managing blood sugar levels. The vegetable is versatile and can be used in stir-fries, soups, stews, or pickles. Its slimy texture, when cut, makes it unique, often used as a natural thickener in dishes. Lady Finger is especially popular in South Asian, Middle Eastern, and African cuisines.",
    image: "./img/product/vegetables/lady-finger.jpg",
  },
  {
    id: 23,
    title: "Green Chilli",
    description:
      "Green chili is a versatile spice known for its vibrant flavor and heat. Packed with essential vitamins like C, A, and K, it enhances immunity and promotes overall health. Commonly used in cuisines worldwide, green chilies add a fresh, spicy kick to dishes, from curries to salads. They are also rich in antioxidants, aiding digestion and metabolism. With low calories and high fiber, green chilies are a healthy choice for adding flavor without guilt. Enjoy them fresh, chopped, or blended into sauces to spice up your meals.",
    image: "./img/product/vegetables/green_chilli.jpg",
  },
  {
    id: 24,
    title: "Lemon",
    description:
      "Lemon is a versatile citrus fruit known for its tangy flavor and vibrant yellow color. Rich in vitamin C, antioxidants, and essential nutrients, it supports immune health and promotes hydration. Lemons are widely used in culinary dishes, beverages, and desserts, adding a refreshing zest. Beyond the kitchen, they have applications in skincare, household cleaning, and natural remedies due to their antibacterial and aromatic properties. Originating from Asia, lemons are now cultivated globally, prized for their distinctive flavor and health benefits. Whether juiced, zested, or sliced, lemons are a staple ingredient that enhances both flavor and wellness.",
    image: "./img/product/vegetables/Lemon.png",
  },
  // Add other products here as neededLemon
];

// Function to load product details dynamically
function loadProductDetails(productId) {
  // Find the product by its ID
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Populate the product detail section
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-description").textContent =
      product.description;

    // Show the product detail section
    document.getElementById("product-detail").style.display = "block";
    document.querySelector("section.mb-5").style.display = "none"; // Hide the product list

    // Save state in sessionStorage to show product detail on refresh
    // sessionStorage.setItem("showProductDetail", "true");
    // sessionStorage.setItem("productId", productId);

    // Update the URL with the product ID (without reloading the page)
    window.history.pushState(null, "", `?product=${productId}`);
  }
}

// Event listener for product click
document.querySelectorAll(".product-card").forEach((productElement) => {
  productElement.addEventListener("click", (e) => {
    const productId = parseInt(productElement.getAttribute("data-id"), 10);
    loadProductDetails(productId);
  });
});

// Event listener for going back to the product list
document.getElementById("back-to-products").addEventListener("click", () => {
  document.getElementById("product-detail").style.display = "none";
  document.querySelector("section.mb-5").style.display = "block"; // Show the product list

  // Save state in sessionStorage to show the product list on refresh
  // sessionStorage.setItem("showProductDetail", "false");
  // Update the URL to show the product list (no product ID)
  window.history.pushState(null, "", window.location.pathname);
});

// On page load, check sessionStorage and restore the state
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("product");

  if (productId) {
    loadProductDetails(parseInt(productId, 10));
  } else {
    document.getElementById("product-detail").style.display = "none";
    document.querySelector("section.mb-5").style.display = "block";
  }
};
