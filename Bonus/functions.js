//Creates an Unordered list from an array
//function (ARG1, ARG2, ARG3, ARG4)
//ARG1 = an Array of strings
//ARG2 = where the ul will be appended
//ARG3 = (facultative) adds a class name to the ul
//ARG4 = (facultative) adds a class name to the li
function createUlFromArray(anArray, htmlEl, ulClassName, liClassName){

  $(htmlEl).append(`<ul class =`+ ulClassName +`></ul>`)

  anArray.forEach(function (element, index){

    $(htmlEl + "> ul").append(`<li id=`+ liClassName + index +` class=`+ liClassName +`>`+ element + `</li>`)
  })
}
