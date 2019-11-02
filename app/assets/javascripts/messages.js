$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var Image = message.image ? `<image class="lower-message__image" src='${message.image}'></image>` : "" ;
    var html =  `<div class='message' data-message-id='${message.id}'>
    <div class='upper-message'>
    <div class='upper-message__user-name'>
    ${message.user_name}
    </div>
    <div class='upper-message__date'>
    ${message.created_at}
    </div>
    </div>
    <div class='lower-message'>
    <p class='lower-message__content'>
    ${message.content}
      
    </p>
    ${Image}
    </div>
    </div>`

return html;
  }
  

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
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
    
    // セットインターバルでreloadMessagesを五秒に一回呼び出す
  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
   
    const last_message_id = $('.message:last').data('message-id');
    // var groupid = $('.messages').data('group-id');
    // var url = `groups/${groupid}/messages`
    
    // console.log(last_message_id)
    if(window.location.href.match(/\/groups\/\d+\/messages/))
    {
       
       
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: 'api/messages',
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      messages.forEach(function(message){
      // console.log(message);
    //  if (messages.length!=0){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
     
    });
    })
  
    .fail(function() {
      // console.log('error');
    });
    }
  };
  
  setInterval(reloadMessages, 5000);
});

