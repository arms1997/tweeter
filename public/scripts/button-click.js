$(function(){

  $('#heart,#flag').on('click', (event) => {
    $(event.target).toggleClass("fas blue")
  })

  $('.fa-retweet').on('click', (event) => {
    $(event.target).toggleClass("blue")
  })

});