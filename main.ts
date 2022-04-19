function CreaEnemigo () {
    Enemigo = game.createSprite(randint(0, 4), randint(0, 4))
}
let Enemigo: game.LedSprite = null
basic.clearScreen()
let Jugador = game.createSprite(0, 0)
game.setScore(0)
CreaEnemigo()
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 600) {
        Jugador.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -600) {
        Jugador.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 600) {
        Jugador.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -600) {
        Jugador.change(LedSpriteProperty.Y, -1)
    }
    if (Jugador.isTouching(Enemigo)) {
        game.addScore(1)
        Enemigo.delete()
        CreaEnemigo()
    }
})
