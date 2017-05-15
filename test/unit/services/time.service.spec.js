describe('unit -> services -> time', () => {

  const format = td.function();
  const momentStub = () => ({ format });

  const time = load('routes/services/time.service', { 'moment': momentStub });

  it('Should have shortcuts to date formating', () => {
    expect(time.dateTime).to.exist;
    expect(time.dateTime.now).to.exist;
    expect(time.dateTime.now.asString).to.be.a('Function');
  });

  it('Should format the current datetime with default formatting', () => {

    time.dateTime.now.asString();

    expect(format).to.have.been.calledWith('Y-MM-D-hh-mm-ss');
  });

  it('Should format the current datetime with default formatting', () => {

    time.dateTime.now.asString('bla-bla-bla');

    expect(format).to.have.been.calledWith('bla-bla-bla');
  });
});
