Webcam.set({
width:350,height:300,image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera")
function takephoto(){
Webcam.snap(function(data_uri)
{document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'"/>';
});}
console.log("ml5version:",ml5.version)
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Z2HH4TQVc/model.json',modelLoaded)
function modelLoaded(){
    console.log("your model is loaded")
}
function idphoto(){
I1=document.getElementById("myimg");
mymodel.classify(I1,gotResult)
}
function gotResult(error,results){
if(error){
console.log(error)
}
else{
console.log(results)
document.getElementById("on").innerHTML=results[0].label
document.getElementById("ac").innerHTML=results[0].confidence.toFixed(3)
}



}