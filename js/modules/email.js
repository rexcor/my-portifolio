export default function enviaEmail() {
  const form = document.getElementById("formulario");

  emailjs.init({
    publicKey: "T8Sva13ptiKAjQ5R-",
  });

  window.onload = () => {
    document
      .getElementById("formulario")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_1pvayf4", "template_5ly9jw6", this).then(
          () => {
            event.preventDefault();
            form.reset();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      });
  };
}
