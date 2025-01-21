input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(185)
})
basic.showString("one")
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
