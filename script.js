document.body.style.backgroundColor="Lightseagreen";

document.body.style.fontSize="30px";
document.body.style.fontWeight="500";
document.body.style.textAlign="center";
document.getElementById("text").innerHTML="While ციკლში continue-ს გამოყენების მაგალითი!"
var a=0;
while (a < 10) {
    a++;
    if (a==1 || a==5 || a==9) continue;
    document.write (a, "<br>");
}


