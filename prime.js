const ZERO = new sjcl.bn(0)
const ONE  = new sjcl.bn(1)
const TWO  = new sjcl.bn(2)

function MillerRabin (num, k) {

    if (num.mod(2).equals(ZERO)) {
        return false
    }

    var s = num.sub(ONE)
    while (s.mod(2).equals(ZERO)) {
        s = s.divide(TWO)
    }

    for (var i = 0; i < k; i++) {
        a = 
    }



}