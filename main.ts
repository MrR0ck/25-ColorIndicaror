input.onButtonPressed(Button.A, function () {
    Вологість = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showString("" + Math.round(Вологість) + "%")
    basic.clearScreen()
    if (Вологість > 70) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        if (Вологість > 30) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (Вологість < 30) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
let Вологість = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
let _1 = strip.range(0, 1)
let _2 = strip.range(1, 1)
let _3 = strip.range(2, 1)
