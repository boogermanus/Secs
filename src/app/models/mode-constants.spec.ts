import { ModeConstants } from './mode-constants';

describe('ModeConstants', () => {
  it('should create an instance', () => {
    expect(new ModeConstants()).toBeTruthy();
  });

  it('should have method modes()', () => {
    expect(ModeConstants.modes).toBeDefined();
  });

  it('should have two modes', () => {
    const modes = ModeConstants.modes();

    expect(modes.length).toEqual(2);
  });
});
