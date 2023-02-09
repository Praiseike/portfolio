<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});


Route::get("/picker",function () {
    return response("
        <html>
            <style>
                body{
                    background-color: black;
                }
                input{
                    margin-top: 100px;
                    width: 100px;
                    height: 100px;
                }
            </style>
            <body>
                <center>
                    <input type='color' value='#000000'>
                </center>
            </body>
            <script>
                document.querySelector('input').onchange = 
                function onChange(e){
                    document.body.style.background = e.target.value;
                }
            </script>
        </html>
        ");
});