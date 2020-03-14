export class tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.healthLevel = 5;
    this.moodLevel = 8;
  }

  didYouGetBit() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
   setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
}

didTheDogBark() {
  if (this.moodLevel > 4) {
    return false;
  } else {
    return true;
  }
}


  mood() {
    this.moodLevel = 8;
  }
    setEmotion() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }

  didTheDogGoToSleep() {
    if (this.healthLevel > 1) {
      return false;
    } else {
    }
  }


  play() {
    this.healthLevel = 5;
  }
    setEnergy() {
    setInterval(() => {
      this.healthLevel--;
    }, 1000);


  }
}

