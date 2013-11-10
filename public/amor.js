var mainDiv = $('<div id="relajo"></div>');
$('body').prepend(mainDiv);

var play = function (media) {
  if (typeof media != "string") {
    media = escape(media);
  }
  var node = document.getElementsByTagName('video')[0];
  if (node) { node.parentNode.removeChild(node); }
  node = document.createElement('video');
  node.src = media;
  node.play(media);
}

var say = function (message, lang) {
  return "http://translate.google.com/translate_tts?tl=" + escape(lang) + "&q=" + escape(message);
}

var say2 = function (message, lang) {
  return "http://api.voicerss.org/?key=5d47a543b0234e5193343c02a18fa646&src=" + escape(message) + "&hl=" + escape(lang);
}

var funWith = function (videoName) {
    switch(videoName) {
    case 'sangre':
      url = "https://dl.dropboxusercontent.com/s/4z9xzlgdji4l0jy/sangre_azteca.mp3?token_hash=AAEmIKu02v5-XGZ1K5WGN3aeoqWLXUsCH9FztiNb79Cxog&dl=1"
      break;
    case 'aythami-politono':
      url = "https://dl.dropboxusercontent.com/s/73cj4imsdgnqqye/aythami.mp3?token_hash=AAHQ45dHh64Uya7g8E8k1ZIZv-55svIPwL-ARds2AqSI5w&dl=1"
      break;
    case 'trambolico':
      url = "https://dl.dropboxusercontent.com/s/7h7pbov0wldfrtf/trambolico.mp3?token_hash=AAFlyqv4X0faef-QktM9mHsjUnkeqG2batu3bOBCSpibdQ&dl=1"
      break;
    case 'wasa':
      url = "https://dl.dropboxusercontent.com/s/w0babx8ryo9faf7/wasa.ogg?token_hash=AAHblPmSSqlCs9FAzJPUdiAQAKRsT9LJXoy44ePWGaROTQ&dl=1"
      break;
    case 'ay':
      url = "https://dl.dropboxusercontent.com/s/7mn6jc3vi3s3a9d/ay.ogg?token_hash=AAEcABNfD14Uq6X9g7-6kxbjjfboTAX5YQKJhnzC0AZlUw&dl=1"
      break;
    case 'masia':
      url = "https://dl.dropboxusercontent.com/s/su3a1xysq8xhgm8/masia.mp4?token_hash=AAEPuEAyXf53Dr6oApTWvw3IAyO-Ab5u0TUgD4deEF3OvA&dl=1"
      break;
    case 'stand_up':
      url = "https://dl.dropboxusercontent.com/s/5tajdexgxckmjok/stand_up.ogg?token_hash=AAHVWFCUKFBVks9Xqe64lWe_QB0ndog4CcoBiUiIaM-epQ&dl=1"
      break;
    case 'habba':
      url = "https://dl.dropboxusercontent.com/s/vie9duqkcvabact/habababa.mp3?token_hash=AAFeRRAjzKCh3q4TrTVlIz5laWZ8EaX_VC42Md2K9db0_A&dl=1"
      break;
    case 'tito':
      url = "https://dl.dropboxusercontent.com/s/qedw5yliimgprfj/tito.ogg?token_hash=AAHY5VTnBsbwZOmg5xy7CW0WwOH6D2ZrB-qs2bXpbQptiQ&dl=1"
      break;
    case 'truck':
      url = "http://static1.grsites.com/archive/sounds/vehicle/vehicle051.mp3"
      break;
    case 'fua':
      url = "https://dl.dropboxusercontent.com/s/3xug80ncxubpp68/fua.mp3?token_hash=AAFi2TCzKNzS5Gk6PPP60Og5NFPBkX4LEcAHX6lQPHB7Qw&dl=1"
      break;
    case 'tijera':
      url = "https://dl.dropboxusercontent.com/s/ylw5yzgngxj909q/mira_la_tijera.mp3?token_hash=AAFOGDNMqndnWXP48ggv2Smdla0InF1cPsDqXwLUcVQJLw&dl=1"
      break;
    case 'bendicion':
      url = "https://dl.dropboxusercontent.com/s/pe6ipaqeu0nyci2/que_dios_te_bendiga.mp3?token_hash=AAH-kcTwE_p33TzpNu71VvAhb_rLDSw-r9DeY-DqveArbg&dl=1"
      break;
    case 'corto':
      url = "https://dl.dropboxusercontent.com/s/34e7zv8izfp0b3t/corto.mp3?token_hash=AAHmEHer2VM7yB36n_0BQU2hRvTvOhv8hz1yVbpKl-u4VA&dl=1"
      break;
    case 'como_yo_quiero':
      url = "https://dl.dropboxusercontent.com/s/2vbfhc5v3edff2a/como_yo_quiero.mp3?token_hash=AAFeI7pKy9ORevbF7HnpGktKfHyHvjoGe-J4N5Vn_L60uw&dl=1"
      break;
    case 'subir_y_bajar':
      url = "https://dl.dropboxusercontent.com/s/uvcebsio5ts2a21/subir_y_bajar.mp3?token_hash=AAF6wlVFSOALXNIWoIvWa_xCkElttFrDIo21IIYUqWzyYg&dl=1"
      break;
    case '60_80':
      url = "https://dl.dropboxusercontent.com/s/owoo0u3mwxcga8t/60_80.mp3?token_hash=AAGGMqqAADDzZS0M1F8RikXx-tVLx0ODwbJc3IvmDB-QzQ&dl=1"
      break;
    case 'esta_ahi':
      url = "https://dl.dropboxusercontent.com/s/zimjl0kg9dllv97/esta_ahi.mp3?token_hash=AAG8UcHn2sDrRAP3i1AghjNkVbufma2vGzkB7AjQyaN9Yg&dl=1"
      break;
    case 'bukake':
      url = "https://dl.dropboxusercontent.com/s/uwwvqkbi0rfc607/bukake.mp3?token_hash=AAFjRRGV4bmR0VDJ-8ukkKasnXkN1P9BhzXbxst89X7N0g&dl=1"
      break;
    case 'cafe_con_leche':
      url = "https://dl.dropboxusercontent.com/s/x6r9pl7tnc2clor/cup_of_coffee.mp3?token_hash=AAE_W8Yi2gTvCahy07Xep-BE3mSm2rFxUEJDfJBp5no1Gg&dl=1"
      break;
    case 'no_listen':
      url = "https://dl.dropboxusercontent.com/s/4zemx0s5d1xh3tk/no_listen_the_ask.mp3?token_hash=AAEQxXCpgNYGOhya4WrzW97LF0lPhcRhqAd3FemT51wEig&dl=1G"
      break;
    case 'loka':
      url = "https://dl.dropboxusercontent.com/s/grg80jggiepfzef/loka.mp3?token_hash=AAH0GM7IFLBoeqO6t4G7WHiqlIYSDbu3P2ICWFzJkMAkVA&dl=1"
      break;
    case 'como_no':
      url = 'https://dl.dropboxusercontent.com/s/63xs2yn99x1zdb3/como_no.mp3?token_hash=AAFxSEMX2Xy-dP8_ct8Rmpw7hCJhbBZKg9Q6H6eLFqBT9w&dl=1';
      break;
    case 'juanjo':
      url = 'https://dl.dropboxusercontent.com/s/l6qcbxysdlfzewi/juanjo.mp3?token_hash=AAFeSlEgRNYt5ArrWBrYmmZcZe1uheuXGJq8OAoNMRgJpg&dl=1';
      break;
    case 'trabajando':
      url = 'https://dl.dropboxusercontent.com/s/c8qw3kikkeve7hm/trabajando_en_ello.mp3?token_hash=AAEDFlVCi5WqvVvLB-GiQX_Q3xsLagdzG3T_YaGzl_4Z0g&dl=1';
      break;
    case 'dark':
      url = 'https://dl.dropboxusercontent.com/s/svjy3eqrpuueb7r/dark.mp3?token_hash=AAG36h1Xi9Hp1WBqYCYPSvoRC-E08N6aa6Z9IZDb3ft3og&dl=1';
      break;
    case 'sanado':
      url = 'https://dl.dropboxusercontent.com/s/70trcyaaknvmj79/he_sanado.mp3?token_hash=AAF1N08IcwNbsdhXy_irUdY3ZDYpkjgvAS3pc_85i4YY-w&dl=1';
      break;
    case 'orto':
      url = 'https://dl.dropboxusercontent.com/s/pvm1mhvjy8aaxes/romper_orto.mp3?token_hash=AAEFye78Ru2KQyVwnf6AuUjiXYYk23Yx3IanYo7glBR9Tw&dl=1'
      break;
    case 'palo_bolsa':
      url = 'https://dl.dropboxusercontent.com/s/oz44rkpqeteh8qz/palo_y_bolsa.mp3?token_hash=AAEX8ooQ9_wZsq35rA6NWVnTs4GVsxYn7R_gegTczzjL5w&dl=1'
      break;
    case 'lejia':
      url = 'https://dl.dropboxusercontent.com/s/lc5qrp430fwzu7m/lejia.mp3?token_hash=AAEm1oIGoPT83lsW2-UXEQ_V_bHr8gS_Vz234sOzNN5knA&dl=1';
      break;
    case 'aplastate':
      url = 'https://dl.dropboxusercontent.com/s/ski1jf6lh13zvly/aplastate.mp3?dl=1&token_hash=AAH0rzzYYF1-OCiFccxofSXrdUDr5q55QgRBfSPGWMwsdg';
      break;
    case 'comeme':
      url = "https://dl.dropboxusercontent.com/s/45r3ejog5b3xfyn/comeme.mp3?token_hash=AAGT9WM-q4c7cldGt8FqtyJcOHbWnkdNzNpLWkHj9WNjzQ&dl=1"
      break;
    case 'popurri':
      url = 'https://dl.dropboxusercontent.com/s/cneoiowoeauqtu9/popurri.mp3?token_hash=AAGllWOZhjwiaMDBrbGyy-C7i70KjO_a8F1uAE0-ogYJtw&dl=1';
      break;
    case 'sharky':
      url = 'https://dl.dropboxusercontent.com/s/ys1mqmtc3ve5049/sharky.mp3?token_hash=AAE2Xr9qfDQErxdb04aF4JfZzYO5VLC1vtfK2MAqUpb2fA&dl=1';
      break;
    case 'bodyshot':
      url = 'https://dl.dropboxusercontent.com/s/l7nhw1g1g7dzyfq/bodyshot.mp3?dl=1&token_hash=AAG3cMWtjWWu2s7Qt5t9inbSdgROVfhy42N-g8UFeOhSHg';
      break;
    case 'rich-phone':
      url = 'https://dl.dropboxusercontent.com/s/xfs17tmx98608j2/rich-phone.mp3?dl=1&token_hash=AAHejFiuDsDwGMZ1YzjlgRIS51B-HjW59I_C1tTQOHliJQ';
      break;
    case 'biatch':
      url = 'https://dl.dropboxusercontent.com/s/3fd38ng4i8ap2aq/biatch.mp3?dl=1&token_hash=AAHTA1rrUNJU1xO3EH4pT2WI5p3bzDIm1T0FKclQ_FLOjA';
      break;
    case 'caralarm':
      url = 'http://www.dl.neerden.nl/caralarm.mp3';
      break;
	case 'crow':
      url = 'http://www.chiptape.com/chiptape/sounds/short/crow.wav';
      break;
    case 'mclaren':
      url = 'https://dl.dropboxusercontent.com/s/yscf5ym1k84nshi/mclaren.mp3?dl=1&token_hash=AAEjHzu1Uezi7NQW90a2fxRIvQheDAalgrv6-qBQDZPbyA';
      break;
    }

    relajo.socket.emit('eval', 'play("' + url + '");');
}

var createButton = (function (buttonName, videoName) {
  var button = $('<button />', {
    text: buttonName,
    click: (function() {
      funWith(videoName)
      })
    });
  button.css('', '');
  mainDiv.append(button);
});

var createSayInput = (function() {
  var sayDiv = $('<div>', { id: 'say-div'});
  var input = $('<input>', { placeholder: 'Message to say'});
  var select = $('<select>');
  select.append('<option value="es"> Spanish </option>');
  select.append('<option value="en"> English </option>');
  select.append('<option value="fr"> French </option>');
  select.append('<option value="de"> German </option>');
  select.append('<option value="pt"> Portuguese </option>');
  select.append('<option value="ru"> Russian </option>');

  var button = $('<button/>', {
    text: 'Say!',
    click: function() {
      message = input.val();
      language = select.val()

	  url = say(message, language);

	  relajo.socket.emit('eval', 'play("' + url + '");');
    }
  });

  input.css('width', "400px");
  input.appendTo(sayDiv);
  select.appendTo(sayDiv);
  button.appendTo(sayDiv);
  mainDiv.append(sayDiv);
});

var createPlayInput = (function() {
  var playDiv = $('<div>', { id: 'play-div'});
  var input = $('<input>', { placeholder: 'URL to play'});
  var playButton = $('<button/>', {
    text: 'Play!',
    click: function() {
      url = input.val();

	  relajo.socket.emit('eval', 'play("' + url + '");');
    }
  });
  var stopButton = $('<button/>', {
    text: 'stop!',
    click: function() {
	  relajo.socket.emit('stop', 'mplayer');
    }
  });

  input.css('width', "400px");
  input.appendTo(playDiv);
  playButton.appendTo(playDiv);
  stopButton.appendTo(playDiv);
  mainDiv.append(playDiv);
});

var prepareLoquendoSelect = (function(select) {

  select.append('<option value="Allison">Allison (American English female)</option>');
  select.append('<option value="Susan">Susan (American English female)</option>');
  select.append('<option value="Dave">Dave (American English male)</option>');
  select.append('<option value="Steven">Steven (American English male)</option>');
  select.append('<option value="Elizabeth">Elizabeth (British English female)</option>');
  select.append('<option value="Kate">Kate (British English female)</option>');
  select.append('<option value="Simon">Simon (British English male)</option>');
  select.append('<option value="Alan">Alan (Australian English male)</option>');
  select.append('<option value="Grace">Grace (Australian English female)</option>');
  select.append('<option value="Veena">Veena (Indian English female)</option>');
  select.append('<option value="Luca">Luca (Italian male)</option>');
  select.append('<option value="Federica">Federica (Italian female)</option>');
  select.append('<option value="Paola">Paola (Italian female)</option>');
  select.append('<option value="Giulia">Giulia (Italian female)</option>');
  select.append('<option value="Matteo">Matteo (Italian male)</option>');
  select.append('<option value="Marcello">Marcello (Italian male)</option>');
  select.append('<option value="Roberto">Roberto (Italian male)</option>');
  select.append('<option value="Silvana">Silvana (Italian female)</option>');
  select.append('<option value="Valentina">Valentina (Italian female)</option>');
  select.append('<option value="Laila">Laila (Arabic female)</option>');
  select.append('<option value="Tarik">Tarik (Arabic male)</option>');
  select.append('<option value="Frida">Frida (Danish female)</option>');
  select.append('<option value="Magnus">Magnus (Danish male)</option>');
  select.append('<option value="Willem">Willem (Dutch male)</option>');
  select.append('<option value="Saskia">Saskia (Dutch female)</option>');
  select.append('<option value="Mikko">Mikko (Finnish male)</option>');
  select.append('<option value="Milla">Milla (Finnish female)</option>');
  select.append('<option value="Juliette">Juliette (French female)</option>');
  select.append('<option value="Bernard">Bernard (French male)</option>');
  select.append('<option value="Florence">Florence (French female)</option>');
  select.append('<option value="Olivier">Olivier (Canadian French male)</option>');
  select.append('<option value="Charlotte">Charlotte (Canadian French female)</option>');
  select.append('<option value="Katrin">Katrin (German female)</option>');
  select.append('<option value="Stefan">Stefan German male)</option>');
  select.append('<option value="Afroditi">Afroditi (Greek female)</option>');
  select.append('<option value="Nikos">Nikos (Greek male)</option>');
  select.append('<option value="Vilde">Vilde (Norwegian female)</option>');
  select.append('<option value="Henrik">Henrik (Norwegian male)</option>');
  select.append('<option value="Zosia">Zosia (Polish female)</option>');
  select.append('<option value="Krzysztof">Krzysztof (Polish male)</option>');
  select.append('<option value="Gabriela">Gabriela (Brazilian Portuguese female)</option>');
  select.append('<option value="Fernanda">Fernanda (Brazilian Portuguese female)</option>');
  select.append('<option value="Amalia">Amalia (Portuguese female)</option>');
  select.append('<option value="Eusebio" selected="">Eusebio (Portuguese male)</option>');
  select.append('<option value="Ioana">Ioana (Romanian female)</option>');
  select.append('<option value="Mihai">Mihai (Romanian male)</option>');
  select.append('<option value="Olga">Olga (Russian female)</option>');
  select.append('<option value="Dmitri">Dmitri (Russian male)</option>');
  select.append('<option value="Ximena">Ximena (American Spanish female)</option>');
  select.append('<option value="Carlos">Carlos (American Spanish male)</option>');
  select.append('<option value="Soledad">Soledad (Colombian Spanish female)</option>');
  select.append('<option value="Diego">Diego (Argentine Spanish male)</option>');
  select.append('<option value="Francisca">Francisca (Chilean Spanish female)</option>');
  select.append('<option value="Esperanza">Esperanza (Mexican Spanish female)</option>');
  select.append('<option value="Jorge">Jorge (Castilian Spanish male)</option>');
  select.append('<option value="Carmen">Carmen (Castilian Spanish female)</option>');
  select.append('<option value="Leonor">Leonor (Castilian Spanish female)</option>');
  select.append('<option value="Jordi">Jordi (Catalan male)</option>');
  select.append('<option value="Montserrat">Montserrat (Catalan female)</option>');
  select.append('<option value="Empar">Empar (Valencian female)</option>');
  select.append('<option value="Carmela">Carmela (Galician female)</option>');
  select.append('<option value="Sven">Sven (Swedish male)</option>');
  select.append('<option value="Annika">Annika (Swedish female)</option>');
  select.append('<option value="Kerem">Kerem (Turkish male)</option>');
  select.append('<option value="Zeynep">Zeynep (Turkish female)</option>');
  select.append('<option value="Selin">Selin (Turkish female)</option>');
  select.append('<option value="Linlin">Linlin (Chinese female)</option>');
  select.append('<option value="Lisheng">Lisheng (Chinese female)</option>');
  select.val('Jorge')
})

var normalizeText = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};

  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );

  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }
      return ret.join( '' );
  }

})();


var createLoquendoInput = (function() {
  var playDiv = $('<div>', { id: 'loquendo-div'});
  var input = $('<input>', { placeholder: 'Loquendo play BETA!'});
  var select = $('<select>', {id: 'loquendo-select'});
  prepareLoquendoSelect(select);
  var playButton = $('<button/>', {
    text: 'Play!',
    click: function() {
      $.ajax({
        type: "POST",
        dataType: 'jsonp',
        contentType: "audio/x-wav",
        url: "http://91.220.136.173:8080/TTS7/LoquendoTTS?id=713922581",
        data: {'testo': normalizeText(input.val()), 'voce': select.val(), 'tipo': 40, 'play': 'Play', 'yeruy47yyehedher7': 'yeruy47yyehedher7'},
        done: function(url){
          relajo.socket.emit('eval', 'play("' + url + '");');
        }
      });
    }
  });

  input.css('width', "400px");
  input.appendTo(playDiv);
  select.appendTo(playDiv);
  playButton.appendTo(playDiv);
  mainDiv.append(playDiv);
});

var createChat = function() {
  mainDiv.append("<iframe src='http://relajoapp.github.io/examples/chat.html' style='width: 50%; height: 350px; float: left'; position: absolute/>");
}

var createWhiteboard = function() {
  mainDiv.append("<iframe src='http://relajoapp.github.io/examples/drawing.html' style='width: 50%; height: 350px; float: right'; position: absolute/>");
}

createChat();
createWhiteboard();

createButton('Sangre', 'sangre');
createButton('Trambolico', 'trambolico');
createButton('Politono aythami', 'aythami-politono');
createButton('Ay!', 'ay');
createButton('Masia', 'masia');
createButton('Whatsapp en clase', 'wasa');
createButton('Standup', 'stand_up');
createButton('Habba Baba', 'habba');
createButton('Tito MC', 'tito');
createButton('Truck', 'truck');
createButton('FUAAh!', 'fua');
createButton('Como no...', 'como_no');
createButton('Corto lo malo', 'corto');
createButton('Mira la tijera', 'tijera');
createButton('Que dios te bendiga', 'bendicion');
createButton('Como yo quiero me ir', 'como_yo_quiero');
createButton('Subir y bajar', 'subir_y_bajar');
createButton('Un 60 entre 80', '60_80');
createButton('Esta ahi', 'esta_ahi');
createButton('Bukakeeei', 'bukake');
createButton('Cup of cafe con leche', 'cafe_con_leche');
createButton('No listen the ask', 'no_listen');
createButton('La gente esta muy loka', 'loka');
createButton('Dark', 'dark');
createButton('Trabajando en ello', 'trabajando');
createButton('Juanjo me falta un icono', 'juanjo');
createButton('caralarm', 'caralarm');
createButton('crow', 'crow');
createButton('mclaren', 'mclaren');
createButton('He sanado', 'sanado');
createButton('Orto', 'orto');
createButton('Palo y a la bolsa', 'palo_bolsa');
createButton('Un poquito a la lejia', 'lejia');
createButton('Aplastate aqui', 'aplastate');
createButton('Comeme', 'comeme');
createButton('Popurri', 'popurri');
createButton('Sharky', 'sharky');
createButton('Bodyshot', 'bodyshot');
createButton('Rich Phone', 'rich-phone');
createButton('Biatch', 'biatch');

createSayInput();
createPlayInput();
createLoquendoInput();

$('say-div').css('display', 'block');
$('play-div').css('display', 'block');
$('loquendo-div').css('display', 'block');

// Whiteboard ====================================================================
/*
var body = document.getElementsByTagName('body')[0];
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
body.appendChild(canvas);
var context = canvas.getContext('2d');
$('canvas').css({"position": "fixed", "zIndex": "-1", "top": "0", "left": "0"});

var point = function (x, y) {
  context.beginPath();
  context.arc(x, y, 5, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}

var clear = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

var paiting = false;

canvas.addEventListener('mouseup', function(e) { paiting = false }, false);
canvas.addEventListener('mousedown', function(e) { paiting = true }, false);
canvas.addEventListener('mousemove', function(e) {
  if (paiting) {
    point(e.x, e.y);
    relajo.socket.emit('eval', 'point(' + e.x + ',' + e.y + ');');
  }
}, false);

var clearButton = $('<button/>', {
  text: 'clear',
  click: function() {
    relajo.socket.emit('eval', 'clear();');
  }
});
mainDiv.append(clearButton);
*/

// Experiment ================================================================
if (typeof relajo.socket === 'undefined') {
  console.log("TODO: Adapters");
  relajo.socket = function() {};
  relajo.socket.emit = function(a,b) {};
}


$('html').append('<a href="https://github.com/relajoapp/relajoapp.github.io"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>')




(function() {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://dl.dropboxusercontent.com/s/d5u28dpu7n3eba9/favicon.png?dl=1&token_hash=AAGRDL8rdxQ5O8uiVhZUhKsnthc0JRtbSEJKDqIsMdbrLQ';
  document.getElementsByTagName('head')[0].appendChild(link);
}());
