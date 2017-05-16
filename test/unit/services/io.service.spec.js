describe('unit -> services -> io', () => {

    const pathStub = { 'join': () => 'path.join' };
    const fsStub = { };

    const stubs = { 'path': pathStub, 'fs': fsStub };

    const io = load('services/io.service', stubs);

    it('Should have a shortcut to path module', () => {
      expect(io.path).to.exist;
      expect(io.path.join).to.equal(pathStub.join);
    });

    it('Should have a shortcut to JSON module', () => {
      expect(io.json).to.exist;
      expect(io.json.stringify).to.equal(JSON.stringify);
    });

    it('Should have a promise wrapper for fs.writeFile', () => {

      fsStub.writeFile = td.function();

      const write = io.file.write();

      expect(write).to.be.an('Promise');
    });

    it('Should call fs.writeFile with success', done => {

      fsStub.writeFile = td.function();

      td.when(fsStub.writeFile('filename', 'content')).thenCallback(null);

      const write = io.file.write('filename', 'content');

      write.then(done);
    });

    it('Should call fs.writeFile as expected', done => {

      fsStub.writeFile = td.function();

      const writingError = new Error('Failed to write something');
      td.when(fsStub.writeFile('file', 'content')).thenCallback(writingError);

      const write = io.file.write('file', 'content');

      write.catch(forwardedError => {
        expect(forwardedError).to.equal(writingError);
        return done();
      });
    });
});
