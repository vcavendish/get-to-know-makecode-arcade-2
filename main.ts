controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.hearts, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.splash("Something more exciting!")
mySprite = sprites.create(assets.image`MyVCGRunner`, SpriteKind.Player)
