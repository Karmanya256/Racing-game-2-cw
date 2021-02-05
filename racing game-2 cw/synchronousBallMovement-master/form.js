class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("car racing game")
        title.position(200,50)
        var input = createInput("name")
        input.position(200,100)
        var button = createButton("play")
        button.position(200,200)
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount+=1;
            player.update(name)
            player.updateC(playerCount)
            var greetings = createElement("h3")
            greetings.html("hello"+ name)
            greetings.position(150,150)
        })
    }
}