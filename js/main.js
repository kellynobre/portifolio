// Função para lidar com o envio do formulário
document
  .querySelector(".formulario-contato")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Cria um objeto com os dados do formulário
    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value,
    };

    // Obtém os dados existentes do local storage (se houver)
    const existingData =
      JSON.parse(localStorage.getItem("contact_messages")) || [];

    // Adiciona o novo objeto ao array existente
    existingData.push(formData);

    // Converte o array para JSON
    const jsonData = JSON.stringify(existingData);

    // Armazena o JSON no local storage
    localStorage.setItem("contact_messages", jsonData);

    // Exibe uma mensagem de sucesso (você pode personalizar isso conforme necessário)
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  });
