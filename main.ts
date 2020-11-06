input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onGesture(Gesture.TiltLeft, function () {
    Brightness += -10
})
input.onButtonPressed(Button.AB, function () {
    turtle.forward(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    Brightness += 10
})
// I wanted to make a turtle that can allow you to draw what you want
// 
// If button A is pressed, the turtle will turn left
// 
// If button B is pressed, the turtle will turn right
// 
// If button A+B is pressed, the turtle will go forward.
// 
// From the top, (on start) on start, there will be a trail that will be left from where you go. 
// The brightness is also set to 100 while the maximum is 255.
turtle.pen(TurtlePenMode.Down)
let Brightness = 100
basic.forever(function () {
    turtle.setBrightness(Brightness)
})
