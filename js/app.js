document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open')
    })
});