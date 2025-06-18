
  //Código do Menu lateral
  function openMenuLateral() {
    document.getElementById("menuLateral").style.width = "250px";
    document.getElementById("overlay").classList.add("show");
  }

  function closeMenuLateral() {
    document.getElementById("menuLateral").style.width = "0";
    document.getElementById("overlay").classList.remove("show");
  }


  // Verifica tema salvo no navegador
    if (localStorage.getItem("tema") === "escuro") {
      document.body.classList.add("dark-mode");
    }

    function alternarTema() {
      document.body.classList.toggle("dark-mode");
      // Salva a preferência
      const temaAtual = document.body.classList.contains("dark-mode") ? "escuro" : "claro";
      localStorage.setItem("tema", temaAtual);
    }