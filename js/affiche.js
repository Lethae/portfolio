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
document.querySelector("#details").innerHTML="<h1>A propos</h1><ol><li>Petite humaine armée d'un crayon et d'une souris qui aime créer des univers.</li> <br/> <i class='fa fa-graduation-cap' aria-hidden='true'></i><li class='study'>A étudié à l'IUT de Haguenau pour obtenir son DUT MMI après un bac S</li> <i class='fa fa-car' aria-hidden='true'></i><li class='study'>Possède le permis B et une voiture ainsi qu'une tablette graphique</li><i class='fa fa-globe' aria-hidden='true'></i><li class='study'>Anglais et Allemand lu, parlé et écrit</li></ol>";
});


/* DETAILS */

/* ELEMENTS GRAPH */

document.querySelector("#elmt_ps").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>Photoshop</h1><ul><li> Créer des maquettes de site web</li><li> Détourer des images et les retoucher</li><li> Créer des illustrations à l'aide d'une tablette graphique</li></ul>";
});

document.querySelector("#elmt_ai").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>Illustrator</h1><ul><li> Créer des logo et des pictogrammes cohérents entre eux</li><li> Respecter les chartes graphiques existantes </li></ul>";
});

document.querySelector("#elmt_id").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>InDesign</h1><ul><li> Mettre en page des documents</li><li> Créer un catalogue</li></ul>";
});

document.querySelector("#elmt_pr").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>Premiere</h1><ul><li> Monter des vidéos courtes à partir de rushs </li><li> Gérer le mixage audio et s'assurer de la qualité de l'image</li></ul>";
});

document.querySelector("#elmt_bl").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>Blender</h1><ul><li> Créer un paysage aléatoire à l'aide de scripts</li><li> Construire des modèles en 3D de bâtiments </li></ul>";
});

/* ELEMENTS CODE */

document.querySelector("#elmt_html").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>HTML</h1><ul><li> Structurer une page web</li><li> Envoyer un site en ligne</li><li> Gérer les tableaux et les formulaires</li></ul>";
});

document.querySelector("#elmt_css").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>CSS</h1><ul><li> Transformer une maquette en page web</li><li> Gérer la mise en page et les placements</li><li> Rendre un site responsive</li></ul>";
});

document.querySelector("#elmt_php").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>PHP</h1><ul><li> Créer une application web de gestion sécurisée avec CRUD</li><li> Créer un mini-chat ou un forum</li><li> Lier le SQL au PHP</li></ul>";
});

document.querySelector("#elmt_sql").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>MySQL</h1><ul><li> Créer une base, des tables et gérer des données</li><li> Faire des jointures et utiliser tout type de requêtes</li></ul>";
});

document.querySelector("#elmt_py").addEventListener('click',function() {
document.querySelector("#details").innerHTML="<h1>Python</h1><ul><li> Ecrire des scripts pour Blender</li></ul>";
});

/* ELEMENTS PORTFOLIO */

document.querySelector("#carre_1-1").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Affiche réalisée dans le cadre d'un projet d'Art en 1ère année de DUT destinée aux portes ouvertes de l'IUT.";
});

document.querySelector("#carre_1-2").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Logo réalisé dans le cadre d'un projet d'Infographie en 1ère année de DUT pour l'ouverture du futur Fabrication Laboratory de Colmar que nous avons décidé de nommer PIC³LAB pour l'exercice.";
});

document.querySelector("#carre_1-3").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Maquette réalisée dans le cadre d'un projet d'Infographie en 1ère année de DUT pour l'ouverture du futur Fabrication Laboratory de Colmar que nous avons décidé de nommer PIC³LAB pour l'exercice.";
});

document.querySelector("#carre_2-1").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="<p>Site web créé dans le cadre d'un projet tutoré de communication de 1ère année de DUT portant sur le tourisme.</p> <p>Notre duo a décidé de retravailler le site du <a href='https://www.wbstudiotour.co.uk/fr/'>Warner Bros London Studio Tour.</a></p>";
});

document.querySelector("#carre_2-2").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="<p>Pictogrammes réalisés dans le cadre d'un cours d'Art en 1ère année de DUT.</p><p>Le but était de montrer notre capacité à créer des pictogrammes en suivant un thème donné pour différents éléments.</p>";
});

document.querySelector("#carre_2-3").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Logo réalisé pour le projet de création d'entreprise de gaming et d'e-sport d'une connaissance.";
});

document.querySelector("#carre_3-1").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Catalogue de vente créé pour l'entreprise d'aquariophilie <a href='http://www.aquarioom.com/fr/'>Aquarioom</a> au cours d'un CDD d'un mois.";
});

document.querySelector("#carre_3-2").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Avatar en flatdesign d'un personnage de jeu vidéo : <a href='http://static.comicvine.com/uploads/original/11123/111236489/4664752-kh3-3.png'>Sora, Kingdom Hearts 2.</a>";
});

document.querySelector("#carre_3-3").addEventListener('mouseover',function() {
document.querySelector("#details").innerHTML="Icône en flatdesign d'une <a href='http://i2.cdscdn.com/pdt2/0/9/7/1/700x700/0711719174097/rw/manette-de-jeu-dualshock-3-noire-ps3.jpg'>manette de PS3.</a>";
});