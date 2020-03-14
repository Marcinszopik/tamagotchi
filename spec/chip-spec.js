beforeEach(function() {
    chip = new ("Chip");
    chip.setHunger();
  });

  afterEach(function () {
    jest.clearAllTimers();
});
