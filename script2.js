const timeline = document.getElementById("timeline");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupImages = document.getElementById("popupImages");
const imagePopup = document.getElementById("imagePopup");
const popupContent = document.getElementById("popupContent");
// Ejemplo de datos de la línea de tiempo con títulos y descripciones
const timelineData = [
  { date: "01-08-2023", title: "Evento 1", description: "Descripción del Evento 1", images: ["image/curso1.jpg", "image/curso2.jpg"]},
  { date: "10-08-2023", title: "Evento 2", description: "Curso de guardia de seguridad", images: ["image/17 agosto/003.jpg", "image/17 agosto/002.jpg","image/17 agosto/003.jpg", "image/17 agosto/002.jpg","image/17 agosto/003.jpg", "image/17 agosto/002.jpg"] },
  { date: "18-08-2023", title: "Evento 3", description: "Curso de guardia de seguridad", images: ["image/17 agosto/004.jpg", "image/17 agosto/005.jpg"] },
  { date: "????-??-??", title: "??????", description: "x", images: ["image/fondolimpio.jpg"] }



  // Agrega más datos de fechas, títulos, descripciones e imágenes aquí
];
timelineData.forEach(item => {
  const timelineBox = document.createElement("div");
  timelineBox.classList.add("timeline-box");
  timelineBox.textContent = item.date;
  timelineBox.onclick = () => showImagePopup(item);
  timeline.appendChild(timelineBox);
});
function showImagePopup(data) {
  popupTitle.textContent = data.title;
  popupDescription.textContent = data.description;

  const imagesHTML = data.images.map(image => `<img src="${image}" alt="Imagen">`).join("");
  popupImages.innerHTML = imagesHTML;

  imagePopup.style.display = "flex";
}
function closeImagePopup() {
    imagePopup.style.display = "none";
    popupContent.innerHTML = "";
  }