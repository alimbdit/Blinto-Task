const accordion = document.getElementsByClassName("contentbx");

console.log(accordion);

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
