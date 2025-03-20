var beerNumber = 99;

function beer() {

    while (beerNumber >= 1) {

        console.log(beerNumber + " bottles of beer on the wall, " + beerNumber + " bottles of beer.");
        beerNumber --;

        if (beerNumber === 0) {
            
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
            
        } else {

                    console.log("Take one down and pass it around, " + beerNumber + " bottles of beer on the wall.");
            
        }
    }

        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        beerNumber = 99;
        console.log("Go to the store and buy some more, " + beerNumber + " bottles of beer on the wall.");
    
}
