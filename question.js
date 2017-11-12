class Question {
  constructor(question) {
    this.content = question;
    this.save();
  }

  save () {
    this.constructor._All.push(this);
  }

  static All() {
    return this._All;
  }

  static Find (id) {
    const index = id - 1;
    return this.All()[index];
  }

  matchesID () {

  }

}

Question._All = []

const why = new Question("Why?");
console.log(Question.Find(1))
