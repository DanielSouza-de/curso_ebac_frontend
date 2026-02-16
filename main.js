document.addEventListener('DOMContentLoaded', function() {

    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/DanielSouza-de')
        .then(res => res.json())
        .then(json => {
            nome.textContent = json.name;
            usuario.textContent = json.login;
            avatar.src = json.avatar_url;
            repositorio.textContent = json.public_repos;
            seguidores.textContent = json.followers;
            seguindo.textContent = json.following;
            link.href = json.html_url;
        });
});
