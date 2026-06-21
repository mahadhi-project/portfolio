/* Scroll Reveal */

.hidden{

opacity:0;

transform:translateY(50px);

transition:all 1s ease;

}

.show{

opacity:1;

transform:translateY(0);

}


/* Floating Photo */

.hero img{

animation:float 4s ease-in-out infinite;

}

@keyframes float{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-12px);
}

100%{
transform:translateY(0);
}

}


/* Card Hover */

.card{

transition:.3s;

}

.card:hover{

transform:translateY(-10px);

box-shadow:0 10px 30px rgba(212,175,55,.25);

}


/* Certificate Hover */

.cert img{

transition:.3s;

}

.cert img:hover{

transform:scale(1.05);

}


/* Button Hover */

.btn{

transition:.3s;

}

.btn:hover{

transform:translateY(-4px);

}
