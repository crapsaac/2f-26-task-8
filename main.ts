input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("D E F D A A G - ", 199)
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("D E F D G G F - ", 199)
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("D E F D G A G - ", 199)
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("C C G F - - - - ", 120)
    }
})
