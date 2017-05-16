describe('unit -> services tv-configuration', () => {

  const time = {
    now: {
      asString: td.function()
    }
  };

  const io = {
    file: {
      write: td.function()
    },
    json: {
      stringify: td.function()
    },
    path: {
      join: td.function()
    }
  };

  const stubs = {
    './time.service': time,
    './io.service': io
  };

  const tvConfig = load('services/tv-configuration.service', stubs);

  it('Should have a save method', () => {

    expect(tvConfig.save).to.exist;
    expect(tvConfig.save).to.be.a('Function');

  });

  it('Should return a promise on save', () => {

    const saveResult = tvConfig.save();

    expect(saveResult).to.be.a('Promise');

  });

});
