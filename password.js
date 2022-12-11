let password = "a";

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 `~!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

class Letter {
    constructor() {
        this.v = 0;
    };

    incriment() {
        if (this.v < chars.length - 1) {
            this.v = this.v + 1;
            return 1;
        } else {
            this.v = 0;
            return 0;
        };
    };

    get value() { return chars[this.v]; };
};

class Word {
    constructor() {
        this.letters = new Array(new Letter());
    };

    incriment() {
        try {
            for (let i = 0; this.letters[i].incriment() == 0; i++) {};
        } catch {
            this.letters.push(new Letter());
        };
    };

    get value() {
        let out = "";

        for (let i of this.letters) {
            out = out + i.value;
        };
        
        return out;
    };
};

let x = new Word();
let i = 0
while (x.value !== password) {
    console.log(i, x.value);
    x.incriment();
    i = i + 1
};
console.log(i, x.value);
