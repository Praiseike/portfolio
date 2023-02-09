<!DOCTYPE html>
<html lang="en_US">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ibangha Ike | Portfolio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="./assets/css/main.css">
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
</head>
<body id="particles-js">
    <div class="preloader-overlay">
        <div class="component preloader">
            <div class="preloader-bar">
                <div class="preloader-fill"></div>
            </div>
            <h1 class="percentage">0%</h1>
        </div>
    </div>
    <div>
        <div class="blur">
            <div class="main container">
                <div class="component-container">
                    <div class="component mb-3" id="interaction">
                        <div id='typewriter'></div>
                    </div>                          
                </div>
                <div class="component container d-none animate__animated animate__fadeInUp" id="skills">
                    <strong><h4>-- My Skills --</h4></strong>
                    <hr>
                    <div class="d-flex justify-content-start">
                        <div class="me-4">
                            <p class="text-success">Front End</p>
                            <ul>
                                <li>HTML5</li>
                                <li>JS</li>
                                <li>CSS</li>
                                <li>Bootstrap 5</li>
                                <li>React</li>
                                <li>tailwind css</li> 
                            </ul>
                        </div>

                        <div class="ms-4">
                            <p class="text-success">Back End</p>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>REST API</li>
                            </ul>
                        </div>

                        <div class="ms-4">
                            <p class="text-success">General Programming</p>
                            <ul>
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>Bash</li>
                                <li>x86 Assembly</li>
                            </ul>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <button id="exp-btn" class="button">continue</button>
                    </div>
                </div>
                <div class="component d-none animate__animated animate__fadeInUp" id="experience">
                    
                </div>
            </div>
        </div>
    </div>
    <script src="./assets/js/particles.js-master/particles.min.js"></script>
    <script src="./assets/js/script.js"></script>
</body>
</html>