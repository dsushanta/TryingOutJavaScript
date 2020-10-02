let friends_joey = {
    "Name" : "Joey",
    "Age" : 30,
    "FavoriteDialogue" : "How you Doing !!",
    "Series" : function(){return "Friends";},
    "FullName" : function(familyName) {
        return this.Name + " " + familyName;
    }
}

console.log(friends_joey.FullName("Tribbiani"));