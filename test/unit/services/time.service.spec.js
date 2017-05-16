describe('unit -> services -> time', () => {

  const moment = ({ format: td.function() });

  const time = load('routes/services/time.service', { 'moment': () => moment });

  it('Should have shortcuts to date formating', () => {
    expect(time.now).to.exist;
    expect(time.now.asString).to.be.a('Function');
  });

  it('Should format the current datetime with default formatting', () => {

    time.now.asString();

    expect(moment.format).to.have.been.calledWith('Y-MM-D-hh-mm-ss');
  });

  it('Should format the current datetime with default formatting', () => {

    time.now.asString('bla-bla-bla');

    expect(moment.format).to.have.been.calledWith('bla-bla-bla');
  });
});
