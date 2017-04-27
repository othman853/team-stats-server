const tv = load('app/routes/tv');

describe('unit -> route -> tv ', () => {

  it('Should have the config attribute', () => {
    expect(tv.config.post).to.exist;
    expect(tv.config.post).to.be.a('function');
  });

  it('Should be a function that receives dependencies and returns a handler', () => {
    const handlerWithDependenciesInjected = tv.config.post();
    expect(handlerWithDependenciesInjected).to.be.a('function');
  });

  it('Should emit a new socket event with the received data', () => {
    const socket = { emit: sinon.stub() };
    const request = { body: { data: 'whatever' } };
    const response = { sendStatus: sinon.stub() };

    const handler = tv.config.post(socket);
    handler(request, response);

    expect(socket.emit).to.have.been.calledWith('config-update', request.body);
    expect(response.sendStatus).to.have.been.calledWith(200);
  });

});
