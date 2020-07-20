window.addEventListener('DOMContentLoaded', start);

    class TypeWriter {
        constructor(txtElement, words) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            //index of the the current string being typedout
            this.wordIndex = 0;
            //method type()
            this.type();

        }


        type() {
            //the number 40 is how fast the characters are typed on screen
            const typing = setTimeout(() => this.type(), 20)
            //current index of words
            const current = this.wordIndex % this.words.length;
            //get full text of current word
            const fullTxt = this.words[current];
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            // insert txt into element
            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
            //select pencil icon for writting animation
            const typingElement = document.querySelector('.material-icons');
            document.querySelector('.material-icons').className = "material-icons";
            // if word is complete, stop typing and fade pencil
            if (this.txt === fullTxt) {
                typingElement.className += ' fade'
                clearInterval(typing)
            }
        }
    }

    //Init App
    function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        new TypeWriter(txtElement, words);
    }


    intro = function() {
        const body = document.querySelector('body')
        body.innerHTML = ` 
        <style>
  @import url(https://fonts.googleapis.com/css?family=Indie+Flower);

  body {
    margin: 0;
    padding: 0;
    background: black;
    animation: fade 3s forwards;
  }

    @keyframes fade {
    0% {
      opacity: 0;
      z-index: -1;
      display: none;
    }

    100% {
      opacity: 1;
      z-index: 2;
      display: block;
    }
  }

  .paper {
    position: absolute;
    height: 550px;
    width: 450px;
    background: rgba(19, 9, 9, 0.9);
    margin: -275px -225px;
    left: 50%;
    top: 55%;
    box-shadow: 0px 0px 5px 0px #888;
  }

  .paper::before {
    content: '';
    position: absolute;
    left: 45px;
    height: 100%;
    width: 2px;
    background: white;
  }

  .lines {
    margin-top: 40px;
    height: calc(100% - 40px);
    width: 100%;
    background-image: repeating-linear-gradient(black 0px, 24px, darkorange 25px);
  }

  .text {
    color: white;
    position: absolute;
    top: 65px;
    left: 55px;
    bottom: 10px;
    right: 10px;
    line-height: 25px;
    font-family: 'Indie Flower';
    overflow: hidden;
    outline: none;
  }

  h2 {
    margin: 0;
  }

  .fade {
    opacity: 0;
    transition: 1s linear;
  }

  .btn {
    position: fixed;
    width: 100vw;
    height: 3.5rem;
    /* bottom: 0; */
    /* margin-bottom: 2rem; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: darkorange;
    opacity: 0.5;
    transition: 1s linear;
  }

  .btn:hover {
    opacity: 0.8;
  }

  button {
    padding: 0.6rem;
    border-radius: 35px;
    background-color: darkorange;
    outline: none;
    border: none;
    margin: 1rem;
    color: white;
    width: 7rem;
    opacity: 1;
  }

  button:hover {
    border: 1px solid darkorange;
    background-color: black;
    color: darkorange;
    transition: 0.7s linear;
  }
  a{
    color: darkorange;
  }
</style>

  <div class="paper">
    <div class="lines">
      <div class="text" spellcheck="true">
        <h2 style="transition: 1s;">hi</h2> <br />
        <span class="txt-type" data-wait="2500"
          data-words="[&quot; &nbsp;&nbsp;I am Anthony, a Frontend developer with a passion to innovate, create and design Softwares for mass usage. <br> &nbsp;&nbsp; Am currently a student of the University of Lagos studying computer Engineering, when am not engaged in school activities I run a company Called <a href='http://thekrom.tech'>KROMTECH</a>, in which i lead a group of student developers to solve student related issues with technology, due to this have grained knowledge in different tech stack ranging from Javascript(and it's frameworks) for web to Dart(Flutter) for Mobile and ocassionally nodejs and mongoDB for backend and databases. I also occassionally volunteer, tutor and mentor in various tech events <br> &nbsp;&nbsp; During my free-time you would catch me watching animes or just reading more programming related books  &quot;]">
          <span class="txt"></span></span> <span class="material-icons">edit</span>
        </span>
      </div>
    </div>
  </div>
  <div class="btn">    
    <div onClick='load()'><button>Menu</button></div>
    <div onClick='exp()'><button>Experience</button></div>
  </div>
        `
    init()
    }

function start() {
    const body = document.querySelector('body')
    body.innerHTML = `
     <style>
    body {
      font-family: 'Galada', cursive;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      /* background-color: blueviolet; */
      overflow: hidden;
      align-items: center;
      justify-content: center;
      transition: 1s ease;
      background-color: rgb(5, 5, 5);

    }

    main {
      background-color: rgb(5, 5, 5);
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 35px;
      box-shadow: 2px 3px 19px 2px;
      transition: 5s;
    }

    main p {

      text-align: center;
      font-size: 20rem;
      padding: 2rem;
      /* margin: 0; */
      margin-left: auto;
      margin-right: auto;
      text-shadow: 1px -1px 9px;
      color: darkorange;
      transition: 5s;
    }

    .di {
      font-size: 15rem;
      -webkit-text-stroke-color: darkorange;
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-fill-color: rgb(8, 8, 8);
      border-radius: 50px;
      animation: fade 2s forwards linear;
      transition: 2s linear;
    }
    @keyframes fade {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

    .wrapper {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 874px) {
      .di {
        font-size: 10rem;
      }}
    @media screen and (max-width: 614px) {
      .di {
        font-size: 7rem;
      }
    }
    @media screen and (max-width: 430px) {
      .di {
        font-size: 5rem;
      }
    }
  </style>

  <div class="wrapper">
    <main>
      <p id="draw" class="di">welcome</p>
    </main>
  </div>
    `

}

    

function load() {
    const body = document.querySelector('body')
    body.innerHTML = ` 
<style>
  body {
    font-family: 'Galada', cursive;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  article {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    z-index: 1;
  }

  article .gri {
    background-color: darkorange;
    width: 100%;
    height: 20vh;
  }

  .five {
    transform: translateY(-500%);
    animation: slide 1s forwards;
  }

  .four {
    transform: translateY(-500%);
    animation: slide 1s 0.4s forwards;
  }

  .three {
    transform: translateY(-500%);
    animation: slide 1s 0.6s forwards;
  }

  .two {
    transform: translateY(-500%);
    animation: slide 1s 0.8s forwards;
  }

  .one {
    transform: translateY(-500%);
    animation: slide 1s 1s forwards;
  }

  @keyframes slide {
    0% {
      transform: translateY(-500%);
    }

    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideLeft {
    0% {
      transform: translateX(500%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  main {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: darkorange;
    z-index: 2;
    animation: fade 3.5s 1s both;
    text-align: center;
    display: flex;
    justify-content: center;
    transition: 5s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      z-index: -1;
      display: none;
    }

    100% {
      opacity: 1;
      z-index: 2;
      display: block;
    }
  }




  /* ================================== */
  .nav-item {
    padding: 1rem;
    padding-left: auto;
    padding-right: auto;
    color: white;
    /* margin: 1rem; */
    /* background-color: white; */
    /* width: 20vw; */
    text-align: center;
    font-size: 20px;
    z-index: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: 0.9s;
  }

  .nav-item:hover {
    color: black;
    padding: 1rem;
    background-color: white;
    text-align: center;
    border-radius: 15px;
    font-size: 23px;
    z-index: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }



  .aside {
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: 5s linear;
    animation: slideLeft 2s 1.5s forwards;

  }
</style>
      
      
      
<article>
  <div class="gri one"></div>
  <div class="gri two"></div>
  <div class="gri three"></div>
  <div class="gri four"></div>
  <div class="gri five"></div>
</article>
<main>
  <div class="aside nav">

    <h1>Hello</h1>
    <p class="nav-item" onClick='intro()'><span class="nav-name">About Me</span></p>
    <p class="nav-item" onClick='exp()'><span class="nav-name">Experience</span></p>
    <p class="nav-item"><span class="nav-name">Projects</span></p>
    <p class="nav-item"><span class="nav-name">Contact</span></p>
    <p class="nav-item"><span class="nav-name">Resume</span></p>
  </div>
</main>
`

}

function exp() {
  const body = document.querySelector('body')
  body.innerHTML = ` 
    <style>
    body {
      font-family: 'Galada', cursive;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: black;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      transition: width 1s ease;
        animation: fade 3s forwards;

    }

        @keyframes fade {
    0% {
      opacity: 0;
      z-index: -1;
      display: none;
    }

    100% {
      opacity: 1;
      z-index: 2;
      display: block;
    }
  }

    .card {
      background-color: darkorange;
      padding: 1px;
      width: 200px;
      height: 63px;
      border-radius: 2px;
      box-shadow: 2px 3px 1px white;
      transition: 10s;
      margin: 5px;
      text-align: center;
      transition: 2s ease;
    }

    .card:hover {
      padding: 5px;
      width: fit-content;
      height: fit-content;
      transition: 2s ease;
    }

    main {
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
      margin: auto 0px;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    a{
      text-decoration: underline;
      text-emphasis: none;
      color: black;
    }
    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li{
      border: 1px solid ;
      margin: 5px 0px;
      padding: 0;
    }
      .btn {
    position: fixed;
    width: 100vw;
    height: 3.5rem;
    /* bottom: 0; */
    /* margin-bottom: 2rem; */
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: darkorange;
    opacity: 0.5;
    transition: 1s linear;
  }

  .btn:hover {
    opacity: 0.8;
  }

  button {
    padding: 0.6rem;
    border-radius: 35px;
    background-color: darkorange;
    outline: none;
    border: none;
    margin: 1rem;
    color: white;
    width: 7rem;
    opacity: 1;
  }

  button:hover {
    border: 1px solid darkorange;
    background-color: black;
    color: darkorange;
    transition: 0.7s linear;
  }
  </style>

    <div class="btn">
      <div onclick="intro()"><button>About Me</button></div>
      <div onClick='load()'><button>Menu</button></div>      
      <div><button>Projects</button></div>
    </div>
  <main>
    <div class="card">
      <h3>Founder of Kromtech</h3>
      <p>Kromtech is a Startup that builds applications and softwares for student Usage</p>
      <p>Created and maintained several web applications while working with a team of individuals to ensure optimal run-time functionalities and speed </p>
    </div>

    <div class="card">
      <h3>Tutor and Mentor</h3>
      <p>Taught various students from different discipline front-end develop at both <a href="http://ecx.website">ECX</a> and <a href="https://dscunilag.dev/">DSC Unilag</a> </p>
      <p>Mentored a Group of 22 individuals in frontend development during the Google Africa Developer Scholarship (GADS2020) </p>
    </div>

    <div class="card">
      <h3>Freelancer</h3>
      <p>Occasional take on frontend development gigs ranging from volunteering to build sites for NGO's to paid part-time gigs </p>
    </div>

    <div class="card">
      <h3>Hackacthons</h3>
      <p>Participated in various hackathons, innovative challenges and coding competition</p>
      <ul>
        <li>Open Hack Week (Built a member management web service for Interswitch groups)</li>
        <li>Data for Goverance (Created a system to help with Urban planning using ML and Data Visualization.)</li>
        <li>Rave With Flutterwave (Built a platform where students could get Tutors online and make payments to such tutor )</li>
        <li>Fsi.ng (Tried to improve the current KYC process using AI)</li>
        <li>Stack REform (Created an ML model that checked</li>
        etc
      </ul>
    </div>

  </main>



  `
}
setTimeout(load, 2300)