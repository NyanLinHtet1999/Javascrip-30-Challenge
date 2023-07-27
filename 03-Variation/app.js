let inputs = document.querySelectorAll(".controls input");
function changeInput(){
          let surfix = this.name == "color" ? "" : "px";
          document.documentElement.style.setProperty(`--${this.name}`, this.value + surfix);
}
inputs.forEach(input => {
     input.addEventListener("change", changeInput)}
)
inputs.forEach(input => {
     input.addEventListener("mousemove", changeInput)}
)
