let pocet6 = 0
let pocethodu = 0
let nahodnecislo = randint(1, 6)

input.onGesture(Gesture.Shake, function () {
    let nahodnecislo = randint(1, 6)
    music.playTone(Note.C, 500)
    
    if(nahodnecislo === 6)
    {
        pocet6 += 1
    }

    pocethodu += 1
    console.log([nahodnecislo, pocet6, pocethodu])
    if (pocet6 === 3) {
        music.playTone(Note.C5, 2000)
        whaleysans.showNumber(pocethodu)

        pocethodu = 0
        pocet6 = 0
    }
    
})