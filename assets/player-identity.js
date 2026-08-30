// Star Word Quest — shared player identity
//
// Each game (Hangman, Riddles, Trivia Climb) keeps its own scores, since
// they're different point economies. But asking "who's playing?" on every
// single game is annoying when it's the same kid on the same device. This
// module stores just the name + grade in one shared localStorage key so
// every game can skip straight past the "who's playing?" screen once it's
// been answered anywhere on the site.
//
// Nothing here leaves the browser — same local-only approach as everything
// else on this site.

window.StarWordQuestIdentity = {
  KEY: 'starWordQuest_currentPlayer',

  get: function(){
    try{
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e){ return null; }
  },

  set: function(name, grade){
    try{
      localStorage.setItem(this.KEY, JSON.stringify({ name: name, grade: grade }));
    } catch(e){ /* storage unavailable — game still works, just won't remember */ }
  },

  clear: function(){
    try{ localStorage.removeItem(this.KEY); } catch(e){}
  }
};
