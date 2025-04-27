const socialLogos = [
  "delta logo.png",
  "boeing logo.png",
  "boeing logo-1.png",
  "spacex logo.png",
  "IBM logo.png",
  "walmart logo.png",
  "uber logo.png",
  "google logo.png",
  "samsung logo.png",
  "pepsi logo.png",
  "adidas logo.png",
];

const socialContainer = document.getElementById("social-proof");

const logoImages = socialLogos.map((logo) => {
  const img = document.createElement("img");

  img.src = `assets/social-logo/${logo}`;
  img.alt = logo.split(".")[0];
  img.style.width = "140px";
  img.style.maxHeight = "96px";
  img.style.cursor = "pointer";
  //   img.style.margin = "0 10px";
  return img;
});

logoImages.forEach((img) => socialContainer.appendChild(img));
