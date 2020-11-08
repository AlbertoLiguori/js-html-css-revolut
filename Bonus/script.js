var mainListArray = ["Funzionalità", "Abbonamenti", "Chi siamo", "Aiuto"]

var abbonamenti=["Standard", "Premium", "Metal", "Confronta i piani"]
var chisiamo =["chi siamo", "Blog", "Leadership", "Affiliate", "Influencer","Lavora con noi", "Cultura", "Diversità ed inclusione", "Contatto"]
var aiuto =["Centro Assistenza", "Community", "Sicurezza", "Stato di sistema", "API sviluppatore"]

createUlFromArray(mainListArray, ".nav-container", "mainList", "mainListEl")
createUlFromArray(abbonamenti, "#mainListEl1","subList1","subListEl1")
createUlFromArray(chisiamo, "#mainListEl2","subList2","subListEl2")
createUlFromArray(aiuto, "#mainListEl3","subList3","subListEl3")

$("#mainListEl1").hover(function(){
  $(".subListEl1").toggle()
})

$("#mainListEl2").hover(function(){
  $(".subListEl2").toggle()
})

$("#mainListEl3").hover(function(){
  $(".subListEl3").toggle()
})

var multiDArray =[
                    ["Conto", "Budget e statistiche", "Conto Junior"],
                    ["Investimenti e Risparmi", "azioni", "Crypto", "Prodotti","Salvadanai"],
                    ["Pagamenti","Effettua e ricevi pagamaenti","Bonifici internazionali", "Fatture di gruppo", "Abbonamenti"],
                    ["Extra", "Donazioni","Assicurazione Internazionale", "Sicurezza"]
]

$("#mainListEl0").append(`<ul class="sub-sub-list"></ul>`)

multiDArray.forEach(function(element, index){
  var className = String(".multiLi"+index)

  $(".sub-sub-list").append(`<li class="multiLi`+index+`"></li>`)

  createUlFromArray(element, className)
})



$("#mainListEl0").hover(function(){
  $(`[class*="multiLi"]`).toggle()
})
