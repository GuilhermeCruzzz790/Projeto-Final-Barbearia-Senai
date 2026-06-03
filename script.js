document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("Email").value.trim();
    const telefone = document.getElementById("Telefone").value.trim();
    const duvidas = document.getElementById("duvidas").value.trim();

    if (!nome || !email || !telefone || !duvidas) {
        alert("Por favor, preencha todos os campos antes de enviar!");
        return;
    }

    // Se tudo estiver preenchido, envia o formulário
    alert("Formulário enviado com sucesso!");
    this.submit();
});