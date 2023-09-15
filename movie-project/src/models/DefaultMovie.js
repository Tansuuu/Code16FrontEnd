class DefaultMovie {
  i = {};
  constructor(data) {
    this.id = data.movieId;
    this.i.imageUrl = data.i.imageUrl;
    this.l = data.l;
    this.q = data.q;
    this.rank = data.rank;
    this.s = data.s;
    this.y = data.y;
    this.qid = data.qid;
  }
}

export default DefaultMovie;
