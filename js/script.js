let tanya = $('#tanya');
let john = $('#john');

$('button').click(function (e) { 
  e.preventDefault();
  $(tanya).toggleClass('display-none');
  $(john).toggleClass('display-none');
});
