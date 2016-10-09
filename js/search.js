$(function() {

  $.get('https://www.googleapis.com/youtube/v3/search',{
    part:'snippet',
    key:'AIzaSyDtDjgdi39C0x4DZIpb0GKJE7dUS9z8leY',
    q: 'cats',
    regionCode:'UA'
  },function(data) {
    $.each(data.items, function(i,item) {
      console.log(item);
    })
  });
});

