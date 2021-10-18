let likes=0;
setInterval(()=>{
    const arrow=document.querySelector('a.coreSpriteRightPaginationArrow');

    document.getElementsByClassName("ltpMr")[0].children[0].children[0].click();
    likes++;
    console.log(`You've liked ${likes} post(s)`);
    arrow.click();
},3000);

