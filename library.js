/*
Each Library includes:
- a name and creator (both strings)
- many playlists (starts as empty array).
Playlist objects can be added to an instance of a library
*/
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

/*
Each Playlist includes:
- a name which is required upon creation
- many tracks
- overallRating function (calculates rating by averaging the rating of its tracks)
- totalDuration function which will sum the duration of all of its tracks
*/
class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  get overallRating() {
    return this.calcOverallRating();
  }

  get totalDuration() {
    return this.calcTotalDuration();
  }

  calcOverallRating() {
    let total = 0;
    for(var track in this.tracks) {
      total += this.tracks[track].rating;
    }

    return total/this.tracks.length;
  }

  calcTotalDuration() {
    let length = 0;
    for(var track in this.tracks) {
      length += this.tracks[track].length;
    }

    return length;
  }
}

/*
Each Track includes a title, rating (an integer from 1 to 5) and a length
(integer in seconds) all of which are required when creating a new track
*/
class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}


const library1 = new Library('new', 'me');
const library2 = new Library('new2', 'me2');
const playlist1 = new Playlist('newplaylist')
const t1 = new Track('t1', 5, 10)
const t2 = new Track('t2', 5, 10)
const t3 = new Track('t3', 5, 10)
const t4 = new Track('t4', 4, 10)
const t5 = new Track('t5', 3, 5)
const newtrack = new Track('newtrack', 3, 5)
playlist1.addTrack(t1)
playlist1.addTrack(t2)
playlist1.addTrack(t3)
playlist1.addTrack(t4)
playlist1.addTrack(t5)
library1.addPlaylist(playlist1);
library1.addPlaylist(playlist1);
console.log(library1.playlists[0].tracks)
playlist1.addTrack(newtrack)
console.log(library1.playlists[0].tracks)


// console.log(library1);
// console.log(library2);
// console.log(playlist1);
//
// console.log('\n');
//
// console.log('overall rating', playlist1.overallRating);
// console.log('total duration', playlist1.totalDuration);
