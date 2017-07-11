
const ZERO = new sjcl.bn(0)
const ONE = new sjcl.bn(1)


function Prime (n) {
    if (!this instanceof Prime) {
        return new Prime(n)
    }

    this.bitLen = n
    this.words = Math.ceil(n / 32)
    this.bad = false
    this.number = null

    this.new()
}



Prime.prototype.new = function () {

    var words = this.words

    // We can use a better rng later.
    this.number = sjcl.bn.fromBits(sjcl.random.randomWords(words, 10))
    this.test()

    // Using a loop to prevent overflow.
    while (this.bad) {
        this.number = sjcl.bn.fromBits(sjcl.random.randomWords(words, 10))
        this.test()
    }
}


Prime.prototype.test = function (k) {
    var number = this.number
    var upper = this.upper
    var n = this.bitLen

    // Check divisibility by 2.
    if (this.number.mod(2).equals(ZERO)) {
        this.bad = true
        return
    }

    // The Witness Loop:
    for (;k;k--) {
        var x = a.powermod(d,n)
        if (x.equals(ONE) || x.equals(upper)) {
            continue
        }

        for (var i = 1; i < r; i++) {
            x = x.powermod(2, n)

            if (x.equals(1)) {
                this.bad = false
                return
            }

            if (x.equals(upper)) {
                continue
            }
        }

        this.bad = true
        return
    }


    this.bad = false
}
