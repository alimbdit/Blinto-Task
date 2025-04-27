const htmlLoader = async (url, elementId) => {
  try {
    const response = await fetch(url);
    const htmlComponent = await response.text();
    // console.log(htmlComponent);
    const element = document.getElementById(elementId);
    element.innerHTML = htmlComponent;
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
};

htmlLoader(
  "/components/StatisticsSection/statistics.html",
  "statistics-container"
);

htmlLoader(
  "/components/SecondFeatureSection/secondFeature.html",
  "second-features-container"
);
htmlLoader(
  "/components/TestimonialsSection/testimonial.html",
  "testimonial-container"
);
htmlLoader("/components/OfficeSection/office.html", "office-container");
htmlLoader(
  "/components/DownloadAppSection/downloadApp.html",
  "download-app-container"
);
