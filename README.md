# node-express
Simple web node-express
simple make a web
 Website dengan Express
kita akan membuat website yang simpel dan minim script, disini penulis fokus untuk membantu memulai bagaimana membuat website dengan cepat namun powefull.

Ada beberapa metode yang bisa dipakai dalam pembuatan website, bisa http dasar atau dengan platform express yang akan penulis ulas disini. Diambil dari sumbernya http://expressjs.com adalah sbb:

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express adalah kerangka web minimal dan fleksibel yang menyediakan satu set fitur untuk web dan aplikasi mobile.

ExpressJS adalah kerangka web, bisa dibilang paling populer di komunitas NodeJS. Namun ExpressJS bukan kerangka penuh bila dibandingkan dengan kerangka populer dari komunitas lain.

Website dengan express
Berikut adalah implementasi sederhana bagi sobat yang ingin belajar ExpressJS. Sebuah contoh aplikasi website yang dibuat dengan ExpressJs.
 


Script yang dipakai:

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

/* GET home page. */
app.get('/', function(req, res) {
  res.send('<h1>Welcome to ExpressJS!</h1>');
});

/* GET hello route. */
app.get('/hello', function(req, res) {
  res.render('index', {title: 'Welcome', message: 'Hello ExpressJS!'});
});

app.listen(3000);
console.log('Running Express...');

Tampilan hirarki folder lengkap:

 



Script diatas akan berjalan setelah kita membuat folder, file dan modul node.

Okey kita akan ulas step by step.. :)

1. Install Nodejs
Untuk memulai pembuatan website dengan express, butuh instalasi node, nodejs sendiri wadah untuk express bisa bekerja.
Instalasi Nodejs cukup mudah, Di halaman download Nodejs di https://nodejs.org  pilih LTS dan memilih installer yang cocok dengan mesin sobat, jika kurang jelas bisa lihat artikel sebelumya yang pernah diulas.


2. Buat folder dan Install Modul
Setelah instalasi node selesai buat folder dengan nama cobaExpress dan lanjutkan instalasi modul express dan jade

Proses instalasi menggunakan Node Package Manager (NPM) yang sudah satu paket saat kita instalasi node. Kita hanya perlu menambah cmd “npm“ didepan cmd “install”. 

catt: Jangan lupa koneksi internet dibutuhkan untuk mendownload modul express dan template jade 

a. Buka aplikasi Node.js command prompt


b. Buat folder cobaExpress dengan perintah mkdir cobaExpress && cd cobaExpress
jika berhasil, otomatis sobat berada di root folder cobaExpress, perintah mkdir berfungsi untuk membuat folder melalui command prompt windows.

c. Buat file json dengan perintah npm init -yes
    perintah init berfungsi untuk membuat file package.json dan atribut --yes untuk mempercepat proses pembuatan file dengan option yes, sekali jadi.


jika berhasil akan tampil file package di folder cobaExpress
 


d. Masih di node, Install express dengan cmd npm install  express –save, jika berhasil tampilan seperti ini, perintah install digunakan untuk mendownload, menyimpan file di folder modul dan instalasi modul.



e. Masih di node, Install juga modul untuk template dengan cmd  npm install  jade –save, jika berhasil tampilannya seperti ini,


    





Ada tambahan atribut -save dibelakang nama modul, fungsinya untuk kita mendaftarkan modul modul ke package.json. Bila berhasil di file package terdapat dependency Express dan jade. Klik kanan file package klik edit untuk melihat.



f. Jika folder utama sudah dibuat dan modul modul sudah berhasil diinstall kita lanjut membuat script server, jika belum berahasil  sobat bisa cek koneksi internet sobat atau login menggunakan administrator ya... :)


3. Membuat script server
Sobat telah memiliki file package.json, folder cobaExpress dan modul modul yang dibutuhkan untuk membuat website dengan express. 

Kita lanjut membuat script server.js kemudian simpan script di notepad dengan nama server dan exstensi *.js berikut stepnya:

a. Masih di aplikasi Node dan di folder cobaExpress, ketikan perintah  echo.>server.js, perintah ini  membuat file server dengan extensi javascript.
 

jika berhasil akan terlihat file server


b. Buka file server, dengan klik kanan file, klik edit akan tampil notepad

 
dan ketik script dibawah ini :
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Welcome to ExpressJS!</h1>');
});

app.listen (3000,"127.0.0.1");
console.log ( 'Running Ekspres ...');



c. Setelah script lengkap diketik periksa kembali jangan sampai kurang hurup, salah hurup besar kecil bisa menyebapkan error.(kalau mau gampang copas juga bisa.. :)
d. Kembali ke node ketik perintah node server, Jika berhasil akan tampil pesan “Running Ekspress ...”

   Buka browser sobat bisa firefox, lalu ketik di url http://127.0.0.1:3000 lalu enter, akan menampilkan pesan Wellcome ExpressJS! pada browser, yang menandakan kita telah berhasil membuat website dengan express. 



 



4. Membuat route Express
Sekarang mari kita membuat pesan hello express lebih flexibel dimana untuk menampilkan pesan hello expres tidak discript utama namun diletakkan difile kusus yang disimpan difolder kusus pula.

Route express adalah alamat atau link, untuk memulainya Stop server di node dengan menekan bersamaan tuts CTRL dan tuts hurup c, berikut stepnya,


       a.Buka file server dengan klik kanan lalu edit file,     ketikkan script berikut diatas script app.listen,

           /* GET hello route. */
app.get('/hello', function(req, res) {
  res.render('index', {title: 'Welcome', message: 'Hello ExpressJS!'});
});


setelah ditambah script, file server jadinya seperti ini : 


var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

/* GET home page. */
app.get('/', function(req, res) {
  res.send('<h1>Welcome to ExpressJS!</h1>');
});

/* GET hello route. */
app.get('/hello', function(req, res) {
  res.render('index', {title: 'Welcome', message: 'Hello ExpressJS!'});
});
app.listen(3000);
console.log('Running Express...');


        b. Membuat folder Views
            Folder views ada di dalam folder belajar_express.

            Buka aplikasi node, buat folder views dengan    
            perintah mkdir views && cd views
            Buka folder cobaExpress akan tampak folder views

  
 

















      
 







c. Buka folder views, lalu buat file baru, beri  nama   
    index.jade, dengan aplikasi Node, ketikan  
    perintah echo.>index.jade
  


d. Jika berhasil akan tampil file index.jade di folder views, klik kanan file nya, ketik script dibawah ini:



html
  head
    title #{title}
  body
    #container
      p #{message}



Cara kerja script index.jade ini menerima value dari file server, sehingga membuat konten lebih dinamis


Kembali ke Node ketik cmd node server, Jika berhasil akan tampil pesan “Running Ekspress ...”



jalankan http://127.0.0.1:3000/hello pada url browser jika route yang kita buat berhasil  akan tampil hello expressJs
 
