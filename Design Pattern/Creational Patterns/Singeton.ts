
// Factory method	

// Singleton

// Abstract

// Simple

// Builder
class Singotone {
    static instant: Singotone
    private constructor() {
        console.log("hello");
    }
    static getSingetone () {
        if(!this.instant) {
            this.instant = new Singotone()
        }
        return this.instant
    }
    public sayHello() {
        console.log("ngu")
    }
}
const singetone = Singotone.getSingetone()
console.log(singetone.sayHello(), "ne")