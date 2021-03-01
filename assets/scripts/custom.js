$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
});

function switchSection() {
    var x = document.getElementsByClassName('bad-section')[0];
    x.style.display = x.style.display === 'none' ? '' : 'none';
    var y = document.getElementsByClassName('good-section')[0];
    y.style.display = y.style.display === 'none' ? '' : 'none';
    var z = document.getElementsByClassName('landing-section-minor')[0];
    console.log(z.style["background-color"])
    z.style["background-color"] = z.style["background-color"] === 'rgba(21, 0, 255, 0.027)' ? '#E75B1007' : 'rgba(21, 0, 255, 0.027)';
 }