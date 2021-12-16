navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
if (navigator.getUserMedia) {
  navigator.getUserMedia({
      audio: true
    },
    function(stream) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      microphone = audioContext.createMediaStreamSource(stream);
      javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);

      javascriptNode.onaudioprocess = function() {
          var array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          var values = 0;

          var length = array.length;
          for (var i = 0; i < length; i++) {
            values += (array[i]);
          }

          var average = values / length;
          

//          console.log(Math.round(average - 40));

          
          if (average > 90){
            console.log("!!!");
            var cursor = document.getElementById('fuego0');
            //cursor.style.webkitAnimationPlayState = "paused";
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego1');
            //cursor.style.webkitAnimationPlayState = "paused";
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego2');
            //cursor.style.webkitAnimationPlayState = "paused";
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego3');
            //cursor.style.webkitAnimationPlayState = "paused";
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego4');
            //cursor.style.webkitAnimationPlayState = "paused";
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego_20');
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego_21');
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego_22');
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego_23');
            cursor.style.left = "-999999%"
            cursor = document.getElementById('fuego_24');
            cursor.style.left = "-999999%"
          }

        } // end fn stream
    },
    function(err) {
      console.log("The following error occured: " + err.name)
    });
} else {
  console.log("getUserMedia not supported");
}

document.getElementById("fireCandles").addEventListener("click", function(){
    var cursor = document.getElementById('fuego0');
          //cursor.style.webkitAnimationPlayState = "paused";
          cursor.style.left = "-170%"
          cursor = document.getElementById('fuego1');
          //cursor.style.webkitAnimationPlayState = "paused";
          cursor.style.left = "-170%"
          cursor = document.getElementById('fuego2');
          //cursor.style.webkitAnimationPlayState = "paused";
          cursor.style.left = "-170%"
          cursor = document.getElementById('fuego3');
          //cursor.style.webkitAnimationPlayState = "paused";
          cursor.style.left = "-170%"
          cursor = document.getElementById('fuego4');
          //cursor.style.webkitAnimationPlayState = "paused";
          cursor.style.left = "-170%"
          cursor = document.getElementById('fuego_20');
          cursor.style.left = "320%"
          cursor = document.getElementById('fuego_21');
          cursor.style.left = "320%"
          cursor = document.getElementById('fuego_22');
          cursor.style.left = "320%"
          cursor = document.getElementById('fuego_23');
          cursor.style.left = "320%"
          cursor = document.getElementById('fuego_24');
          cursor.style.left = "320%"
});