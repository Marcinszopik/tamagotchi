import { tamagotchi } from '../src/chip.js';

describe('Chip', () => {
    jest.useFakeTimers();
    let chip;

    beforeEach(function () {
        chip = new tamagotchi("Chip");
    });

    afterEach(function () {
        jest.clearAllTimers();
    });

///This is for feeding Chip//
    test('should have a name and a food level of 10 when it is created', () => {
        expect(chip.name).toEqual("Chip");
        expect(chip.foodLevel).toEqual(10);
    });

    test('should have a food level of 10 after 3001 milliseconds', () => {
        jest.advanceTimersByTime(3001);
        expect(chip.foodLevel).toEqual(10);

    });

    test('should get very hungry if the food level drops below zero', function() {
        chip.foodLevel = 0;
        expect(chip.didYouGetBit()).toEqual(true);
      });
    
      test('should not get very hungry if 10 seconds pass without feeding', function() {
        jest.advanceTimersByTime(10001);
        expect(chip.didYouGetBit()).toEqual(false);
      });

    
      test('should have a food level of ten if it is fed', function() {
        jest.advanceTimersByTime(9001);
        chip.feed();
        expect(chip.foodLevel).toEqual(10);
      });

///This is for Chp's Happiness//
      
test('should get very sad if the mood level drops below zero', function() {
  chip.moodLevel = 3;
  expect(chip.didTheDogBark()).toEqual(true);
});

  

//This is to show Chip's Health
    
test('should have a health level of 5 if it took a nap', function() {
  jest.advanceTimersByTime(12001);
  chip.feed();
  expect(chip.healthLevel).toEqual(5);

});


});
