document.addEventListener("DOMContentLoaded", function () {
  const botaoEnviar = document.querySelector('button[type="submit"]');

  botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    const nome = document.getElementById("fname").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Função para exibir qualquer mensagem (erro ou sucesso)
    function mostrarMensagem(texto) {
      const msg = document.createElement("div");
      msg.textContent = texto;
      msg.classList.add("mensagem-sucesso"); // usa o mesmo estilo visual
      document.body.appendChild(msg);

      // Remove após 6 segundos com transição suave
      setTimeout(() => {
        msg.classList.add("fade-out");
        setTimeout(() => msg.remove(), 1000);
      }, 6000);
    }

    // Validação dos campos
    if (!nome || !sobrenome || !email || !telefone || !assunto || !mensagem) {
      mostrarMensagem("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Valida formato do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      mostrarMensagem("Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).");
      return;
    }

    // Se tudo estiver certo, limpa os campos
    document.getElementById("fname").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("assunto").value = "";
    document.getElementById("mensagem").value = "";

    mostrarMensagem("Mensagem enviada com sucesso!");
  });
});
