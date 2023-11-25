function startClasification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LO1_bOJ0N/')};
function modelReady(){
    classifier.classify(gotResults);
}