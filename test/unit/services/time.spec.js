const timeService = load('app/services/time');
const moment = require('moment');

describe('unit -> service -> time', () => {

  it('Should return the current date in the default format', () => {
    const expectedDate = moment().format('Y-MM-D');

    const actualDate = timeService.date.today.asString();

    expect(actualDate).to.eql(expectedDate);
  });

  it('Should return the current date in the expected format', () => {
    const expectedFormat = 'D/MM/Y';
    const expectedDate = moment().format(expectedFormat);

    const actualDate = timeService.date.today.asString(expectedFormat);

    expect(actualDate).to.eql(expectedDate);
  });

});
