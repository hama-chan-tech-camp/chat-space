$(document).on("turbolinks:load", function() {
  var aaa = "hello2"      
  
  
  // 検索したユーザーのHTMLを組み立て
  function buildAddUserHTML(user) {
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>
    `
    return html;
  }

  
    
  function buildHTML(user, id) {
    var html =
      '<div class="chat-group-user">' +
      '<input type = "hidden", value = ' + id + ', name = "group[user_ids][]", id ="group_user_ids_' + id + '">' +
      '<p class="chat-group-user__name">' +
      user +
      '</p>' +
      '<p class="chat-group-user__btn chat-group-user__btn--remove">' +
      '削除' +
      '</p>' +
      '</div>';
    return html;
  }

  
  // ユーザー検索機能本体(インクリメンタルサーチ)
  function searchUsers() {
  }
  
  // ユーザー検索(インクリメンタルサーチ)の発火イベントの指定
  $("#user-search-field").on("keyup", function(){
    
    //chat-group-form__input value 
    var textField = $("#user-search-field");
    
    var user = textField.val();
   
    // 検索フィールドが空に戻った場合はajax通信を行わない
    // if (user == ""){
  
    // } else {
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {
          keyword: user
        },
        dataType: 'json'
      })
      .done(function(data) {
     

        
        // if　ユーザーがいる時
        data.forEach(function(user){
          var html = buildAddUserHTML(user);
          
          $('#user-search-result').append(html);

        
        
        });
      })
      .fail(function() {
        alert('エラーが起きました');
      });
      // Turbolinksを止めないためにfalseを返しておく
      return false;
    });

    
    
    $(document).on("click", ".user-search-add", function(){
      
      let id = $(this).data('user-id')
      
      let user = $(this).data('user-name')
      
      $(this).parent().remove();
      var html = buildHTML(user, id )
      $(`#chat-group-users`).append(html);
    })
    // ユーザーを削除
$("#chat-group-users").on("click", ".chat-group-user__btn--remove", function(){
  
  $(this).parent().remove();
});
});





