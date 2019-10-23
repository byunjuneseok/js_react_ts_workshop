var score1 = 0;
var score2 = 200;
const defaultScore = 0;

function outer()
{
    if (true) {
        let score: number;  // any-type
        score = 30;
        // score = "30";
    }

    for(let i = 0; i < 3; i++)
    {
        setTimeout(function() {
            console.log(i); 
        }, 100)
    }

    if (true) {
        var varScore = 100;
    }
    
    
    for(var j = 0; j < 3; j++)
    {
        setTimeout(function() {
            console.log(j);
        }, 100)
    }


}

outer();