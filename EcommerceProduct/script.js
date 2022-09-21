import {productList, shopping, usefullinks, featuresList, socialMediaIcons} from "./data.js";

(function () {
  "use strict";
  let currentProduct = productList[1];

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

  function mainSection(currentProduct) {
    const eyeIcon = `\u{1F441}`;
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
    const phoneName = createH1(currentProduct.productName);

    const productDetails = createDiv("product-details");
    const milesWay = createSpan("San Jose, CA-5 miles way");
    const view = createSpan(`${eyeIcon} 14,323 Viewed`);
    productDetails.append(milesWay, view);

    const descText = createPara(currentProduct.productDesc);

    phoneDesc.append(phoneName, productDetails, descText);
    const hr = createHrTag();
    const hr1 = createHrTag();

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
    const form = createForm();
    const head = createDiv();
    const title = createPara(currentProduct.productPrice);
    head.append(title);

    const [colorDiv, optionDiv] = [createDiv(), createDiv()];
    const colorLabel = createLabel(`Color: Grey`, "color");
    let label, colorOption;
    let currentColor;

    currentProduct.productColorVariants.forEach((color) => {
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
    const form = createForm("form");
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
    const h3 = createH3("About the Product");

    const h31 = createH3("Seller details");

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

    const similarProdcts = createH2("Similar Items");

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

    featuresList.forEach((feature) => {
      single_feature = createDiv();
      fe_icon = createSVG(feature.icon);
      fe_disc = createDiv("fe_disc");
      fe_title = createH3(feature.name);
      fe_content = createPara(feature.desc);

      fe_disc.append(fe_title, fe_content);
      single_feature.append(fe_icon, fe_disc);
      features_list.append(single_feature);
    });

    return features_list;
  }

  function wrapper(text, usefullinks) {
    const wrapper = createDiv();
    const wrapper_heading = createH3(text);

    const wrapper_links = createDiv();

    usefullinks.forEach((links) => {
      const a = createAnchor(`${links}`);
      wrapper_links.append(a);
    });

    wrapper.append(wrapper_heading, wrapper_links);

    return wrapper;
  }

  function footerSection() {
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

  function createH3(text) {
    const newh3 = document.createElement("h3");
    newh3.append(createTextNode(text));
    return newh3;
  }

  function createHrTag() {
    return document.createElement("hr");
  }

  function createImage(text, url) {
    const newImage = document.createElement("img");
    newImage.src = url ?? "#";
    newImage.alt = text ?? "";
    return newImage;
  }

  function createH1(text) {
    const phoneName = document.createElement("h1");
    phoneName.append(createTextNode(text));
    return phoneName;
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
    newPara.append(createTextNode(text));
    return newPara;
  }

  function createForm(text) {
    const newForm = document.createElement("form");
    text ? newForm.classList.add(text) : 0;
    return newForm;
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
  const body = document.querySelector('#body')
  body.append(headerSection(), mainSection(currentProduct), footerSection());

  document.addEventListener("DOMContentLoaded", () => {
    const productItems = [...document.querySelectorAll(".product-card")];
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
      }
    });
    
    const searchItem = () => {
      const searchBox = document.querySelector("input[type=search]");
      
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
    let show = document.createElement("div");
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
    show.append(offerBox())
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
