(function () {
    const raiz = document.documentElement;
    const guardado = localStorage.getItem("tema");

    if (guardado === "oscuro") {
        raiz.setAttribute("data-tema", "oscuro");
    } else if (guardado === "claro") {
        raiz.setAttribute("data-tema", "claro");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        raiz.setAttribute("data-tema", "oscuro");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const boton = document.getElementById("boton-tema");
        if (!boton) return;

        actualizarTexto(boton);

        boton.addEventListener("click", function () {
            const actual = raiz.getAttribute("data-tema");
            const nuevo = actual === "oscuro" ? "claro" : "oscuro";
            raiz.setAttribute("data-tema", nuevo);
            localStorage.setItem("tema", nuevo);
            actualizarTexto(boton);
        });
    });

    function actualizarTexto(boton) {
        const actual = raiz.getAttribute("data-tema");
        boton.textContent = actual === "oscuro" ? "☀️ Modo claro" : "🌙 Modo oscuro";
    }
})();