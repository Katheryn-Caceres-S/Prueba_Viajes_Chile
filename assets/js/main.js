 
  /* alert("ayuda");
  */

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  $("#btn").click(function(){
    alert("Correo Enviado correctamente. Pronto te contactaremos.")
});