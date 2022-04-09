// $(function(){
//   let urls = [
//     'https://open.spotify.com/playlist/6PqdoD8rDw8ObeTWQpQ9tB',
//     'https://open.spotify.com/playlist/7msQCVaPHnz30dbfPpPdVu',
//     'https://open.spotify.com/playlist/3LbX67x7MvUCmkH7Bn104T',
//     'https://open.spotify.com/playlist/6yPXvE4UPvNoCi5itenDmK'
//   ];
//   let redirectUrl;

//   $('#b').change(function(){
//     redirectUrl = urls[$('#b option:selected').index()];
//     $('.lead .btn').attr('src', redirectUrl);
//   })
//   $('.btn').click(function(){
//     let arr = redirectUrl.split('/'),
//         id = arr[arr.length - 1];

//     document.cookie = `playlist=${id}; SameSite=Strict;`;
//     document.cookie = `redirectUrl=${redirectUrl}; SameSite=Strict;`;
//   })

//   $('select').change(function(){
//     var text = $(this).find('option:selected').text()
//     var clone = $('<select/>').append($('<option/>').text(text))
//     $(this).after(clone)
//     $(this).width(clone.width() + 20)
//     clone.remove()
//   })
//   setTimeout(function(){
//     $('select').change();
//   }, 200)
// })

const picker1 = datepicker('.datepicker1', {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  }
});
const picker2 = datepicker('.datepicker2', {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  }
});

// var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken('BQDZgUuoca8EOX_pnUHj5OxWSPQafQeOeQCGH_F8PPwbpC0CIYfai-sn-xUDdsJKgCj0y92ZZ1SclRNC3hxIhfjSJd25QYKjLDpsGKJDoALMP8y8g9-Uob-UhDzVFegezRgZNWENEY9Me6ZX4AHI1Mjj36jHMjReqSZoAut0z65ndb2jtmx81A');

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
//   if (err) console.error(err);
//   else console.log('Artist albums', data);
// });