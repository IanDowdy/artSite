$(window).on("load", function() {
let pushedData = 0;
let database = firebase.database();

$(".test").on("click", function(event) {
    event.preventDefault();
    pushedData++    
    let userInfo = "You have pushed data " + pushedData + " times.";

    database.ref().push({
        Pushed: userInfo
    });

    console.log(database.Pushed)
})

})