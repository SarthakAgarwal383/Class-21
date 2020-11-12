function istouching(o1,o2){
    if(o1.x-o2.x<o1.width/2+o2.width/2 &&
      o2.x-o1.x<o1.width/2+o2.width/2 &&
      o2.y-o1.y<o1.height/2+o2.height/2 &&
      o1.y-o2.y<o1.height/2+o2.height/2){
        return true;
  
    }
    else {
      return false
    }
  
  
  }
  function bounceOff(a,b){
    if(a.x-b.x<a.width/2+b.width/2 &&
       b.x-a.x<a.width/2+b.width/2){
      a.velocityX=a.velocityX * -1;
      b.velocityX=b.velocityX * -1;
   }
   if(a.y-b.y<a.height/2+b.height/2 &&
    b.y-a.y<a.height/2+b.height/2){
      a.velocityY=a.velocityY * -1;
      b.velocityY=b.velocityY * -1;
    }
  }