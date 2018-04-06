// a user, i should see the timer increment every second once the page has loaded
// refer to id='counter'
//
let clockMovement=true;
let likes = {5:2, 8:9, 2:100, 10:300}
// function pause() {
function updateCounter(){
  count = parseInt(document.querySelector('#counter').innerText)
  console.log(count)
  count++;
  document.querySelector('#counter').innerText = count
  likeDisplay(count)
  // while(count < 1000){
  if(clockMovement){setTimeout(()=>{updateCounter()},1000);}


    // console.log(count)
    // if(count == 1000){break;}
  // }
}

// As a user, i can manually increment and decrement the counter as i like
// <button id='-' > ➖ </button>
// <button id='+' > ➕ </button>
function minusCounter(){
  if (clockMovement===true) {
    currentCount = parseInt(document.querySelector('#counter').innerText)
    currentCount--;
    document.querySelector('#counter').innerText = currentCount;
  }
}
function plusCounter(){
  if (clockMovement===true) {
    currentCount = parseInt(document.querySelector('#counter').innerText)
    currentCount++;
    document.querySelector('#counter').innerText = currentCount;
  }
}
// As a user, i can like an individual number of the counter.
//   I should see the appropriate number of likes associated with that particular number
// <ul class='likes'></ul>

function likeDisplay(number){
  // if (clockMovement===true) {
      // //find class likes ul
      // let countOfLikes
      // let likeElement = document.querySelector('.likes').innerText
      // // update with count of likes
      // countOfLikes = likes[number]
      // if( typeof countOfLikes !== "undefined"){
      //   document.querySelector('.likes').innerText = `${number} has ${countOfLikes} likes!!!!`
      // }
      // else {
      //   document.querySelector('.likes').innerText = `${number} has 0 likes :(`
      // }
  // }
  let likesUl = document.querySelector('.likes')
  likesUl.innerHTML = '';
  for (var like in likes) {
    value = likes[like]
    key = like


    let likeLi = document.createElement('li')
    likeLi.innerHTML = `${key} has ${value} likes`
    likesUl.appendChild(likeLi)

  }
}

function likeFunction(){
  if (clockMovement===true) {

    key = document.querySelector('#counter').innerText
    if (likes[key]){likes[key]++   }
    else { likes[key] = 1  }
    likeDisplay(key)
    }

}

// As a user I can pause the game,
//   which should disable all buttons except the pause button,
//   which should now show the text 'resume'
// <button id='pause' > pause </button>

function pauseFunction(){
  if (clockMovement===true){
    clockMovement=false;
    document.querySelector('#pause').innerText = 'Resume'
  }

  //change the button here to a resume button
  // <button id='pause' > pause </button>
  else if (clockMovement===false){
    clockMovement=true;
    document.querySelector('#pause').innerText = 'pause'
    updateCounter()
  }
}


// As a user I can leave comments on my gameplay,
//   such as "Wow, what a fun game this is"
// } //end pause

function commentFunction(){
  //get comment from textbox
  let comment = document.querySelector('#comment').value
  let commentsUl = document.querySelector('#comments')
  // console.log(comment)
  // add li under ul - we want append
  let commentLi = document.createElement('li')
  commentLi.innerHTML = `${comment}`
  commentsUl.appendChild(commentLi)

}
// <form id="comment-form" action="">
// id="comment"
// id='submit
    // <div id='list' class='comments'></div>
updateCounter();
document.querySelector('#minus').addEventListener('click',minusCounter)
document.querySelector('#plus').addEventListener('click',plusCounter)
document.querySelector('#pause').addEventListener('click',pauseFunction)
 // id='heart'
document.querySelector('#heart').addEventListener('click',likeFunction)
document.querySelector('#submit').addEventListener('click',commentFunction)
