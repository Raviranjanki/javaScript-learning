(function () {
  const productList = [
    {
      productImage: "./images/Rectangle.jpg",
      productName: "Apple Iphone 11 Pro",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productColorVariants: ["Grey", "Red", "Green", "Gold"],
      productPrice: "$1050",
    },
    {
      productImage: "./images/Rectangle-1.jpg",
      productName: "Apple Iphone 10 Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$1050",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 10 Pro",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$950",
    },
    {
      productImage: "./images/Rectangle-3.jpg",
      productName: "Apple Iphone 10 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$1050",
    },
    {
      productImage: "./images/Rectangle-1.jpg",
      productName: "Apple Iphone 11 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$750",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 12 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$950",
    },
    {
      productImage: "./images/Rectangle.jpg",
      productName: "Apple Iphone 11 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$950",
    },
    {
      productImage: "./images/Rectangle-1.jpg",
      productName: "Apple Iphone 13 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$650",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 11 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$950",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 14 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$850",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 14 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$850",
    },
    {
      productImage: "./images/Rectangle-2.jpg",
      productName: "Apple Iphone 14 Pro Max",
      productDesc: `
        The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device
         with a touchscreen interface. The iPhone
         runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB 
         of storage and a 12-megapixel camera. `,
      productPrice: "$850",
    },
  ];

  function headerSection() {
    const headerTag = document.createElement("header");
    const option = createSelect(["All Products"]);
    const search = createInput("Search item...");
    search.type = "search";
    const button = createButton("Start Selling Now");
    const searchDiv = createDiv("option-search");
    searchDiv.classList.add("search-phone");
    searchDiv.append(option, search);
    headerTag.append(searchDiv, button);

    return headerTag;
  }

  function mainSection() {
    const mainTag = document.createElement("main");
    const createdSection = createSection("phone-container");
    const phoneImage = createDiv("phone-images");

    productList.forEach((image, index) => {
      if (index > 3) {
        return;
      }
      const img = createImage(image.productName, image.productImage);
      phoneImage.append(img);
    });

    const phoneDesc = createDiv("phone-description");
    const phoneName = document.createElement("h1");
    const phoneNameText = createTextNode(productList[2].productName);
    phoneName.appendChild(phoneNameText);

    const productDetails = createDiv("product-details");
    const milesWay = createSpan("San Jose, CA-5 miles way");
    const view = createSpan("\u{1F441} 14,323 Viewed");
    productDetails.append(milesWay, view);

    const descText = createPara(productList[2].productDesc);

    phoneDesc.append(phoneName, productDetails, descText);
    const hr = document.createElement("hr");
    const hr1 = document.createElement("hr");

    phoneDesc.append(orderProduct(phoneDesc));

    createdSection.append(phoneImage, phoneDesc);
    mainTag.append(
      createdSection,
      hr,
      similarProducts(),
      hr1,
      provideServices()
    );
    return mainTag;
  }

  function orderProduct(phoneDesc) {
    const form = document.createElement("form");
    const head = createDiv();
    const title = createPara(productList[0].productPrice);
    head.append(title);

    const [colorDiv, optionDiv] = [createDiv(), createDiv()];
    const colorLabel = createLabel(`Color: Grey`, "color");
    let label, colorOption;
    const numberOfColor = ["Grey", "Red", "Green", "Gold"];

    productList[0].productColorVariants.forEach((color) => {
      colorOption = createRadio(color, color, "color");
      label = createLabel("", color);
      label.style.backgroundColor = color;
      label.style.outlineColor = color;
      currentColor = color;
      optionDiv.append(colorOption, label);

      label.addEventListener("click", () => {
        colorLabel.innerText = `Color: ${color}`;
      });
    });

    colorDiv.append(colorLabel, optionDiv);

    const deliveryDiv = createDiv();
    const label_delivery = createLabel("Delivery");

    const div_delivery_option = createDiv("delivery-option");
    const opt_pickup = createRadio("Store Pickup", "order-pickup", "delivery");
    opt_pickup.setAttribute("checked", "checked");
    const label_pickup_opt = createLabel("Store Pickup", "order-pickup");
    const opt_delivery = createRadio("Delivery", "order-delivery", "delivery");
    const label_delivery_opt = createLabel("Delivery", "order-delivery");

    div_delivery_option.append(
      opt_pickup,
      label_pickup_opt,
      opt_delivery,
      label_delivery_opt
    );
    deliveryDiv.append(label_delivery, div_delivery_option);

    const [quantitySection, selectQuantity] = [createDiv(), createDiv()];
    const [quantityText, minusQuantity, plusQuantity] = [
      createPara("Quantity"),
      createSpan("\u2212"),
      createSpan("+"),
    ];
    const quantity = createInput("0", "quantity");
    quantity.setAttribute("readonly", "readonly");

    selectQuantity.append(minusQuantity, quantity, plusQuantity);
    quantitySection.append(quantityText, selectQuantity);

    plusQuantity.addEventListener("click", (e) => {
      counter(e, quantity, quantity.value);
    });
    minusQuantity.addEventListener("click", (e) => {
      counter(e, quantity, quantity.value);
    });

    const delivery_charges = createDiv();
    const delivery = createSpan("Delivery");
    const delivery_charges_price = createSpan("$40");
    const delivery_time = createSpan("(2-3 bussiness days, $40 shipping)");
    delivery_charges.append(delivery, delivery_charges_price, delivery_time);

    const btnDiv = createDiv();
    const [submit, offer] = [createInput(), createInput()];
    submit.type = "submit";
    submit.value = "Buy Now";
    offer.type = "button";
    offer.value = "Make an Offer";

    btnDiv.append(submit, offer);
    form.append(head, colorDiv, deliveryDiv);
    form.append(quantitySection, delivery_charges, btnDiv);

    form.addEventListener("submit", (e) => {
      orderProductDetails(e);
    });
    offer.addEventListener("click", (e) => {
      phoneDesc.append(offerBox(e));
      e.target.disabled = true;
    });
    return form;
  }

  function offerBox(e) {
    const form = document.createElement("form");
    form.classList.add("form");
    const head = createDiv();
    const title = createPara("Make Offer");
    const cross = createSpan("\u2716");
    head.append(title, cross);

    const input_offer = createInput("Enter your offer", "offer");
    const label_delivery = createLabel("Delivery");

    const div_delivery_option = createDiv("delivery-option");
    const opt_pickup = createRadio("Store Pickup", "Store", "delivery");
    opt_pickup.setAttribute("checked", "checked");
    const label_pickup_opt = createLabel("Store Pickup", "Store");
    const opt_delivery = createRadio("Delivery", "delivery", "delivery");
    const label_delivery_opt = createLabel("Delivery", "delivery");

    div_delivery_option.append(
      opt_pickup,
      label_pickup_opt,
      opt_delivery,
      label_delivery_opt
    );

    const label_delivery_to = createLabel("Delivery to");
    const input_delivery_address = createInput(
      "San Jose, CA-5 miles way",
      "address"
    );

    const delivery_charges = createDiv();
    const delivery = createSpan("Delivery");
    const delivery_charges_price = createSpan("$40");
    const delivery_time = createSpan("(2-3 bussiness days, $40 shipping)");
    delivery_charges.append(delivery, delivery_charges_price, delivery_time);

    const label_payment = createLabel("Payment");

    const div_payment_option = createDiv("delivery-option");
    const opt_online = createRadio("Online", "online", "payment");
    const label_online_opt = createLabel("Online", "online");
    const opt_offline = createRadio("Pay in Person", "offline", "payment");
    opt_offline.setAttribute("checked", "checked");
    const label_offline_opt = createLabel("Pay in Person", "offline");
    div_payment_option.append(
      opt_online,
      label_online_opt,
      opt_offline,
      label_offline_opt
    );

    const submit = createButton("Submit Offer");

    form.append(
      head,
      input_offer,
      label_delivery,
      div_delivery_option,
      label_delivery_to
    );
    form.append(
      input_delivery_address,
      delivery_charges,
      label_payment,
      div_payment_option,
      submit
    );

    form.addEventListener("submit", makeOffer);
    cross.addEventListener("click", () => {
      form.remove();
      e.target.disabled = false;
    });
    return form;
  }

  function similarProducts() {
    const aboutSeller = createSection("about-seller");
    const h3 = document.createElement("h3");
    const h3Text = document.createTextNode("About the Product");
    h3.append(h3Text);
    const h31 = document.createElement("h3");
    const h31Text = document.createTextNode("Seller details");
    h31.append(h31Text);

    const sellersProfile = createDiv("sellers-profile");
    const profileImage = createImage("sellerIimage", "./images/Rectangle.jpg");

    const sellerInfo = createDiv("seller-info");
    const storeName = createPara("@store-name");
    const ratingReview = createDiv("rating-review");
    const rating = createSpan("4.9");
    const reviews = createSpan("(14,565)");
    ratingReview.append(rating, reviews);
    const sellerAddress = createPara("San Jose, CA-5 miles way");
    sellerInfo.append(storeName, ratingReview, sellerAddress);

    const remainingItem = createDiv("remaining-item");
    remainingItem.append(createPara("1,578"), createPara("Items for Sales"));

    const itemsSold = createDiv("item-sold");
    itemsSold.append(createPara("15,165"), createPara("total Sales"));

    const sellerContactInfo = createDiv("seller-contact");
    const btn_contact = createButton("Contact");
    const btn_visit = createButton("Visit Store");
    sellerContactInfo.append(btn_contact, btn_visit);

    sellersProfile.append(
      profileImage,
      sellerInfo,
      remainingItem,
      itemsSold,
      sellerContactInfo
    );

    const similarProdcts = document.createElement("h2");
    similarProdcts.append(createPara("Similar Items"));

    const similarItems = createDiv("similar-items");
    productList.forEach((product) => {
      similarItems.appendChild(productCard(product));
    });
    aboutSeller.append(h3, h31, sellersProfile, similarProdcts, similarItems);

    return aboutSeller;
  }

  function productCard(product) {
    const productContainer = createDiv("product-card");
    const productImage = createImage(
      `${product.productName}`,
      `${product.productImage}`
    );
    const productName = createH2(`${product.productName}`);
    const productDetails = createDiv("product-details");
    const milesWay = createSpan("5 miles way");
    const view = createSpan("14,323 Viewed");
    productDetails.append(milesWay, view);
    const productPrice = createSpan(`${product.productPrice}`);
    productContainer.append(
      productImage,
      productName,
      productDetails,
      productPrice
    );
    return productContainer;
  }

  function provideServices() {
    const shopping = [
      "Electronics",
      "Vacancies",
      "Real State",
      "Vehicles",
      "Other Services",
      "Free Stuffs",
    ];
    const usefullinks = [
      "Home",
      "About Us",
      "Terms and Conditions",
      "FAQ",
      "Privacy Policies",
      "Shipping & Returns",
      "Contact Us",
    ];
    const features = createSection("features");
    const features_container = createDiv("features-container");

    features_container.append(singleFeature());
    features.append(features_container);
    features_container.append(wrapper("Online Shopping", shopping));
    features_container.append(wrapper("Useful Links", usefullinks));
    features.append(features_container);
    return features;
  }

  function singleFeature() {
    const features_list = createDiv("features_list");
    let single_feature, fe_icon, fe_disc, fe_title, fe_content;
    const featuresList = [
      {
        icon: "M17 8h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2v3h4v-.285L18.992 10H17z",
        name: "Fast & Free delivery",
        desc: "Free delivery for all orders over $200",
      },
      {
        icon: "M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2zM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9",
        name: "Money back guarantee",
        desc: "We return money within 30 days",
      },
      {
        icon: "M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306 5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z",
        name: "24/7 customer support",
        desc: "Friendly 24/7 customer support",
      },
    ];

    featuresList.forEach((feature) => {
      single_feature = createDiv();
      fe_icon = createSVG(feature.icon);
      fe_disc = createDiv("fe_disc");
      fe_title = document.createElement("h4");
      fe_title.append(createTextNode(feature.name));
      fe_content = createPara(feature.desc);

      fe_disc.append(fe_title, fe_content);
      single_feature.append(fe_icon, fe_disc);
      features_list.append(single_feature);
    });

    return features_list;
  }

  function wrapper(text, usefullinks) {
    const wrapper = createDiv();
    const wrapper_heading = document.createElement("h4");
    wrapper_heading.append(createTextNode(text));

    const wrapper_links = createDiv();

    usefullinks.forEach((links) => {
      const a = createAnchor(`${links}`);
      wrapper_links.append(a);
    });

    wrapper.append(wrapper_heading, wrapper_links);

    return wrapper;
  }

  function footerSection() {
    const socialMediaIcons = [
      "M23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11.75v-9h-3v-3.75h3v-3c0-3.1 1.963-4.625 4.728-4.625c1.324 0 2.463.099 2.794.142v3.24l-1.917.001c-1.504 0-1.855.715-1.855 1.763v2.479h3.75L19.5 15h-3l.06 9H23a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1",
      "M24 4.309a9.83 9.83 0 0 1-2.828.775a4.94 4.94 0 0 0 2.165-2.724a9.865 9.865 0 0 1-3.127 1.196a4.925 4.925 0 0 0-8.39 4.49A13.974 13.974 0 0 1 1.671 2.9a4.902 4.902 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829a4.964 4.964 0 0 1-2.224.085a4.93 4.93 0 0 0 4.6 3.42a9.886 9.886 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01c0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.309",
      "M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036c-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85c3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.433a2.063 2.063 0 1 1 0-4.13a2.065 2.065 0 0 1 0 4.13zM7.12 20.45H3.558V8.997H7.12V20.45zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z",
      "M17.318.077c1.218.056 2.06.235 2.838.537a5.36 5.36 0 0 1 1.956 1.274a5.36 5.36 0 0 1 1.274 1.956c.302.779.481 1.62.537 2.838C23.992 8.192 24 8.724 24 12s-.008 3.808-.077 5.318c-.056 1.218-.235 2.06-.537 2.839a5.36 5.36 0 0 1-1.274 1.955a5.359 5.359 0 0 1-1.956 1.274c-.779.302-1.62.481-2.838.537c-1.51.069-2.041.077-5.318.077c-3.277 0-3.809-.008-5.318-.077c-1.218-.056-2.06-.235-2.839-.537a5.359 5.359 0 0 1-1.955-1.274a5.36 5.36 0 0 1-1.274-1.956c-.302-.779-.481-1.62-.537-2.838C.008 15.81 0 15.278 0 12c0-3.277.008-3.81.077-5.318c.056-1.218.235-2.06.537-2.838a5.36 5.36 0 0 1 1.274-1.956A5.36 5.36 0 0 1 3.843.614C4.623.312 5.464.133 6.682.077C8.19.008 8.722 0 12 0c3.277 0 3.81.008 5.318.077zM12 2.667c-3.24 0-3.736.007-5.197.074c-.927.042-1.483.16-1.994.359c-.435.17-.712.35-1.036.673c-.324.324-.504.601-.673 1.036c-.198.51-.317 1.067-.359 1.994C2.674 8.264 2.667 8.76 2.667 12s.007 3.736.074 5.197c.042.927.16 1.483.359 1.993c.17.436.35.713.673 1.037c.324.324.601.504 1.036.673c.51.198 1.067.317 1.994.359c1.462.067 1.958.074 5.197.074c3.24 0 3.735-.007 5.197-.074c.927-.042 1.483-.16 1.994-.359c.435-.17.712-.35 1.036-.673c.324-.324.504-.601.673-1.036c.198-.51.317-1.067.359-1.994c.067-1.462.074-1.958.074-5.197s-.007-3.735-.074-5.197c-.042-.927-.16-1.483-.359-1.993a2.709 2.709 0 0 0-.673-1.037A2.708 2.708 0 0 0 19.19 3.1c-.51-.198-1.067-.317-1.994-.359c-1.461-.067-1.957-.074-5.197-.074zm0 15.555a6.222 6.222 0 1 1 0-12.444a6.222 6.222 0 0 1 0 12.444zm0-2.666a3.556 3.556 0 1 0 0-7.112a3.556 3.556 0 0 0 0 7.112zm6.222-8.445a1.333 1.333 0 1 1 0-2.667a1.333 1.333 0 0 1 0 2.667z",
      "M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32c.935.004 1.876.125 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11",
    ];
    const footer = document.createElement("footer");
    const copyRight = createDiv();
    const copyRightText = createSpan("copyright 2021. All right reserved");
    copyRight.append(copyRightText);

    const socialMedia = createDiv();

    socialMediaIcons.forEach((icon) => {
      socialMedia.append(createSVG(icon));
    });

    footer.append(copyRight, socialMedia);

    return footer;
  }
  function createSVG(icon) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", icon);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "rgb(59, 131, 238)");

    svg.appendChild(path);
    const link = createAnchor();
    link.append(svg);
    return link;
  }

  function createImage(text, url) {
    var newImage = document.createElement("img");
    newImage.src = url ?? "#";
    newImage.alt = text ?? "";
    return newImage;
  }

  function createTextNode(text) {
    return document.createTextNode(text ?? "");
  }

  function createAnchor(text, href) {
    const newAnchor = document.createElement("a");
    newAnchor.append(createTextNode(text));
    newAnchor.href = href ?? "#";
    return newAnchor;
  }

  function createH2(text) {
    const newH2 = document.createElement("h2");
    newH2.append(createTextNode(text));
    return newH2;
  }

  function createPara(text) {
    const newPara = document.createElement("p");
    const textNode = createTextNode(text);
    newPara.appendChild(textNode);
    return newPara;
  }

  function createLabel(text, target) {
    const newLabel = document.createElement("label");
    target ? newLabel.setAttribute("for", target) : 0;
    newLabel.appendChild(createTextNode(text));
    return newLabel;
  }

  function createSpan(text) {
    const newSpan = document.createElement("span");
    newSpan.append(createTextNode(text));
    return newSpan;
  }

  function createDiv(text) {
    const newDiv = document.createElement("div");
    text ? newDiv.classList.add(text) : 0;
    return newDiv;
  }

  function createSection(text) {
    const newSection = document.createElement("section");
    text ? newSection.classList.add(text) : 0;
    return newSection;
  }

  function createInput(placeholder, name) {
    const newInput = document.createElement("input");
    placeholder ? (newInput.placeholder = placeholder) : 0;
    name ? (newInput.name = name) : 0;
    return newInput;
  }
  function createRadio(value, id, name) {
    const newRadio = document.createElement("input");
    newRadio.type = "radio";
    value ? (newRadio.value = value) : 0;
    id ? (newRadio.id = id) : 0;
    name ? (newRadio.name = name) : 0;
    return newRadio;
  }
  function createButton(text) {
    const newButton = document.createElement("button");
    newButton.append(createTextNode(text));
    return newButton;
  }
  function createSelect(values) {
    if (!values) {
      return;
    }
    const newSelect = document.createElement("select");
    let newOption, textNode;
    values.forEach((value) => {
      newOption = document.createElement("option");
      textNode = document.createTextNode(value);
      newOption.append(textNode);
      newSelect.appendChild(newOption);
    });
    return newSelect;
  }

  document.body.append(headerSection(), mainSection(), footerSection());

  document.addEventListener("DOMContentLoaded", () => {
    const images = [...document.querySelectorAll("img")];
    let show = document.createElement("div");
    let show_image = document.createElement("img");

    images.forEach((image) => {
      image.addEventListener("click", () => {
        show_image.src = `${image.getAttribute("src")}`;
        show.className = "modal";
        zoomInBy(1.5);
        show.append(show_image);

        document.body.appendChild(show);
      });
    });

    function zoomInBy(y, x = 0) {
      if (x < y) {
        x += 0.1;
        show_image.style.transform = `scale(${x})`;
        setTimeout(() => zoomInBy(y, x), 1);
      }
    }
    show.addEventListener("click", (event) => {
      if (event.target != show_image) {
        show.remove();
        exit_button.remove();
      }
    });

    const searchItem = () => {
      const searchBox = document.querySelector("input[type=search]");
      const productItems = [...document.querySelectorAll(".product-card")];
      let toBeSearch;
      searchBox.addEventListener("keyup", (e) => {
        toBeSearch = searchBox.value.toUpperCase();
        productItems.forEach((productItem) => {
          let match = productItem.getElementsByTagName("h2")[0];
          if (match) {
            let txtValue = match.innerText || match.textContent;
            if (txtValue.toUpperCase().includes(toBeSearch)) {
              productItem.style.display = "";
            } else {
              productItem.style.display = "none";
            }
          }
        });
        if (e.key == "Enter") {
          document
            .querySelector(".similar-items")
            .previousSibling.scrollIntoView();
        }
      });
    };
    searchItem();
  });

  function makeOffer(e) {
    e.preventDefault();
    let offer, deliveryType, deliveryTo, paymentMode;
    e.target.elements.offer ? (offer = e.target.elements.offer.value) : 0;
    e.target.elements.delivery
      ? (deliveryType = e.target.elements.delivery.value)
      : 0;
    e.target.elements.address
      ? (deliveryTo = e.target.elements.address.value)
      : 0;
    e.target.elements.payment
      ? (paymentMode = e.target.elements.payment.value)
      : 0;

    if (!(offer, deliveryType && deliveryTo && paymentMode)) {
      alert("Please enter/select all the feild");
      return;
    }

    alert(`
        offer = ${offer ?? "empty"}
        deliveryType = ${deliveryType ?? "empty"}
        deliveryTo = ${deliveryTo ?? "empty"}
        paymentMode = ${paymentMode ?? "empty"}
        `);
  }
  function orderProductDetails(e) {
    e.preventDefault();
    let deliveryType, quantity, color;
    deliveryType = e.target.elements.delivery.value;
    quantity = e.target.elements.quantity.value;
    color = e.target.elements.color.value;
    if (!(deliveryType && quantity && color)) {
      alert("Please enter/select all the feild");
      return;
    }
    const currentButton = document.activeElement;
    currentButton.disabled = true;

    alert(`
        deliveryType = ${deliveryType ?? "empty"}
        Quantity = ${quantity ?? "empty"}
        Color = ${color ?? "empty"}
        `);
  }

  function counter(e, quantity, currentQuantity) {
    if (e.target.textContent == "+") {
      quantity.value = ++currentQuantity;
      return;
    }
    if (currentQuantity <= 0) return;
    quantity.value = --currentQuantity;
  }
})();
