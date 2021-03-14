enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.AB, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 10)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 100)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 100)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 100)
    right = randint(-100, 100)
    left = randint(-100, 100)
    basic.pause(1000)
    RingbitCar.freestyle(left, right)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    RingbitCar.brake()
})
let left = 0
let right = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Heart)
