ioService = load('app/services/io');

describe('component -> services -> io', () => {

  it ('should save a file', done => {
    ioService.file.write('/tmp/bla.txt', 'bla')
      .then(done)
      .catch(done);
  });

});
