const timeService = load('app/services/time');
const moment = require('moment');

describe('unit -> service -> time', () => {

  it('Should return the current dateTime in the default format', () => {
    const expectedDate = moment().format('Y-MM-D-hh-mm-ss');

    const actualDate = timeService.dateTime.now.asString();

    expect(actualDate).to.eql(expectedDate);
  });

  it('Should return the current dateTime in the expected format', () => {
    const expectedFormat = 'D/MM/Y hh:mm:ss';
    const expectedDate = moment().format(expectedFormat);

    const actualDate = timeService.dateTime.now.asString(expectedFormat);

    expect(actualDate).to.eql(expectedDate);
  });

});
