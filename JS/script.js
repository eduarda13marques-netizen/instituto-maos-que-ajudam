var links = document.querySelectorAll(".menu1 a");
var spa = document.getElementById("spa");

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        var pagina = link.getAttribute("href");

        if (pagina == "index.html") {

            spa.innerHTML = `
                <h1>Instituto Mãos que Ajudam</h1>
                <p>Bem-vindo ao nosso instituto.</p>
            `;

        } else if (pagina == "projetos.html") {

            spa.innerHTML = `
                <h1>Nossos projetos</h1>
                <p>Conheça os projetos desenvolvidos pelo Instituto Mãos que Ajudam.</p>
                <h2>Cesta Solidária</h2>
                <p>Arrecadação e distribuição de alimentos para famílias.</p>
            `;

        } else if (pagina == "cadastro.html") {

            spa.innerHTML = `
                <h1>Cadastro de voluntário</h1>
                <p>Preencha seus dados para participar das ações do Instituto.</p>
                <form>
                    <label>Nome:</label>
                    <input type="text">

                    <label>E-mail:</label>
                    <input type="email">

                    <button type="submit">Cadastrar</button>
                </form>
            `;
        }

    });

});