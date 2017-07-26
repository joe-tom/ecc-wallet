
var secret = new Uint8Array(64)
window.crypto.getRandomValues(secret)

var kP = nacl.sign.keyPair.fromSecretKey(secret)


var pub = pump([
  sjcl.codec.base64.fromBits,
  sjcl.codec.utf8String.toBits,
  Function.apply.bind(String.fromCharCode, null),
  kP.publicKey
])
var priv = pump([
  sjcl.codec.base64.fromBits,
  sjcl.codec.utf8String.toBits,
  Function.apply.bind(String.fromCharCode, null),
  kP.secretKey
])

publicKey.innerHTML  += pub
privateKey.innerHTML += priv









function pump(a) {
  var result = a.pop()
  while (a.length) {
    result = a.pop()(result)
  }
  return result
}