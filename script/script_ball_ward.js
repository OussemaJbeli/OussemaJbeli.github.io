const Txt1 = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'SWIFT','PHP', 'SASS','MONGODB',
    'MYSQL', 'JQUERY', 'JAVA','ORACLE',
    'POSTGRESQL', 'SQLITE', 'BOOTSTRAP','API'
    ];

var tagCloud = TagCloud('.skils_words', Txt1, {

    // Sphere radius in px
    radius: 230,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,
    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color 070c2a each text in sphere
var color = '#070c2a ';
document.querySelector('.skils_words').style.color = color;
/***************deck */
const Txt2 = [
    'JAVAFX', 'SWING','MONGODB',
    'MYSQL', 'JQUERY', 'JAVA',
    'POSTGRESQL', 'SQLITE', 'API',
    'C', 'C++', 'C#',
    'python', 'ORACLE',
    ];

var tagCloud = TagCloud('.skils_words_decktop', Txt2, {

    // Sphere radius in px
    radius: 230,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,
    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#070c2a ';
document.querySelector('.skils_words_decktop').style.color = color;
/********media */
const Txt3 = [
    'ADOBE PREMIER', 'ADOBE PHOTOSHOP', 'ADOBE AFTER EFFECTS',
    'BLANDER','UNREAL ENGIANE', 'UNITY','FILMORA',
    ];

var tagCloud = TagCloud('.skils_words_media', Txt3, {

    // Sphere radius in px
    radius: 230,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',
    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,
    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#070c2a ';
document.querySelector('.skils_words_media').style.color = color;