$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
});

function switchSection() {
    var x = document.getElementsByClassName('bad-section')[0];
    x.style.visibility = x.style.visibility === 'hidden' ? 'visible' : 'hidden';
    var y = document.getElementsByClassName('good-section')[0];
    y.style.visibility = y.style.visibility === 'hidden' ? 'visible' : 'hidden';
    var z = document.getElementsByClassName('landing-section-minor')[0];
    console.log(z.style["background-color"])
    z.style["background-color"] = z.style["background-color"] === 'rgba(21, 0, 255, 0.027)' ? '#E75B1007' : 'rgba(21, 0, 255, 0.027)';
 }