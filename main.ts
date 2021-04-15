input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    coordenada_x += 1
    basic.showNumber(coordenada_x)
    basic.pause(2000)
})
function validar_coordenadas () {
    if (coordenada_x <= 4 && coordenada_y <= 4) {
        coordenadas = game.createSprite(coordenada_x, coordenada_y)
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    coordenada_y += 1
    basic.showNumber(coordenada_y)
    basic.pause(2000)
})
let coordenadas: game.LedSprite = null
let coordenada_y = 0
let coordenada_x = 0
coordenada_x = 0
coordenada_y = 0
let vuelos = 0
basic.forever(function () {
    if (!(validar_coordenadas())) {
        basic.showIcon(IconNames.Yes)
    }
})
