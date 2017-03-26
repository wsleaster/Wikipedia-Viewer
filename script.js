$(document).ready(function() {

    //button
  $('#searchB').on('click', function() {
  //search for articles
    var searchIn = $('#search').val();
     var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchIn +'&format=json&callback=?';
     $.ajax({
       type: 'GET',
       url: url,
       async: false,
       dataType: 'json',
       success: function(data){
         //console.log(data[1][0], data[2][0], data[3][0]);
         //console.log(url);
         $('#list').html('');
         for (var i=0; i <data[1].length; i++){
         $('#list').prepend('<li id = "thisList"><a target = "_blank" href='+data[3][i] +'>'+data[1][i]+'</a><p>'+data[2][i]+'</p></li>');
         }
       },
       error: function(errorMessage){
         alert('Error');
       }
     });
   });
});