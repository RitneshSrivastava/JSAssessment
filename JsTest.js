/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs = [] //defining array to store multiple variables

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_surname, _skincolor, _pant, _bling) { //parameters and this underscores are just styling way
const NFT = { //object
    "surname": _surname,    //defining the properties
    "skincolor": _skincolor,
    "pant": _pant,
    "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted: " + _surname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID: \t\t" + (i+1));
        console.log("Surame: \t\t" + NFTs[i].surnamename);
        console.log("Skincolor: \t" + NFTs[i].skincolor);
        console.log("Pant:  " + NFTs[i].pant);
        console.log("Bling: \t\t" + NFTs[i].bling);

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Srivastav","Brown","BlueJeans","Silverchain");
mintNFT("ShuklaJi","White","BlueJeans","Goldchain");
mintNFT("Maddeshiya","White","BlueJeans","Goldchain");
mintNFT("Nandwani","White","BlueJeans","Goldchain");


listNFTs();
getTotalSupply();
