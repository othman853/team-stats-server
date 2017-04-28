const serviceConstructor = load('app/routes/services/tv-configuration-service');

describe('unit -> services -> tv-configuration-service', () => {

  it('Should return a handler with post method', () => {
    const service = serviceConstructor();
    expect(service.save).to.exist;
    expect(service.save).to.be.a('function');
  });

  it.skip('Should save the configuration', (done) => {

    // expect(services.tvConfiguration.save).to.have.been.called;
    // expect(response.status).to.have.been.called;
    // expect(response.json).to.have.been.called;

  });


});
