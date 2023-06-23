const myNFTs = [];
function mitNFT(_name,_eyeColor,_shirtType,_bling){
const NFT = {
  "name": _name,
  "eyeColor": _eyeColor,
  "shirtType": _shirtType,
  "bling": _bling
}
myNFTs.push(NFT);
}

function listNFTs() {
  for (let i = 0; i < myNFTs.length; i++) {
    console.log("NFT", i + 1);
    console.log("Name:", myNFTs[i].name);
    console.log("Eye Color:", myNFTs[i].eyeColor);
    console.log("Shirt Type:", myNFTs[i].shirtType);
    console.log("Bling:", myNFTs[i].bling);
    console.log("------------------------");
  }
}
function getTotalSupply(){
    console.log(myNFTs.length);
}
mitNFT("umesh","black","solid","diamond");
mitNFT("KUNAL","gold","check","goldchain");
mitNFT("karan","blue","v_shape","duck");
mitNFT("naman","green","simple","nine");
listNFTs();
getTotalSupply();
