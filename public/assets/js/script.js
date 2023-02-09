window.onload = () => {

  var container = document.querySelector('.main');
  const createWriter = (id,options = null) => {
    var app = document.getElementById(id);
    if(options === null)
      var writer = new Typewriter(app, {loop: false,delay: 10,cursor: "█"});
    else
      var writer = new Typewriter(app, {loop: false,delay: options.delay,cursor: "|"});
    return writer;
  }

  const hello = (writer) => {
    writer
      .pauseFor(2500)
      .typeString('Hello,')
      .pauseFor(500)
      .typeString('<br>My name is <span style="color: #27ae60;">Ibangha Ike</span>')
      .pauseFor(500)
      .typeString("<br>I'm a Backend Web Developer using PHP/<span class='text-danger' >Laravel 9</span>")
      .pauseFor(500)
      .typeString("<br>Welcome to my portfolio. ")
      .pauseFor(1000)
      .start()
      .callFunction(() => displaySkills(writer));

  }

  const scroll = () => {
    document.querySelector('.main').scrollBy(0,200);
  }

  const displaySkills = (writer) => {
    setTimeout(() => {
      document.querySelector('#skills').classList.remove('d-none');
    },1000);

    document.querySelector('#exp-btn').addEventListener('click', () => {
      displayExp(createWriter('experience'));
    });
  }

  const displayExp = (writer,callback) => {
    setTimeout(() => {
      document.querySelector('#experience').classList.remove('d-none');
      scroll();
    },199);


    writer
      .typeString("<strong><h4>-- Working Experience --</h4></strong><hr><br>")
      .pauseFor(100)
      .callFunction(() => { setTimeout(scroll,2000)})
      .typeString(`
        <ul>
          <li>
            <span class='text-success'>Backend Web Developer at Digi Essentials</span><br>
            <strong>Duration: </strong> 3 years<br>
            <a href="https://www.digi-essentials.com">Digi Essentials</a>
            <p>At Digi Essentials,I engineered modern software applications with PHP(Laravel, codeigniter, plain), MySQL, JavaScript, HTML, CSS, Bootstrap.</p>
            <p>I also actively participated in the development process of multiple software applications and websites that used REST APIs.</p>
          </li>
          <li>
            <span class='text-success'>Backend Web Developer at Empowered Blockchain Firm</span><br>
            <strong>Duration: </strong> 8 months<br>
            <p>Back at EMBF, I built applications that interfaced with blockchain technologies like crypto wallets on certain Blockchains</p>
          </li>
        </ul>
        `)
      .start();

    document.querySelector('#exp-btn').addEventListener('click', () => {
    });
  }

  const phaseThree = (writer) => {
    console.log("something happened not too long ago so go over there and check it out");
  }


  hello(createWriter('typewriter'));

  particlesJS("particles-js",{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
}

