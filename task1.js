let ff =['строка', 'сорока' ,'рука','рот' ,'муха','ник' ,' банкир ']
let linkimg=[
'https://logiclike.com/files/media/2q/gt/on1w8voj_5e3ab5c4a3438.jpg','https://logiclike.com/files/media/nx/41/x253ea0x_5e3ab5c7c7b34.jpg',
'https://logiclike.com/files/media/p8/gk/wm0mqhne_5e3ab5d86c27d.jpg','https://logiclike.com/files/media/us/tg/kfsz1on7_5e3ab5f5c7aa5.jpg',
'https://logiclike.com/files/media/57/n0/y1658j6h_5e3ab5e0921a9.jpg','https://logiclike.com/files/media/cf/j1/6otym79n_5e3ab5edeeeaf.jpg']
let nummasiv=0


$(document).ready(()=>{

    $('.img_wrapper').attr('src','https://logiclike.com/files/media/qz/gi/3kozk9o8_5e3ab5b846592.jpg')
    $('.rulles').hide()
    $('.h2').hide()
    $('.wrapper').click(()=>{
        $('.rulles').slideToggle(500)
        $('.h1').toggle()
        $('.h2').toggle()
    })

    $('.hh').knob({
        'inputColor':'white',
        'fgColor':'red',
        'max':'12',
        'width':'200',
        'height':'200'
        
    }).css({
        'position' : 'relative',
        
        
})

   
   $('.hh') .trigger('change');
  
   
   $('.dial') .trigger('change');

$(".button").click(()=>{
    let aa = $(".gg").val()
    $(".gg").val('')



 

   
 if(ff[nummasiv]==aa){
   
    nummasiv++ 
    $('.hh').val(nummasiv).trigger('change')
    console.log(ff[nummasiv])
   let phot =linkimg[nummasiv]
    $('.img_wrapper').attr('src',phot
)}else{
  
}

})


})