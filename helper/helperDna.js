
module.exports = {
    isMutant: function  (dna){
        let counter = checkDiagonally(dna) +  checkVertical(dna) + checkHorizontal(dna) ;
        return (counter > 1);
    }
}



 function checkVertical  (dna){

    let counter =0;
    for (i=0;i<dna[1].length;i++) {

        let last = '';
        let coin = 0;
        for (j=0;j<dna.length;j++) {
            dna[j].charAt(i);
            if (last != dna[j].charAt(i)) {
                last =dna[j].charAt(i)
                coin = 1;
            } else {
                coin++;
                if (coin == 4) {
                    coin=0;
                    counter++;
                    break;
                }
            }
        }
    }
    return counter;
}
 function checkDiagonally  (dna){

    let counter = 0;
    let last = '';
    let coin = 0;
    for (i=0;i<dna.length;i++) {


        let current = dna[i].charAt(i);
        
        if (last != dna[i].charAt(i)) {
            last = dna[i].charAt(i)
            coin = 1;
        } else {
            coin++;
            if (coin == 4) {
                coin = 0;
                counter++;
                break;
            }
        }

    }
    return counter;
}

function checkHorizontal  (dna){

    let counter = 0;
    for (i=0;i<dna.length;i++) {

        let last = '';
        let coin = 0;
        for (j=0;j<dna[i].length;j++) {
            dna[i].charAt(j);
            if (last != dna[i].charAt(j)) {
                last =dna[i].charAt(j)
                coin = 1;
            } else {
                coin++;
                if (coin == 4) {
                    coin = 0;
                    counter++;
                    break;
                }
            }
        }
    }
    return counter;
};

