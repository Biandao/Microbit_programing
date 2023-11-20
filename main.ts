basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B A G F E D C - ", 100), music.PlaybackMode.UntilDone)
})
