https://teachablemachine.withgoogle.com/train/audio
function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/train/audio/model.json",modelloaded)
}
function modelloaded() {
    console.log ("model is loaded")
    classifier.classify(gotresult)
} 
function gotresult(error,results){
    if (error) {
        console.log (error)
    } else {
        console.log (results)
        document.getElementById ("result").innerHTML= "I CAN HEAR " + results [0] .label
        document.getElementById ("accuracy").innerHTML= "ACCURACY =" +(results [0] . confidence). toFixed(3)
        image1= document.getElementById ("dog")
        image2= document.getElementById ("cat")
        image3= document.getElementById ("cow")
        if (results [0]. label=="bark") {
             image1.src= "Dog.png"
        }
      else  if (results [0]. label=="meow") {
        image2.src= "cat.png"
        }

        else  if (results [0]. label=="moo") {
            image.src= "cow.png"

    }

    }}
    https://teachablemachine.withgoogle.com/models/P4zm3An2K/model.json