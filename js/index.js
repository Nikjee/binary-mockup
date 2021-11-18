$(window).resize(function (event) {
  mainblock()
})

function mainblock() {
  var h = $(window).outerHeight()
  $('.mainblock').css('min-height', h)
}
mainblock()

$(window).scroll(function (event) {
  var s = 0 - $(this).scrollTop() / 4
  $('.mainblock__image').css('transform', 'translate3d(0,' + s + 'px,0)')
})

$('.filter__item').click(function (event) {
  let i = $(this).data('filter')

  if (i == 1) {
    $('.portfolio__column').show()
  } else {
    $('.portfolio__column').hide()
    $('.portfolio__column.f_' + i).show()
  }

  $('.filter__item').removeClass('_active')
  $(this).addClass('_active')

  return false
})

let gallery = document.querySelectorAll('._gallery')
if (gallery) {
  gallery_init()
}
function gallery_init() {
  for (let index = 0; index < gallery.length; index++) {
    const el = gallery[index]
    lightGallery(el, {
      counter: false,
      selector: 'a',
      download: false,
    })
  }
}
