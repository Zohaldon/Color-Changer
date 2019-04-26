//DOM load event
window.addEventListener("DOMContentLoaded",	() => {

    //Set speech recognition
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition(),
    colorName = document.querySelector('.color-name'),
    pyramidWallF = document.querySelector('.front'),
    pyramidWallB = document.querySelector('.back'),
    pyramidWallL = document.querySelector('.left'),
    pyramidWallR = document.querySelector('.right'),
    colorRecognition = document.querySelector('.color-recognition'),
    modelConfidence = document.querySelector('.model-confidence'),
    //List of all possible verbal utterable colors
    cssColorNames = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

    //Start speech recognition
    recognition.start();

    //Wait for user to finish speaking
    recognition.addEventListener('result', e => {

        //Get user's speech data and the confidence 
        const transcript = e.results[0][0].transcript.toLowerCase().replace(/\s/g, ''),
              confidence = (e.results[0][0].confidence * 100).toFixed(1);

        //Check if transcript is valid color value
        if(cssColorNames.includes(transcript)) {

            //Set cube color;
            pyramidWallF.style.setProperty('--pyramid-color', transcript);
            pyramidWallB.style.setProperty('--pyramid-color', transcript);
            pyramidWallL.style.setProperty('--pyramid-color', transcript);
            pyramidWallR.style.setProperty('--pyramid-color', transcript);

            //Set color name text value
            colorName.textContent = transcript;

        }

        //Output transcript
        colorRecognition.textContent = transcript;

        //Output transcript confidence percentage
        modelConfidence.textContent = confidence;

    });

    //Restart speech recognition after user has finished talking
    recognition.addEventListener('end', recognition.start);


});