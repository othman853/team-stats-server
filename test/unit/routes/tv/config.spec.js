const config = load('app/routes/tv/config');

describe('unit -> route -> tv -> config', () => {

  it('Should have the config attribute', () => {
    expect(config().post).to.exist;
    expect(config().post).to.be.a('function');
  });

  it('Should emit a new socket event with the received data', () => {
    const socket = { emit: sinon.stub() };
    const request = { body: { data: 'whatever' } };
    const response = { sendStatus: sinon.stub() };

    config(socket).post(request, response);

    expect(socket.emit).to.have.been.calledWith('config-update', request.body);
    expect(response.sendStatus).to.have.been.calledWith(200);
  });

});
