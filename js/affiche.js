document.querySelector("#pushgraph").onclick = function() {
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
document.querySelector("#details").innerHTML="PERSO Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});


/* DETAILS */

/* ELEMENTS GRAPH */

document.querySelector("#elmt_ps").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PHOTOSHOP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_ai").addEventListener('click',function() {
document.querySelector("#details").innerHTML="ILLUSTRATOR Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_id").addEventListener('click',function() {
document.querySelector("#details").innerHTML="INDESIGN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_pr").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PREMIERE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_bl").addEventListener('click',function() {
document.querySelector("#details").innerHTML="BLENDER Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

/* ELEMENTS CODE */

document.querySelector("#elmt_html").addEventListener('click',function() {
document.querySelector("#details").innerHTML="HTML Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_css").addEventListener('click',function() {
document.querySelector("#details").innerHTML="CSS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_php").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PHP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_sql").addEventListener('click',function() {
document.querySelector("#details").innerHTML="SQL Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
});

document.querySelector("#elmt_py").addEventListener('click',function() {
document.querySelector("#details").innerHTML="PYTHON Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil inventore pariatur aut alias quam, delectus impedit laborum nam molestiae magni fuga repudiandae dolores quo fugit qui nostrum a in, laudantium!";
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