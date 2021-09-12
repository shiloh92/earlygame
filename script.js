//const fetch = require('node-fetch'); //node only

async function LogIt(){
    const wax = new waxjs.WaxJS({
  rpcEndpoint: 'https://wax.greymass.com'
});
const userAccount = await wax.login(); 
 document.getElementById('creatureCount').innerHTML= "Logged in "  + wax.userAccount;
var url = "https://test.wax.api.atomicassets.io/atomicassets/v1/accounts/" + wax.userAccount + "/cutecrushies";
    console.log(url);
  

     
}
 
//async function countCrushies(){   
//    
// var payload=[];
// var url = "https://wax.api.atomicassets.io/atomicassets/v1/accounts/" + wax.userAccount +"/cutecrushies/";
//
//request(
//	url, 
//	function(error, response, body) {  
//         
//        var getData = JSON.parse(body).data;
//        var a = getData.schemas[0];  
//        
//        document.getElementById('creatureCount').innerHTML=a;
//        
//		(async () => {
//
//			await api.transact({
//				actions: payload
//			}, {
//				blocksBehind: 3,
//				expireSeconds: 120,
//			});
//				})(); 
//  
//	});
//          
//}

var newForestStats = []; 
var newLandNumbers=[];


var terraintype_array=[];
var enemyclass_array=[];
var difficultylevel_array=[];
var rewardtype_array=[];
var placenames_array=[];

var alldata=[];
var lc=[];
var savedata= 
  [[2,0,1,0,0,0,1,0,0,2,2,2,0,0,2,0,0,0,0,0,2,2,2,0,0,0,2,3,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,2,2,0,0,0,0,2,2,2,3,1,0,0,0,2,0,2,0,0,2,0,0,0,2,0,2,0,2,0,0,1,0,0,0,2,2,0,2,0,0,0,0,2,0,0,2,2,2,2,2,1,0,0,0,2,2,2,0,0,2,0,0,1,0,0,2,0,2,2,2,3,0,0,2,1,0,0,2,0,0,2,0,0,2,2,2,2,2,0,0,2,2,2,0,0,0,0,2,2,0,0,2,3,0,0,0,0,2,0,2,2,3,2,3,2,0,0,2,0,2,0,0,0,2,0,0,2,0,2,2,3,2,2,0,0,2,0,0,0,0,2,3,0,0,2,0,0,0,0,2,0,0,2,0,0,3,0,0,0,2,2,2,0,3,2,0,0,0,2,0,0,0,0,2,2,0,2,2,0,0,2,0,0,0,0,0,1,2,0,2,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,1,0,0,0,1,0,0],['forest','land','water','land','land','land','water','land','land','forest','forest','forest','land','land','forest','land','land','land','land','land','forest','forest','forest','land','land','land','forest','castle','land','land','forest','land','land','forest','land','land','forest','land','land','land','forest','land','land','land','forest','forest','land','land','land','land','forest','forest','forest','castle','water','land','land','land','forest','land','forest','land','land','forest','land','land','land','forest','land','forest','land','forest','land','land','water','land','land','land','forest','forest','land','forest','land','land','land','land','forest','land','land','forest','forest','forest','forest','forest','water','land','land','land','forest','forest','forest','land','land','forest','land','land','water','land','land','forest','land','forest','forest','forest','castle','land','land','forest','water','land','land','forest','land','land','forest','land','land','forest','forest','forest','forest','forest','land','land','forest','forest','forest','land','land','land','land','forest','forest','land','land','forest','castle','land','land','land','land','forest','land','forest','forest','castle','forest','castle','forest','land','land','forest','land','forest','land','land','land','forest','land','land','forest','land','forest','forest','castle','forest','forest','land','land','forest','land','land','land','land','forest','castle','land','land','forest','land','land','land','land','forest','land','land','forest','land','land','castle','land','land','land','forest','forest','forest','land','castle','forest','land','land','land','forest','land','land','land','land','forest','forest','land','forest','forest','land','land','forest','land','land','land','land','land','water','forest','land','forest','land','land','land','forest','land','land','land','land','forest','land','land','land','land','land','forest','land','water','land','land','land','water','land','land'], ['Grassy Hills','Crushie Forest','Cat Tails Cove','Bird Song Hills','Butterfly Fields','Bird Song Hills','Calm Waters','Summerwind Valley','Picnic Valley','Birdbirch Forest','Dusty Branch Forest','Screeching Timber Forest','Picnic Valley','Butterfly Fields','Sneakytree Forest','Summerwind Valley','Butterfly Fields','Morningcheer Hills','Grassy Hills','Grassy Hills','Screeching Timber Forest','Creaking Elm Forest','Spiderking Forest','Bird Song Hills','Summerwind Valley','Happy Plains','Mumbling Mosquito Forest','Stayaway Castle','Butterfly Fields','Happy Plains','Caterpillar Forest','Summerwind Valley','Grassy Hills','Sneakytree Forest','Purring Plains','Purring Plains','Mossy Forest','Bird Song Hills','Picnic Valley','Purring Plains','Tangleknot Forest','Purring Plains','Butterfly Fields','Summerwind Valley','Sneakytree Forest','Mumbling Mosquito Forest','Butterfly Fields','Grassy Hills','Morningcheer Hills','Morningcheer Hills','Dewdrop Forest','Creaking Elm Forest','Fairy Elm Forest','Moonhowl Castle','Easy Sailing Lake','Picnic Valley','Summerwind Valley','Picnic Valley','Dusty Branch Forest','Butterfly Fields','Old Branch Forest','Morningcheer Hills','Picnic Valley','Wovensilk Forest','Grassy Hills','Purring Plains','Happy Plains','Dusty Branch Forest','Morningcheer Hills','Wovensilk Forest','Bird Song Hills','Tangleknot Forest','Purring Plains','Grassy Hills','Calm Waters','Morningcheer Hills','Picnic Valley','Summerwind Valley','Dewdrop Forest','Spooky Forest','Grassy Hills','Scratchingpost Forest','Purring Plains','Grassy Hills','Happy Plains','Grassy Hills','Birdbirch Forest','Happy Plains','Bird Song Hills','Perching Pine Forest','Barking Birch Forest','Howling Oaks Forest','Mumbling Mosquito Forest','Spooky Forest','Gentlebubbles Pond','Butterfly Fields','Picnic Valley','Picnic Valley','Dewdrop Forest','Caterpillar Forest','Screeching Timber Forest','Purring Plains','Summerwind Valley','Scratchingpost Forest','Happy Plains','Picnic Valley','Pleasant Pond','Grassy Hills','Bird Song Hills','Creaking Elm Forest','Summerwind Valley','Sneakytree Forest','Barking Birch Forest','Berrytree Forest','Moonhowl Castle','Purring Plains','Summerwind Valley','Sneakytree Forest','Soggy Britches Lake','Summerwind Valley','Happy Plains','Old Branch Forest','Bird Song Hills','Butterfly Fields','Dewdrop Forest','Butterfly Fields','Happy Plains','Birdbirch Forest','Mumbling Mosquito Forest','Spiderking Forest','Mushbrooms Forest','Fairy Elm Forest','Grassy Hills','Butterfly Fields','Creaking Elm Forest','Creaking Elm Forest','Whispers Forest','Bird Song Hills','Picnic Valley','Bird Song Hills','Summerwind Valley','Birdbirch Forest','Creaking Elm Forest','Happy Plains','Summerwind Valley','Wovensilk Forest','Afraidmore Castle','Purring Plains','Happy Plains','Happy Plains','Grassy Hills','Scratchingpost Forest','Summerwind Valley','Mossy Forest','Old Branch Forest','Tremblewhisker Castle','Barking Birch Forest','Tremblewhisker Castle','Run-n-Hide Forest','Summerwind Valley','Summerwind Valley','Wovensilk Forest','Grassy Hills','Birdbirch Forest','Morningcheer Hills','Morningcheer Hills','Grassy Hills','Scratchingpost Forest','Morningcheer Hills','Bird Song Hills','Perching Pine Forest','Picnic Valley','Whispers Forest','Mushbrooms Forest','Saberfang Castle','Fairy Elm Forest','Fairy Elm Forest','Bird Song Hills','Summerwind Valley','Spooky Forest','Bird Song Hills','Butterfly Fields','Butterfly Fields','Picnic Valley','Shadowy Forest','Afraidmore Castle','Purring Plains','Picnic Valley','Spooky Forest','Picnic Valley','Picnic Valley','Morningcheer Hills','Morningcheer Hills','Barking Birch Forest','Grassy Hills','Happy Plains','Sneakytree Forest','Purring Plains','Morningcheer Hills','Shakyknees Castle','Summerwind Valley','Grassy Hills','Summerwind Valley','Spooky Forest','Spooky Forest','Howling Oaks Forest','Picnic Valley','Shakyknees Castle','Scratchingpost Forest','Happy Plains','Purring Plains','Purring Plains','Wovensilk Forest','Happy Plains','Happy Plains','Butterfly Fields','Happy Plains','Creaking Elm Forest','Sneakytree Forest','Summerwind Valley','Berrytree Forest','Wovensilk Forest','Summerwind Valley','Summerwind Valley','Berrytree Forest','Picnic Valley','Happy Plains','Purring Plains','Bird Song Hills','Picnic Valley','Calm Waters','Perching Pine Forest','Purring Plains','Old Branch Forest','Bird Song Hills','Purring Plains','Grassy Hills','Spiderweb Forest','Happy Plains','Picnic Valley','Bird Song Hills','Happy Plains','Run-n-Hide Forest','Happy Plains','Morningcheer Hills','Morningcheer Hills','Butterfly Fields','Happy Plains','Shadowy Forest','Summerwind Valley','Mildew Marsh','Summerwind Valley','Grassy Hills','Bird Song Hills','Gentlebubbles Pond','Summerwind Valley','Happy Plains'], [ 'Easy','Easy','Medium','Medium','Medium','Medium','Medium','Easy','Medium','Hard','Easy','Easy','Medium','Easy','Hard','Medium','Medium','Medium','Medium','Easy','Hard','Easy','Medium','Easy','Medium','Medium','Medium','Hard','Easy','Easy','Hard','Medium','Easy','Medium','Medium','Easy','Easy','Easy','Easy','Easy','Hard','Easy','Medium','Medium','Medium','Easy','Easy','Medium','Medium','Easy','Hard','Medium','Hard','Medium','Medium','Medium','Medium','Medium','Medium','Easy','Medium','Easy','Medium','Easy','Easy','Medium','Medium','Hard','Easy','Easy','Easy','Easy','Easy','Medium','Medium','Medium','Medium','Easy','Hard','Easy','Easy','Easy','Medium','Medium','Easy','Easy','Medium','Medium','Easy','Hard','Easy','Easy','Hard','Hard','Hard','Medium','Easy','Easy','Easy','Easy','Medium','Medium','Medium','Medium','Easy','Easy','Medium','Medium','Medium','Hard','Medium','Easy','Medium','Hard','Hard','Easy','Medium','Easy','Hard','Easy','Easy','Hard','Easy','Easy','Medium','Easy','Medium','Hard','Hard','Hard','Easy','Medium','Easy','Medium','Medium','Hard','Easy','Easy','Easy','Easy','Medium','Easy','Medium','Medium','Medium','Hard','Hard','Medium','Easy','Medium','Medium','Easy','Easy','Hard','Medium','Medium','Easy','Medium','Medium','Easy','Easy','Easy','Medium','Easy','Easy','Easy','Medium','Hard','Medium','Easy','Easy','Medium','Hard','Medium','Hard','Medium','Easy','Medium','Medium','Medium','Easy','Medium','Medium','Medium','Hard','Medium','Medium','Medium','Easy','Medium','Easy','Medium','Easy','Medium','Easy','Medium','Medium','Easy','Easy','Medium','Medium','Medium','Easy','Medium','Medium','Hard','Easy','Hard','Easy','Easy','Easy','Easy','Easy','Medium','Easy','Easy','Medium','Hard','Medium','Medium','Hard','Medium','Easy','Medium','Easy','Easy','Easy','Easy','Easy','Easy','Medium','Medium','Medium','Easy','Medium','Easy','Medium','Medium','Easy','Medium','Medium','Easy','Medium','Easy','Medium','Easy','Medium','Medium','Easy','Easy','Medium','Medium','Medium','Easy','Hard','Easy','Medium'],[ 'More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Rares','More Uncommons','More Commons','More Commons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Rares','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Rares','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Rares','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Rares','More Rares','More Rares','More Rares','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Rares','More Rares','More Rares','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Rares','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Rares','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Rares','More Rares','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Uncommons' ],[ 'Ranged','Balanced','Balanced','Melee','Melee','Healer','Ranged','Ranged','Tank','Balanced','Healer','Tank','Melee','Melee','Ranged','Healer','Tank','Healer','Ranged','Melee','Melee','Ranged','Healer','Ranged','Melee','Tank','Balanced','Ranged','Ranged','Tank','Healer','Ranged','Healer','Tank','Melee','Ranged','Melee','Balanced','Melee','Balanced','Balanced','Melee','Ranged','Ranged','Tank','Ranged','Ranged','Tank','Melee','Balanced','Tank','Healer','Tank','Balanced','Healer','Ranged','Healer','Ranged','Ranged','Tank','Tank','Melee','Melee','Balanced','Melee','Tank','Melee','Healer','Melee','Ranged','Tank','Melee','Tank','Tank','Tank','Balanced','Healer','Balanced','Healer','Balanced','Melee','Tank','Balanced','Balanced','Healer','Melee','Tank','Healer','Healer','Melee','Melee','Tank','Healer','Ranged','Healer','Balanced','Tank','Ranged','Tank','Balanced','Healer','Healer','Tank','Melee','Healer','Balanced','Healer','Ranged','Healer','Balanced','Tank','Healer','Balanced','Healer','Melee','Tank','Healer','Balanced','Ranged','Ranged','Melee','Healer','Tank','Tank','Tank','Balanced','Balanced','Ranged','Tank','Balanced','Melee','Ranged','Melee','Healer','Balanced','Melee','Healer','Ranged','Healer','Ranged','Healer','Healer','Healer','Melee','Melee','Healer','Balanced','Ranged','Ranged','Healer','Melee','Balanced','Melee','Balanced','Healer','Healer','Melee','Ranged','Ranged','Balanced','Healer','Melee','Melee','Tank','Balanced','Melee','Healer','Melee','Healer','Balanced','Tank','Balanced','Healer','Balanced','Balanced','Healer','Melee','Ranged','Balanced','Ranged','Healer','Tank','Healer','Tank','Balanced','Healer','Ranged','Ranged','Balanced','Ranged','Balanced','Tank','Ranged','Melee','Healer','Healer','Ranged','Melee','Tank','Melee','Ranged','Healer','Balanced','Ranged','Balanced','Balanced','Balanced','Healer','Melee','Balanced','Tank','Balanced','Melee','Healer','Tank','Ranged','Healer','Melee','Melee','Melee','Tank','Tank','Tank','Healer','Melee','Healer','Ranged','Melee','Ranged','Melee','Ranged','Ranged','Tank','Ranged','Ranged','Ranged','Healer','Healer','Balanced','Ranged','Balanced','Tank','Healer','Ranged','Melee','Melee','Ranged','Tank','Ranged','Ranged','Healer','Balanced','Tank','Melee','Healer','Tank','Tank']];
  
var savedata2= 
  [[0,0,0,0,0,0,2,2,0,0,0,0,2,0,2,0,0,2,2,0,0,2,2,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1,0,2,0,2,2,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,2,0,2,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,2,0,0,0,0,0,2,2,2,2,0,2,0,3,0,0,2,0,2,0,0,0,0,0,2,2,1,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,2,2,0,2,2,0,0,2,0,0,0,2,0,2,2,2,0,0,0,1,2,0,3,0,0,0,0,2,0,2,0,2,2,0,2,2,0,0,0,2,0,0,2,0,2,3,0,0,2,0,0,0,0,2,2,0,0,0,0,3,2,0,2,0,0,2,0,0,0,2,0,1,2,2,2,0,0,0,0,2,0,0,3,0,0,3,0,0,0,0,2,0,3,0,2,3,0,2,0,2,0,0,2,0,2,2,0,0,2,2,0,0,0,0,2,0,0,0,0,2,2,0],['land','land','land','land','land','land','forest','forest','land','land','land','land','forest','land','forest','land','land','forest','forest','land','land','forest','forest','land','forest','forest','land','forest','land','land','land','land','land','land','land','land','land','land','castle','land','land','land','water','land','forest','land','forest','forest','land','land','land','land','land','land','land','land','forest','land','land','land','forest','land','land','forest','land','land','forest','land','forest','land','land','land','land','land','land','forest','forest','land','land','land','land','forest','forest','land','forest','land','land','land','land','land','forest','forest','forest','forest','land','forest','land','castle','land','land','forest','land','forest','land','land','land','land','land','forest','forest','water','land','land','land','land','land','land','land','forest','land','land','forest','land','land','land','land','land','land','forest','land','land','land','forest','land','land','forest','forest','land','forest','forest','land','land','forest','land','land','land','forest','land','forest','forest','forest','land','land','land','water','forest','land','castle','land','land','land','land','forest','land','forest','land','forest','forest','land','forest','forest','land','land','land','forest','land','land','forest','land','forest','castle','land','land','forest','land','land','land','land','forest','forest','land','land','land','land','castle','forest','land','forest','land','land','forest','land','land','land','forest','land','water','forest','forest','forest','land','land','land','land','forest','land','land','castle','land','land','castle','land','land','land','land','forest','land','castle','land','forest','castle','land','forest','land','forest','land','land','forest','land','forest','forest','land','land','forest','forest','land','land','land','land','forest','land','land','land','land','forest','forest','land'], ['Purring Plains','Happy Plains','Summerwind Valley','Summerwind Valley','Morningcheer Hills','Summerwind Valley','Creaking Timber Forest','Mumbling Mosquito Forest','Picnic Valley','Butterfly Fields','Grassy Hills','Summerwind Valley','Screeching Timber Forest','Grassy Hills','Caterpillar Forest','Butterfly Fields','Butterfly Fields','Mumbling Mosquito Forest','Sneakytree Forest','Picnic Valley','Summerwind Valley','Fairy Elm Forest','Dewdrop Forest','Purring Plains','Spiderweb Forest','Mossy Forest','Morningcheer Hills','Birdbirch Forest','Morningcheer Hills','Purring Plains','Purring Plains','Morningcheer Hills','Purring Plains','Purring Plains','Butterfly Fields','Butterfly Fields','Happy Plains','Picnic Valley','Hiccup Castle','Morningcheer Hills','Bird Song Hills','Happy Plains','Cat Tails Marsh','Summerwind Valley','Screeching Timber Forest','Picnic Valley','Barking Birch Forest','Mumbling Mosquito Forest','Summerwind Valley','Butterfly Fields','Morningcheer Hills','Purring Plains','Summerwind Valley','Picnic Valley','Picnic Valley','Grassy Hills','Wovensilk Forest','Butterfly Fields','Picnic Valley','Grassy Hills','Wovensilk Forest','Summerwind Valley','Morningcheer Hills','Sneakytree Forest','Purring Plains','Grassy Hills','Mossy Forest','Picnic Valley','Mister E. Forest','Bird Song Hills','Picnic Valley','Happy Plains','Happy Plains','Happy Plains','Morningcheer Hills','Dewdrop Forest','Barking Birch Forest','Purring Plains','Bird Song Hills','Morningcheer Hills','Summerwind Valley','Screeching Timber Forest','Tangleknot Forest','Butterfly Fields','Tangleknot Forest','Butterfly Fields','Picnic Valley','Bird Song Hills','Picnic Valley','Summerwind Valley','Run-n-Hide Forest','Sneakytree Forest','Fairy Elm Forest','Creaking Elm Forest','Morningcheer Hills','Scratchingpost Forest','Summerwind Valley','Stayaway Castle','Grassy Hills','Grassy Hills','Shadowy Forest','Butterfly Fields','Creaky Forest','Butterfly Fields','Butterfly Fields','Summerwind Valley','Summerwind Valley','Purring Plains','Mister E. Forest','Dewdrop Forest','Beachball Beach','Morningcheer Hills','Summerwind Valley','Happy Plains','Butterfly Fields','Bird Song Hills','Picnic Valley','Morningcheer Hills','Shadowy Forest','Summerwind Valley','Happy Plains','Old Branch Forest','Butterfly Fields','Picnic Valley','Purring Plains','Bird Song Hills','Morningcheer Hills','Happy Plains','Mossy Forest','Grassy Hills','Happy Plains','Picnic Valley','Shadowy Forest','Picnic Valley','Summerwind Valley','Barking Birch Forest','Caterpillar Forest','Butterfly Fields','Fairy Elm Forest','Scratchingpost Forest','Summerwind Valley','Butterfly Fields','Perching Pine Forest','Happy Plains','Picnic Valley','Summerwind Valley','Barking Birch Forest','Purring Plains','Spiderweb Forest','Spiderking Forest','Perching Pine Forest','Grassy Hills','Bird Song Hills','Picnic Valley','Mooshy Marshes','Birdbirch Forest','Purring Plains','Saberfang Castle','Summerwind Valley','Purring Plains','Purring Plains','Morningcheer Hills','Run-n-Hide Forest','Picnic Valley','Shadowy Forest','Happy Plains','Sneakytree Forest','Birdbirch Forest','Picnic Valley','Spiderking Forest','Old Branch Forest','Summerwind Valley','Picnic Valley','Morningcheer Hills','Barking Birch Forest','Summerwind Valley','Butterfly Fields','Spiderweb Forest','Picnic Valley','Wovensilk Forest','Oh-no Castle','Happy Plains','Grassy Hills','Spiderking Forest','Butterfly Fields','Morningcheer Hills','Bird Song Hills','Morningcheer Hills','Scratchingpost Forest','Scratchingpost Forest','Purring Plains','Picnic Valley','Morningcheer Hills','Picnic Valley','Hiccup Castle','Mossy Forest','Happy Plains','Whispers Forest','Picnic Valley','Summerwind Valley','Perching Pine Forest','Picnic Valley','Butterfly Fields','Summerwind Valley','Run-n-Hide Forest','Purring Plains','Cat Tails Marsh','Run-n-Hide Forest','Dusty Branch Forest','Spiderweb Forest','Summerwind Valley','Grassy Hills','Happy Plains','Butterfly Fields','Fairy Elm Forest','Happy Plains','Morningcheer Hills','Dangerzone Castle','Bird Song Hills','Happy Plains','Dangerzone Castle','Happy Plains','Picnic Valley','Grassy Hills','Bird Song Hills','Spooky Forest','Bird Song Hills','Afraidmore Castle','Grassy Hills','Monkeydream Forest','Dangerzone Castle','Morningcheer Hills','Wovensilk Forest','Bird Song Hills','Howling Oaks Forest','Morningcheer Hills','Purring Plains','Perching Pine Forest','Bird Song Hills','Monkeydream Forest','Shadowy Forest','Morningcheer Hills','Purring Plains','Spiderweb Forest','Sneakytree Forest','Happy Plains','Happy Plains','Happy Plains','Summerwind Valley','Spiderking Forest','Picnic Valley','Happy Plains','Summerwind Valley','Summerwind Valley','Caterpillar Forest','Mushbrooms Forest','Picnic Valley'], [ 'Easy','Easy','Easy','Easy','Easy','Medium','Hard','Hard','Medium','Easy','Easy','Medium','Medium','Medium','Easy','Medium','Medium','Easy','Hard','Easy','Medium','Easy','Medium','Medium','Easy','Hard','Easy','Medium','Easy','Medium','Easy','Medium','Medium','Medium','Easy','Medium','Medium','Medium','Medium','Easy','Medium','Easy','Medium','Easy','Medium','Easy','Hard','Hard','Easy','Medium','Medium','Easy','Easy','Medium','Medium','Easy','Medium','Medium','Easy','Medium','Medium','Medium','Easy','Hard','Easy','Medium','Hard','Easy','Medium','Easy','Easy','Medium','Easy','Easy','Medium','Medium','Hard','Easy','Easy','Medium','Medium','Easy','Medium','Easy','Easy','Medium','Medium','Easy','Easy','Medium','Hard','Medium','Hard','Easy','Easy','Easy','Easy','Medium','Medium','Medium','Medium','Medium','Hard','Easy','Medium','Easy','Easy','Medium','Easy','Medium','Hard','Medium','Medium','Medium','Medium','Easy','Medium','Medium','Medium','Easy','Easy','Easy','Easy','Medium','Medium','Easy','Easy','Medium','Easy','Medium','Easy','Easy','Easy','Medium','Easy','Medium','Medium','Medium','Hard','Hard','Easy','Easy','Medium','Easy','Easy','Medium','Medium','Medium','Easy','Hard','Medium','Easy','Easy','Medium','Hard','Hard','Medium','Medium','Easy','Easy','Medium','Medium','Hard','Easy','Medium','Medium','Hard','Easy','Easy','Hard','Hard','Easy','Medium','Medium','Medium','Medium','Easy','Medium','Medium','Easy','Hard','Easy','Easy','Medium','Easy','Easy','Easy','Easy','Easy','Medium','Medium','Medium','Medium','Medium','Hard','Hard','Easy','Hard','Medium','Medium','Hard','Medium','Medium','Easy','Easy','Medium','Hard','Medium','Hard','Easy','Easy','Easy','Easy','Medium','Medium','Easy','Easy','Medium','Easy','Medium','Medium','Easy','Medium','Medium','Easy','Easy','Easy','Medium','Medium','Medium','Medium','Medium','Easy','Easy','Easy','Medium','Easy','Hard','Medium','Medium','Medium','Medium','Easy','Easy','Hard','Easy','Easy','Medium','Easy','Easy','Easy','Medium','Medium','Medium','Hard','Easy','Medium'],[ 'More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Rares','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Rares','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Rares','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Uncommons','More Rares','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Commons','More Rares','More Rares','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Uncommons','More Rares','More Uncommons','More Commons','More Rares','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Rares','More Uncommons','More Uncommons','More Rares','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Uncommons','More Uncommons','More Commons','More Uncommons','More Commons','More Commons','More Commons','More Uncommons','More Commons','More Commons','More Commons','More Commons','More Commons','More Commons' ],[ 'Ranged','Healer','Ranged','Melee','Melee','Ranged','Ranged','Ranged','Melee','Melee','Tank','Melee','Ranged','Healer','Melee','Ranged','Healer','Ranged','Healer','Healer','Melee','Healer','Melee','Ranged','Tank','Melee','Tank','Ranged','Balanced','Balanced','Balanced','Balanced','Melee','Melee','Melee','Healer','Melee','Melee','Healer','Tank','Ranged','Melee','Balanced','Healer','Balanced','Ranged','Melee','Melee','Healer','Balanced','Tank','Healer','Tank','Ranged','Healer','Tank','Ranged','Melee','Healer','Tank','Balanced','Ranged','Ranged','Balanced','Ranged','Ranged','Balanced','Ranged','Tank','Ranged','Ranged','Tank','Melee','Ranged','Tank','Healer','Healer','Melee','Healer','Melee','Ranged','Balanced','Healer','Melee','Melee','Ranged','Healer','Melee','Ranged','Ranged','Tank','Balanced','Balanced','Ranged','Tank','Healer','Ranged','Tank','Ranged','Tank','Tank','Healer','Healer','Healer','Balanced','Healer','Balanced','Ranged','Tank','Ranged','Balanced','Ranged','Healer','Balanced','Melee','Ranged','Melee','Melee','Tank','Balanced','Melee','Tank','Ranged','Ranged','Ranged','Healer','Tank','Tank','Tank','Balanced','Healer','Melee','Tank','Healer','Healer','Ranged','Healer','Melee','Tank','Ranged','Tank','Tank','Ranged','Balanced','Tank','Tank','Balanced','Ranged','Ranged','Healer','Ranged','Ranged','Tank','Healer','Melee','Ranged','Ranged','Tank','Healer','Balanced','Balanced','Balanced','Melee','Balanced','Tank','Balanced','Ranged','Balanced','Tank','Tank','Melee','Melee','Melee','Ranged','Balanced','Healer','Melee','Tank','Healer','Tank','Tank','Healer','Melee','Balanced','Balanced','Tank','Melee','Healer','Ranged','Balanced','Tank','Melee','Melee','Melee','Melee','Healer','Healer','Ranged','Healer','Melee','Healer','Tank','Ranged','Melee','Melee','Melee','Healer','Tank','Tank','Melee','Melee','Balanced','Tank','Balanced','Balanced','Balanced','Melee','Ranged','Melee','Balanced','Balanced','Tank','Balanced','Tank','Healer','Ranged','Tank','Melee','Ranged','Melee','Melee','Balanced','Healer','Healer','Balanced','Tank','Balanced','Balanced','Ranged','Healer','Healer','Balanced','Melee','Balanced','Healer','Melee','Healer','Balanced','Ranged','Balanced','Healer','Ranged','Healer','Healer','Balanced','Tank','Tank']];

// data for generating tiles
var maxSize=256;
var terrain=["land" ,  "water", "forest",  "castle"];
var classes=["Melee", "Healer", "Tank", "Ranged", "Balanced"];
var rarity=["More Commons", "More Uncommons", "More Rares"];
var difficulty=["Easy", "Medium", "Hard"];

var forests=["Spooky", "Whispers", "Mushbrooms", "Creaky", "Dewdrop", "Spiderweb", "Old Branch", "Shadowy", "Scratchingpost", "Monkeydream", "Birdbirch", "Perching Pine", "Howling Oaks", "Caterpillar", "Barking Birch", "Fairy Elm", "Creaking Elm", "Creaking Timber", "Mister E.", "Mumbling Mosquito", "Mossy", "Berrytree", "Sneakytree", "Run-n-Hide", "Tangleknot", "Wovensilk", "Spiderking", "Green Wizard's", "Screeching Timber"];

var waters=["Calm Waters", "Gentlebubbles Pond", "Mooshy Marshes", "Pleasant Pond" , "Easy Sailing Lake", "Beachball Beach", "Soggy Britches Lake", "Mildew Marsh", "Cat Tails Marsh", "Cat Tails Cove", "Sunbeam Shore"];

var lands=["Grassy Hills", "Purring Plains", "Butterfly Fields", "Happy Plains", "Picnic Valley", "Summerwind Valley", "Bird Song Hills", "Morningcheer Hills"];

var castles=["Shakyknees", "Tremblewhisker", "Saberfang", "Fleefoot", "Moonhowl", "Stayaway", "Dangerzone", "Afraidmore", "Oh-no", "Hiccup"];


function createWorldMap(){ 
document.getElementById('mapContainer').innerHTML="";

generateLandNumbers();
createNewMapArrayData();
createMapFromData();

}

   
function generateLandNumbers(){
 
var randomNum=randomIntFloor(0,101);
if(0>=randomNum<51){
lc.push(0);
 
} 
if(50<randomNum<=82){
  lc.push(1);
   
} 

 if(82<randomNum<=97){
  lc.push(2);

}

 if(97<randomNum<=100){
  lc.push(3); 
} 
  
} 
  

function loadMapData(dataArray){
  document.getElementById('mapContainer').innerHTML="";
    
  var container=document.getElementById('mapContainer'); 
 

  for(i=1; i<dataArray[0].length; i++){

   if(dataArray[1][i]=="land"){
  var squareDivClass="mapsquare tooltip";
   }

   if(dataArray[1][i]=="forest"){
 var squareDivClass="mapsquare forest tooltip";
   }

   if(dataArray[1][i]=="water"){

 var squareDivClass="mapsquare water tooltip";
   }

   if(dataArray[1][i]=="castle"){

 var squareDivClass="mapsquare castle tooltip";
   }
  
  

  var span1 = document.createElement('span'); 
  var span2 = document.createElement('span');  
  var span3 = document.createElement('span'); 
  var span4= document.createElement('span'); 
  var span5 = document.createElement('span'); 
  var span6 = document.createElement('span'); 


span1.setAttribute('class', "tooltiptext tooltip-left"); 
span2.setAttribute('class', 'requirementspan'); 
span3.setAttribute('class', 'randomspan');

if(dataArray[3][i]=="Hard"){ 
span4.setAttribute('class', 'diff_hard_span');
} else if(dataArray[3][i]=="Easy"){ 
span4.setAttribute('class', 'diff_easy_span');
} else if(dataArray[3][i]=="Medium"){ 
span4.setAttribute('class', 'diff_med_span');
}

span5.setAttribute('class', 'rarityspan');
span6.setAttribute('class', 'locationname');

if(dataArray[1][i]=="water"){
  
var landtype="Water Vehicle Required";

} else if(dataArray[1][i]=="castle"){

var landtype="Castle Key & Land Vehicle Required";

} else {

var landtype="Land Vehicle Required"; }
 


 var txt1 = document.createTextNode("#" + i + " " + dataArray[2][i]);
 var txt2 = document.createTextNode(landtype);
//  var txt3 = document.createTextNode("nothing");
 var txt4 = document.createTextNode(dataArray[3][i]);
 var txt5 = document.createTextNode(dataArray[4][i]);


// this span is the tool tip, all other spans inside it
span1.appendChild(txt1);
span2.appendChild(txt2);
// span3.appendChild(txt3);
span4.appendChild(txt4);
span5.appendChild(txt5);
span6.appendChild(txt1);
 
 span1.appendChild(span6);
span1.appendChild(span2);
// span1.appendChild(span3);
span1.appendChild(span4);
 span1.appendChild(span5);

  var div2 = document.createElement('div');
 
  
  div2.setAttribute('class', squareDivClass);
 
  div2.appendChild(span1); 
  append2();



function append2(){ 
div2.id = "mapsquare" + i;

 

//text node
var newText = document.createTextNode(i);

// the text div
var div3 = document.createElement('div');
div3.setAttribute('class', 'text');
div3.id = "text" + i;

div3.appendChild(newText);
div2.appendChild(div3);
// divRow.appendChild(div2);

container.appendChild(div2);
}

  } 

  }
 


function randomIntFromInterval(min, max) { // min and max included 
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

function randomIntFloor(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

   