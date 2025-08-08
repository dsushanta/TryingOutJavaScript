let friends_joey = {
  name : 'Joey',
  age : 30,
  favoriteDialogue : 'How you Doing !!',
  series : function(){return 'Friends';},
  fullName : function(familyName) {
    return this.name + ' ' + familyName;
  }
};

console.log(friends_joey.fullName('Tribbiani'));