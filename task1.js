let ff =['строка, сорока рука рот муха ник банкир ']

$(document).ready(()=>{
    $('.img_wrapper').attr('src','https://logiclike.com/files/media/qz/gi/3kozk9o8_5e3ab5b846592.jpg')
    $('.rulles').hide()
    $('.h2').hide()
    $('.wrapper').click(()=>{
        $('.rulles').slideToggle(500)
        $('.h1').toggle()
        $('.h2').toggle()
    })

$(".button").click(()=>{
    let aa = $(".gg").val()
    $(".gg").val('ff')
 
})
})