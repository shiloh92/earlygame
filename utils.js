// Various functions needed by the scripts
function chunks(arr, size = 2) {
    return arr
        .map((x, i) => i % size == 0 && arr.slice(i, i + size))
        .filter((x) => x);
};

exports.chunks = chunks;

function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

exports.makeid = makeid;

function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
        const ri = Math.floor(Math.random() * (i + 1));
        [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

exports.shuffleFisherYates = shuffleFisherYates;

function precise(x, y = 4) {
    return Number.parseFloat(x).toFixed(y);
}

exports.precise = precise;

function nextRandomNumber(){
  var hi = this.seed / this.Q;
  var lo = this.seed % this.Q;
  var test = this.A * lo - this.R * hi;
  if(test > 0){
    this.seed = test;
  } else {
    this.seed = test + this.M;
  }
  return (this.seed * this.oneOverM);
}

function RandomNumberGenerator(){
  var d = new Date();
  this.seed = 2345678901 + (d.getSeconds() * 0xFFFFFF) + (d.getMinutes() * 0xFFFF);
  this.A = 48271;
  this.M = 2147483647;
  this.Q = this.M / this.A;
  this.R = this.M % this.A;
  this.oneOverM = 1.0 / this.M;
  this.next = nextRandomNumber;
  return this;
}

function createRandomNumber(Min, Max){
  var rand = new RandomNumberGenerator();
  return Math.round((Max-Min) * rand.next() + Min);
}

exports.nextRandomNumber = nextRandomNumber;
exports.RandomNumberGenerator = RandomNumberGenerator;
exports.createRandomNumber = createRandomNumber;