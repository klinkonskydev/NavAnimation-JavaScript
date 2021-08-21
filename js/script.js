const html = 
`
<h2>Cool</h2>
<nav class="top">
  <div class="dropdownBackground">
    <span class="arrow"></span>
  </div>

  <ul class="cool">
    <li>
      <a href="#">About Me</a>
      <div class="dropdown dropdown1">
        <div class="bio">
          <img src="./assets/MyPhoto.jpg" width="100px" height="100px">
          <p>Klinkonsky developer! I start my studying with front end developer in 15/01/2021</p>
        </div>
      </div>
    </li>
    <li>
      <a href="#">Courses</a>
      <ul class="dropdown courses">
        <li>
          <span class="code">RFB</span>
          <a href="https://ReactForBeginners.com">React For Beginners</a>
        </li>
        <li>
          <span class="code">ES6</span>
          <a href="https://ES6.io">ES6 For Everyone</a>
        </li>
        <li>
          <span class="code">NODE</span>
          <a href="https://LearnNode.com">Learn Node</a>
        </li>
        <li>
          <span class="code">STPU</span>
          <a href="https://SublimeTextBook.com">Sublime Text Power User</a>
        </li>
        <li>
          <span class="code">WTF</span>
          <a href="http://Flexbox.io">What The Flexbox?!</a>
        </li>
        <li>
          <span class="code">GRID</span>
          <a href="https://CSSGrid.io">CSS Grid</a>
        </li>
        <li>
          <span class="code">LRX</span>
          <a href="http://LearnRedux.com">Learn Redux</a>
        </li>
        <li>
          <span class="code">CLPU</span>
          <a href="http://CommandLinePowerUser.com">Command Line Power User</a>
        </li>
        <li>
          <span class="code">MMD</span>
          <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Other Links</a>
      <ul class="dropdown dropdown3">
        <li><a class="button" href="https://twitter.com/klinkonskydev" target="_blank" >Twitter</a></li>
        <li><a class="button" href="https://github.com/klinkonskydev?tab=repositories" target="_blank" >GitHub</a></li>
        <li><a class="button" href="https://www.linkedin.com/in/klinkonsky/" target="_blank" >Linkedin</a></li>
      </ul>
    </li>
  </ul>
</nav>

<style>
html {
box-sizing: border-box;
font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
}

*, *:before, *:after {
box-sizing: inherit;
}

body {
margin: 0;
min-height: 100vh;
background:
  linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
  linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
  linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
  linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}

h2 {
margin-top: 0;
padding-top: .8em;
}

nav {
position: relative;
perspective: 600px;
}

.cool > li > a {
color: yellow;
text-decoration: none;
font-size: 20px;
background: rgba(0,0,0,0.2);
padding: 10px 20px;
display: inline-block;
margin: 20px;
border-radius: 5px;
}

nav ul {
list-style: none;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
}

.cool > li {
position: relative;
display: flex;
justify-content: center;
}

.dropdown {
opacity: 0;
position: absolute;
overflow: hidden;
padding: 20px;
top: -20px;
border-radius: 2px;
transition: all 0.5s;
transform: translateY(100px);
will-change: opacity;
display: none;
}

.trigger-enter .dropdown {
display: block;
}

.trigger-enter-active .dropdown {
opacity: 1;
}

.dropdownBackground {
width: 100px;
height: 100px;
position: absolute;
background: #fff;
border-radius: 4px;
box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
transition: all 0.3s, opacity 0.1s, transform 0.2s;
transform-origin: 50% 0;
display: flex;
justify-content: center;
opacity: 0;
}

.dropdownBackground.open {
opacity: 1;
}

.arrow {
position: absolute;
width: 20px;
height: 20px;
display: block;
background: white;
transform: translateY(-50%) rotate(45deg);
}

.bio {
min-width: 500px;
display: flex;
justify-content: center;
align-items: center;
line-height: 1.7;
}

.bio img {
float: left;
margin-right: 20px;
}

.courses {
min-width: 300px;
}

.courses li {
padding: 10px 0;
display: block;
border-bottom: 1px solid rgba(0,0,0,0.2);
}

.dropdown a {
text-decoration: none;
color: #ffc600;
}

a.button {
background: black;
display: block;
padding: 10px;
color: white;
margin-bottom: 10px;
}

/* Matches Twitter, TWITTER, twitter, tWitter, TWiTTeR... */
.button[href*=twitter] { background: #019FE9; }
.button[href*=facebook] { background: #3B5998; }
.button[href*=courses] { background: #ffc600; }
</style>

`;

document.querySelector('body').innerHTML = html;


  const triggers = document.querySelectorAll('.cool > li')
  const background = document.querySelector('.dropdownBackground')
  const nav = document.querySelector('.top')

  function handleEnter() {
    
    this.classList.add('trigger-enter');
    setTimeout(() => { this.classList.add('trigger-enter-active') }, 160);
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown');
    
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    
    const coords = {
      width: dropdownCoords.width,
      height: dropdownCoords.height,

      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

  };

  function handleLeave() {
    
    setTimeout(() => { this.classList.remove('trigger-enter', 'trigger-enter-active') }, 10);
    background.classList.remove('open');
    
  };

  triggers.forEach( trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach( trigger => trigger.addEventListener('mouseleave', handleLeave));