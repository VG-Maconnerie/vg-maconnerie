function ouvrirBatiIA(){

  const mdp = prompt("Mot de passe BATI-IA");

  if(mdp === "Greg2026!"){

     window.location.href =
     "https://vg-maconnerie.github.io/bati-ia/";

  } else {

     alert("Accès refusé");

  }
}