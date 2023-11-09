import init, * as wasm from "plonky2-wasm";

console.log("start");

await init();

let jwt = "{\"iss\":\"htaaatps://dev-9h47ajc9.us.au111th0666.com/\",\"sub\":\"twitter|33783412\",\"aud\":\"T15e646b4uhAryyoj4GNRon6zs4MrHFV\",\"iat\":1639173028,\"exp\":1639209028,\"nonce\":\"44017a89\"}";
let credential = "twitter|33783412";
let result = wasm.run(jwt, credential);
const arr1 = new Uint8Array(result.get_verifier());
const arr2 = new Uint8Array(result.get_proof());
console.log(arr1);
console.log(arr2);
console.log("haha");
