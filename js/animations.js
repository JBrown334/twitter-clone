
$(document).ready(function(){

$('#tweet-controls').hide();

$('textarea').on('click', function(){
  $(this).animate({height: '5em'});
  $('#tweet-controls').show();
});



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


$('.tweet-actions').hide();


function Tweet(tweet){
  this.tweet = tweet;
  this.id = 'new';
}

var addTweet = function(tweet){
  if(tweet){
    tweet = new Tweet(tweet);
  }

  $('#stream').prepend(
              '<div class="tweet">' +
      '<div class="content">' +
      '<img class="avatar" src="img/alagoon.jpg" />' +
      '<strong class="fullname">My BFF</strong>' +
      '<span class="username">@mybff</span>' +
      '<p class="tweet-text">' + tweet.tweet + '</p>' +
      '<div class="tweet-actions">' +
        '<ul>' +
          '<li><span class="icon action-reply"></span> Reply</li>' +
          '<li><span class="icon action-retweet"></span> Retweet</li>' +
          '<li><span class="icon action-favorite"></span> Favorite</li>' +
          '<li><span class="icon action-more"></span> More</li>' +
        '</ul>' +
        '</div>' +

'<div class="stats">' +
'<div class="retweets">' +
'<p class="num-retweets">30</p>' +
'<p>RETWEETS</p>' +
'</div>' +
'<div class="favorites">' +
'<p class="num-favorites">6</p>' +
'<p>FAVORITES</p>' +
'</div>' +
'<div class="users-interact">' +
'<div>' +
'<img src="img/alagoon.jpg" />' +
'<img src="img/vklimenko.jpg" />' +
'</div>' +
'</div>' +

'<div class="time">' + '1:04 PM - 19 Sep 13' +
'</div>' +
'</div>' +
'<div class="reply">' +
'<img class="avatar" src="img/alagoon.jpg" />' +
'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
'</div>' +
'</div>' +
'</div>'

      );

      $('.stats').hide();
      $('.reply').hide();
      $('.tweet-actions').hide();
};



$('.stats').hide();
$('.reply').hide();

$(document).on('click',  '.tweet', function(){
  $('.stats', this).show();
});

$(document).on('click',  '.tweet', function(){
  $('.reply', this).show();
});



  $('#tweet-submit').on('click', function (e) {
    e.preventDefault();
    var tweet = $('.tweet-compose').val().trim();
    addTweet(tweet);
});

$(document).on('mouseover',  '.tweet', function(){
  $('.tweet-actions', this).show();
});

$(document).on('mouseout',  '.tweet', function(){
  $('.tweet-actions', this).hide();
});






});
