document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formOrcamento");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector("input[type='text']").value;
    const telefone = form.querySelector("input[type='tel']").value;
    const servico = form.querySelector("select").value;
    const descricao = form.querySelector("textarea").value;

    const mensagem =
      `Olá, meu nome é ${nome}%0A` +
      `Quero orçamento para: ${servico}%0A` +
      `Descrição: ${descricao}%0A` +
      `Meu WhatsApp: ${telefone}`;

    const numeroEmpresa = "5586999999999"; // Troque pelo número real do cliente

    window.open(`https://wa.me/${numeroEmpresa}?text=${mensagem}`, "_blank");
  });
});
