input.onButtonPressed(Button.A, function () {
    let Вологість = 0
    moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 100)
    basic.showString("" + Math.round(Вологість) + "%")
    basic.clearScreen()
    if (Вологість > 70) {
        _1.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (Вологість > 70) {
        _1.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (Вологість > 70) {
        _1.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let moistureReading = 0
let _1: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
_1 = strip.range(0, 1)
let _2 = strip.range(1, 1)
let _3 = strip.range(2, 1)
