
$(document).ready(function(){
  // var $=jQuery;
//Initially, the Tweet button and the character count button should be hidden (CSS).
$('#tweet-controls').hide();

$('textarea').on('click', function(){
  $('textarea').animate({height: '5em'});
  $('#tweet-controls').show();
});

//when user  types #charcount should decrease
var maxLength = 140;

$('.tweet-compose').keyup(function(){
  var currentLength = maxLength - $('.tweet-compose').val().length;
  $('#char-count').html(currentLength);
  if (currentLength <= 10){
    $('#char-count').css('color', 'red');
  }
  if (currentLength <= maxLength){
    $('#tweet-submit').stop();
  }
});

var currentContent = $('#tweet-compose').val();

$('#tweet-submit').on('click', function(){
  $('#stream').prepend(addTweet(currentContent));
});

function addTweet(){
  
}

//<!-- STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. -->
//<!-- HINT: jQuery ".prepend" method -->





// <div class="tweet">
//   <div class="content">
//
//     <img class="avatar" src="img/damenleeturks.jpg" />
//     <strong class="fullname">My BFF</strong>
//     <span class="username">@mybff</span>
//
//     <!-- BLACK DIAMOND: Implement the icons for when a tweet is favorited/retweeted in the upper right of the tweet. -->
//     <!-- HINT: Add to what you created in Step 5 -->
//     <p class="tweet-text">Today is an amazing day.</p>
//
//     <!-- STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->
//     <!-- HINT: CSS ":hover" pseudo element -->
//     <div class="tweet-actions">
//       <ul>
//         <li><span class="icon action-reply"></span> Reply</li>
//         <li><span class="icon action-retweet"></span> Retweet</li>
//         <li><span class="icon action-favorite"></span> Favorite</li>
//         <li><span class="icon action-more"></span> More</li>
//       </ul>
//     </div>

//     <!-- STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -->
//     <!-- HINT: jQuery ".on" eventHandler -->
//     <div class="stats">
//       <div class="retweets">
//         <p class="num-retweets">30</p>
//         <p>RETWEETS</p>
//       </div>
//       <div class="favorites">
//         <p class="num-favorites">6</p>
//         <p>FAVORITES</p>
//       </div>
//       <div class="users-interact">
//         <div>
//
//
//
//           <img src="img/alagoon.jpg" />
//           <img src="img/vklimenko.jpg" />
//         </div>
//       </div>
//

//       <div class="time">
//         1:04 PM - 19 Sep 13
//       </div>
//     </div>
//     <div class="reply">
//       <img class="avatar" src="img/alagoon.jpg" />
//       <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
//     </div>
//   </div>
// </div>





});
