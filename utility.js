define('UsrMathUtility', [], function() {

    return {
        summary: function(a,b) {
            return a+b;
        }
    }
});

define('UsrCalcUtility', ['UsrMathUtility'], function(UsrMathUtility){

    return {
        sum: UsrMathUtility.summary
    }
});