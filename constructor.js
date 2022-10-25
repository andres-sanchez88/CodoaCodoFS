document.getElementById("idHeader").innerHTML = `
<navbar class="navbar_r" id="navbar_main">
<div class="navbar_links">
    <a href=aprendizaje.html>APRENDIZAJE</a>
    <a href=tests.html>TESTS</a>
</div>
<div class="home">
    <a href=index.html>NEWS</a>
</div>
<div class="burger">
    <a href="javascript:void(0);" class="menu_icon" onclick="menuBurger()">
      <div id="burger_icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
</div>
</navbar>
<div class="banner">
<div class="banner_text">
    <h1>Certifica-T</h1>
    <h4>Demostra lo que sabes</h4>
</div>
</div>
`

document.getElementById("burger_main").innerHTML = `
<div class="navbar_links_r" >
<a href=aprendizaje.html>APRENDIZAJE</a>
<a href=tests.html>TESTS</a>
</div>
<div class="context">
<a href=aprendizaje-linux.html>Linux</a>
<a href=aprendizaje-bash.html>Bash</a>
<a href=aprendizaje-docker.html>Docker</a>
</div> 
`

document.getElementById("idFooter").innerHTML = `
<div class="footer_fade">
</div>
<div class="footer_container">
    <div class="foot_flex">
    <h4 class="foot_title">PARTNERS</h4>
    <ul class="simple_list">
        <li><a href="https://www.w3schools.com/">W3 Schools</a></li>
        <li><a href="https://quizapi.io/">QuizAPI</a></li>
        <li><a href="https://formspree.io/">formSPREE</a></li>
    </ul>
    </div>
    <div class="foot_flex">
    <h4 class="foot_title">LEGALES</h4>
    <ul class="simple_list">
        <li>Terminos de Uso</li>
        <li>Privacidad</li>
        <li>Política de cookies</li>
    </ul>
    </div>
    <div class="foot_flex">
    <h4 class="foot_title">CONTACTO</h4>
    <ul class="fa-ul">
        <li><span class="fa-li"><i class="fa-solid fa-square-envelope"></i></span><a href="contacto.html">Mail</a></li>
        <li><span class="fa-li"><i class="fa-brands fa-square-twitter"></i></span><a href="https://twitter.com/certificateok">Twitter</a></li>
        <li><span class="fa-li"><i class="fa-brands fa-linkedin"></i></span><a href="https://www.linkedin.com/in/andres-sanchez88/">Linkedin</a></li>
        <li><span class="fa-li"><i class="fa-brands fa-square-github"></i></span><a href="https://github.com/andres-sanchez88">Github</a></li>
    </ul>
    </div>
</div>
`