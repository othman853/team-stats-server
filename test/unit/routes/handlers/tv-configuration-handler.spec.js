const handler = load('app/routes/handlers/tv-configuration-handler');

describe('unit -> handlers -> tv-configuration-handler', () => {

  it('Should return a handler with post method', () => {
    const builtHandler = handler();
    expect(builtHandler.post).to.exist;
    expect(builtHandler.post).to.be.a('function');
  });

  it('Should save the configuration', () => {

    let saveThen;
    const saveStub = {
      then(fn) {
        saveThen = fn;
        return { catch: td.function() };
      }
    };

    const services = {
      tvConfiguration: { save: () =>  saveStub },
      socket: { channels: { tv: { emit: td.function() } } }
    };

    const request = {
      body: { someData: 'bla' }
    };

    const response = {
      sendStatus: td.function('response.sendStatus'),
      status: td.function('response.status'),
      json: td.function('response.json')
    };

    const builtHandler = handler(services);

    builtHandler.post(request, response);
    saveThen();

  });


});
