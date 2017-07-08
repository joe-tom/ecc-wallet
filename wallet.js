
var base64 = sjcl.codec.base64
var Secp256k1 = sjcl.ecc.curves.k256

var keys = sjcl.ecc.ecdsa.generateKeys(Secp256k1)
var pub = keys.pub

publicKey.innerHTML  += base64.fromBits(pub.get().x.concat(pub.get().y))
privateKey.innerHTML += base64.fromBits(keys.sec.get())