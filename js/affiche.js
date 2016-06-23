document.querySelector("#pushgraph").onclick = function () {
if (window.getComputedStyle(document.querySelector('#graph')).display=='none'){
document.querySelector("#graph").style.display="block";
document.querySelector("#pushgraph").style.boxShadow="0px 0px 10px #FFC107";
document.querySelector("#code").style.display="none";
} else {
 document.querySelector("#pushgraph").style.boxShadow=" 0px 0px 10px #3E7F9E inset";
document.querySelector("#graph").style.display="none";
}
}

document.querySelector("#pushcode").onclick = function() {
if (window.getComputedStyle(document.querySelector('#code')).display=='none'){
document.querySelector("#code").style.display="block";
document.querySelector("#pushcode").style.boxShadow="0px 0px 10px #FFC107";
document.querySelector("#graph").style.display="none";
} else {
document.querySelector("#code").style.display="none"; document.querySelector("#pushcode").style.boxShadow="0px 0px 10px #3E7F9E inset";
}
}

document.querySelector("#pushfolio").onclick = function() {
if (window.getComputedStyle(document.querySelector('#portfolio')).display=='none'){
document.querySelector("#portfolio").style.display="block";
document.querySelector("#portfolio").style.animation="anim 1s 10ms normal ease-out forwards";    
} else {
document.querySelector("#portfolio").style.display="none"; 
}
}

document.querySelector("#pushperso").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<li>Petite humaine armée d'un crayon et d'une souris qui aime donner un peu de piment à la réalité avec son imagination !</li> <li><i class='fa fa-graduation-cap' aria-hidden='true'></i>A étudié à l'IUT de Haguenau pour obtenir son DUT MMI après un bac S</li> <li><i class='fa fa-globe' aria-hidden='true'></i>Parle, écrit et comprend l'Anglais et l'Allemand.</li>";
});


/* DETAILS */

/* ELEMENTS GRAPH */

document.querySelector("#elmt_ps").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Créer des maquettes de site web</li><li> Détourer des images et les retoucher</li><li> Créer des illustrations à la tablette graphique</li></ul>";
});

document.querySelector("#elmt_ai").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Créer des logo et des pictogrammes cohérents entre eux</li><li> Respecter les chartes graphiques existantes </li></ul>";
});

document.querySelector("#elmt_id").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Mettre en page des documents</li><li> Créer un magazine</li></ul>";
});

document.querySelector("#elmt_pr").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Monter des vidéos courtes à partir de rushs </li><li> Gérer le mixage audio s'assurer de la qualité de l'image</li></ul>";
});

document.querySelector("#elmt_bl").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Créer un paysage aléatoire à l'aide de scripts</li><li> Construire des modèles en 3D de bâtiments </li></ul>";
});

/* ELEMENTS CODE */

document.querySelector("#elmt_html").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Structurer une page web</li><li> Envoyer un site en ligne</li><li> Gérer les tableaux et les formulaires</li></ul>";
});

document.querySelector("#elmt_css").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Transformer une maquette en page web</li><li> Gérer la mise en page et les placements</li><li> Rendre un site responsive</li></ul>";
});

document.querySelector("#elmt_php").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Créer une application web de gestion avec CRUD sécurisée</li><li> Faire un mini-chat ou forum</li><li> Lier le SQL au PHP</li></ul>";
});

document.querySelector("#elmt_sql").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Créer une base, des tables et gérer des données</li><li> Faire des jointures et utiliser tout type de requêtes</li></ul>";
});

document.querySelector("#elmt_py").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<ul><li> Faire des petits scripts pour Blender</li></ul>";
});

/* ELEMENTS PORTFOLIO */

document.querySelector("#carre_1-1").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_1-2").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_1-3").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_2-1").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_2-2").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_2-3").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_3-1").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_3-2").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#carre_3-3").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PORT9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});



/*
var p = document.createElement("p");
p.innerHTML = "New";
p.style.fontSize = "4em";
document.querySelector("#graph").appendChild(p);*/