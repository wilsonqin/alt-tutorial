var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');

class FavoritesStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      removeFavoriteLocation: LocationActions.UNFAVORITE_LOCATION,
    });
  }

  addFavoriteLocation(location) {
    this.locations.push(location);
  }

  removeFavoriteLocation(location){
    console.log(this.locations);
    var ind = -1;
    for(var i = 0; i < this.locations.length; i += 1){
      if(location.id === this.locations[i].id){
        ind = i;
        break;
      }
    }

    this.locations.splice(ind,1);
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
