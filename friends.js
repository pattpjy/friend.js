var i=[];
while (i.length < 8){
  var r = Math.floor(Math.random() * 100)+1;
  if (i.indexOf(r) === -1) i.push(r);

}

for (var i=0; i<=100; i++) {
  if (i >=30){
    console.log(i);
  }
}

for (var i=0; i<=100; i++) {
  if (i <=60){
    console.log(i);
  }
}
