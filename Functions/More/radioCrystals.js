function radioCrystals(arr) {
    let desiredThickness = arr[0];
    let transportingAndWashingCount = 0;

    function cut(crystal) {
        crystal = crystal / 4;
        return crystal;
    }

    function lap(crystal) {
        crystal = crystal * 0.8;
        return crystal;
    }

    function grind(crystal) {
        crystal -= 20;
        return crystal;

    }

    function etch(crystal) {
        crystal -= 2;
        return crystal;
    }

    function xRay(crystal) {
        crystal += 1;
        return crystal;
    }

    function transportingAndWashing(crystal) {
        console.log(`Transporting and washing`);
        crystal = Math.floor(crystal);
        return crystal;
    }


    for (let i = 1; i < arr.length; i++) {
        let crystal = arr[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xRayCount = 0;
        console.log(`Processing chunk ${crystal} microns`);

        while (crystal > desiredThickness) {
            while (crystal / 4 >= desiredThickness) {
                crystal = cut(crystal);
                cutCount++;
            }
            if (cutCount > 0) {

                console.log(`Cut x${cutCount}`);

                crystal = transportingAndWashing(crystal);
                transportingAndWashingCount++;
            }

            while (crystal * 0.8 >= desiredThickness) {
                crystal = lap(crystal);
                lapCount++;
            }
            if (lapCount > 0) {

                console.log(`Lap x${lapCount}`);


                crystal = transportingAndWashing(crystal);
                transportingAndWashingCount++;
            }

            while (crystal - 20 >= desiredThickness) {
                crystal = grind(crystal);
                grindCount++;
            }
            if (grindCount > 0) {

                console.log(`Grind x${grindCount}`);


                crystal = transportingAndWashing(crystal);
                transportingAndWashingCount++;
            }

            while (crystal - 2 >= desiredThickness - 1) {
                crystal = etch(crystal);
                etchCount++;
            }
            if (etchCount > 0) {

                console.log(`Etch x${etchCount}`);


                crystal = transportingAndWashing(crystal);
                transportingAndWashingCount++;
            }

            if (crystal < desiredThickness && xRayCount === 0) {
                crystal = xRay(crystal)
                xRayCount++;
            }
            if (xRayCount > 0) {

                console.log(`X-ray x${xRayCount}`);
            }


        }
        console.log(`Finished crystal ${crystal} microns`);
    }
}
radioCrystals([1000, 4000, 8100])