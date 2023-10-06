var papersize = 200*410;
if(papersize > 500*800 ){
    console.log("paper size = A1")
} else if(papersize < 450*600 || papersize <= 420*594){
    console.log("paper size = A2")
}else if(papersize < 300*450 || papersize == 297*420){
    console.log("paper size = A3")
}else{"A4"}