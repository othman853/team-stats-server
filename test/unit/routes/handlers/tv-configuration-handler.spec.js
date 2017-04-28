const handler = load('app/routes/handlers/tv-configuration-handler');

describe('unit -> handlers -> tv-configuration-handler', () => {

  it('Should return a handler with post method', () => {
    const builtHandler = handler();
    expect(builtHandler.post).to.exist;
    expect(builtHandler.post).to.be.a('function');
  });

  it.skip('Should save the configuration', () => {

    const services = {
      tvConfiguration: { save: td.function() },
      socket: { channels: { tv: { emit: td.function() } } }
    };

    const request = {
      body: { someData: 'bla' }
    };

    const response = {
      status: td.function('response.status'),
      json: td.function('response.json')
    };

    td.when(services.tvConfiguration.save(request.body)).thenResolve({});

    const builtHandler = handler(services);

    builtHandler.post(request, response);

  });


});
