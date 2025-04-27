const featuresData = async () => {
  const response = await fetch("/data/features.json");
  const data = await response.json();
  displayFeaturesData(data);
};

const displayFeaturesData = (data) => {
  const featuresCardContainer = document.querySelector(
    ".features-cards-container"
  );

  //   console.log(featuresCardContainer);
  if (data.length === 0) {
    return "";
  } else {
    data.forEach((singleData) => {
      //   console.log(singleData.icon);
      const featuresCard = document.createElement("div");
      featuresCard.classList.add("features-card");
      featuresCard.innerHTML = `
            <img src="${singleData.icon}" alt="${singleData.title}" class="features-card-image" />
            <div class="features-card-content">
              <h3 class="features-card-title">${singleData.title}</h3>
              <p class="features-card-description">${singleData.description}</p>
            </div>
          `;
      featuresCardContainer.appendChild(featuresCard);
    });
  }
};

const featureAccordionData = async () => {
  const response = await fetch("/data/featuresAccordion.json");
  const data = await response.json();
  displayFeatureAccordionData(data);
};

const displayFeatureAccordionData = (data) => {
  const featureAccordionContainer = document.querySelector(
    ".second-f-section-aside"
  );
  featureAccordionContainer.innerHTML = ""; // Clear previous content
  // console.log(featureAccordionContainer);
  if (data.length === 0) {
    return "";
  } else {
    data.forEach((item) => {
      const featureAccordionCard = document.createElement("div");
      featureAccordionCard.classList.add("second-f-section-card");
      featureAccordionCard.innerHTML = `
            <div class="second-f-section-accordion">
          <h3>${item?.title}</h3>
          <p>${item?.description}</p>
        </div>
          `;
      featureAccordionContainer.appendChild(featureAccordionCard);
    });
  }
};

const testimonialData = async () => {
  const response = await fetch("/data/testimonial.json");
  const data = await response.json();
  displayTestimonialData(data);
};

const displayTestimonialData = (data) => {
  const testimonialCardContainer = document.querySelector(
    ".testimonial-card-container"
  );
  // console.log(data);
  if (data.length === 0) {
    return "";
  } else {
    data.forEach((item) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testimonial-card");
      testimonialCard.innerHTML = `
              <div class="testimonial">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">${item?.comment}</p>
                <div class="user-info">
                  <img src="${item?.profile_image}" alt="User">
                  <div class="user-details">
                    <h4>${item?.author}</h4>
                    <p>${item?.designation}</p>
                  </div>
                </div>
              </div>
        `;
      testimonialCardContainer.appendChild(testimonialCard);
    });
  }
};

featuresData();
featureAccordionData();
testimonialData();
