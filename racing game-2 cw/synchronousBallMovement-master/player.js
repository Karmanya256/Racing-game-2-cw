class Player{
    constructor(){

    }
    getCount(){
        var PlayerRef = database.ref("playerCount")
        PlayerRef.on("value",function(data){
        playerCount = data.val();
        
        })
}
    updateC(count){
        database.ref("/").update({
        playerCount:count
        }) 
    }
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
        name:name
        })
    }
}