$(document).on('turbolinks:load', function(){
  function buildHTML(message){
   var image = `<image_tag message.image.url, class: 'lower-message__image' if message.image.present? >`
    var html =  `<div class='message'>
    <div class='upper-message'>
    <div class='upper-message__user-name'>
    ${message.user_name}
    </div>
    <div class='upper-message__date'>
    ${message.date}
    </div>
    </div>
    <div class='lower-message'>
    <p class='lower-message__content'>
    ${message.content}
    ${message.image}
    </p>
    
    </div>
    </div>`

return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    console.log(this)
    var url = $(this).attr("action");
    $.ajax({  
      url: url,
      type: 'POST',
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('#message_content').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });　
      $('.form__submit').prop( 'disabled', false )
    })
    .fail(function(){
      alert('error');
    })
  })
});