input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        forward(2000)
        right90()
    }
})
function fullTurn () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(1350)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
function right90 () {
    x = 1400 / 4
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(x)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(500)
}
function forward (num: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    basic.pause(num)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
}
let x = 0
music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
