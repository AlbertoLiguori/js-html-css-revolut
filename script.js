$("#mainListItem-1").mouseenter(function(){
    $("#sub-list-1").addClass("active")
})

$("#mainListItem-1").mouseleave(function(){
    $("#sub-list-1").removeClass("active")
})

$("#mainListItem-2").hover(function(){
    $("#sub-list-2").toggle()
})

$("#mainListItem-3").hover(function(){
    $("#sub-list-3").toggle()
})

$("#mainListItem-4").hover(function(){
    $("#sub-list-4").toggle()
})
