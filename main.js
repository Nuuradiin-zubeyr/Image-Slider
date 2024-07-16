let slider = document.querySelector("#slider")
let NextBtn = document.querySelector("#NextBtn")
let PrevBtn = document.querySelector("#PrevBtn")

let images = [
    "https://img.freepik.com/free-photo/skyline-downtown-new-york-new-york-usa_268835-773.jpg?t=st=1721128787~exp=1721132387~hmac=58e4984501a60bd80d9308012194a0933111306bf8d77f74dd05e0cc0d89435b&w=740",
    "https://img.freepik.com/free-photo/majestic-lion-undisputed-king-jungle-resting-regally-sunlit-rock_1268-34999.jpg?t=st=1721127240~exp=1721130840~hmac=c55f67d93430dbb82a7d4dc008f4b54698b7499bf847822fc4af11db3711e11e&w=740",
    "https://img.freepik.com/free-vector/cartoon-skyscraper-cityscape-vector-background-urban-street-sky-scene-with-business-office-window-panorama-game-environment-abstract-perspective-view-corporate-architecture-scape-sunny-day_107791-22962.jpg?t=st=1721129026~exp=1721132626~hmac=d351759a7728c8ab8e548e61662cdb28db626f216129ffce436cfee92813eae6&w=740",
    "https://img.freepik.com/premium-photo/melbourne_204197-3270.jpg?w=740",
    "https://img.freepik.com/free-photo/view-new-york-city-night-time_53876-138055.jpg?t=st=1721129678~exp=1721133278~hmac=3c47f0afa36d0b1d6b18274e12e719de773c908765fc41d1ace4714c02d9517b&w=740",
    "https://img.freepik.com/free-photo/river-old-view-melaka-malacca_1122-1642.jpg?t=st=1721129712~exp=1721133312~hmac=be9232aef4ba667433c3211d0ad2d33874bac2091110eaa7648572242d485db1&w=740",
      
]
let Indexnumber = 0

NextBtn.addEventListener("click", function(){
    if (Indexnumber < images.length -1)
        
    Indexnumber++
    slider.src = images[Indexnumber]
})

PrevBtn.addEventListener("click", function(){
    if (Indexnumber > 0)
    Indexnumber--
    slider.src = images[Indexnumber]
})