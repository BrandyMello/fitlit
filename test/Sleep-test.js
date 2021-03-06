const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/practice-sleep');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {

  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
    
  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return a list of current user sleep data', function() {
    expect(sleep.consumerInfo(3)).to.eql([sleepData[0], sleepData[1],sleepData[2],sleepData[3],sleepData[4],sleepData[5],sleepData[6],sleepData[7],sleepData[8]]); 
  });

  it('should return the average hours slept per day per user', function() {
    expect(sleep.averageHoursSlept(3)).to.equal(9)
  });

  it('should return the average sleep quality', function() {
    expect(sleep.averageQualitySleep(3)).to.equal(3)
  });

  it('should return total hours slept for user for specific date', function() {
    expect(sleep.hoursSleptByDate('2019/06/15', 3)).to.eql(10.8);
  });

  it('should return total sleep quality for user for specific date', function() {
    expect(sleep.sleepQualityByDate('2019/06/15', 3)).to.eql(4.7);
  });

  it('should return the index of the date', function() {
    expect(sleep.startDayIndx(3, "2019/06/16")).to.eql(1);
  });

  it('should return a list of hours slept over a week for user', function() {
    expect(sleep.dailyHoursSleptPerWeek(3, '2019/06/15')).to.eql([10.8, 10.7, 5.3, 9.8, 7.2, 9.4, 8.9]);
  });

  it('should return a list of quality sleep over a week for user', function() {
    expect(sleep.dailySleepQualityPerWk(3, '2019/06/15')).to.eql([4.7, 3.4, 4.9, 2.6, 3.4, 1.2, 3.7]);
  });

  it('should return the average sleep quality for all users', function() {
    expect(sleep.averageSleepQualForAll()).to.eql(3);
  });

  it('should return users whose average quality is above 3', function() {
    expect(sleep.userSleepQualityAboveThree("2019/06/15")).to.eql([{"id": 3, "slpQual": 3}, {"id": 11, "slpQual": 4}, {"id": 33, "slpQual": 4}, {"id": 42, "slpQual": 3}, {"id": 44, "slpQual": 4}]);
  });

  it('should return user or users who slept the most number of hours given a date', function() {
    expect(sleep.bestSleeper("2019/06/15")).to.eql([sleepData[0]]);
  });

  it('should return true if a users total hours slept and sleep quality meets or exceeds their averages or false otherwise', function() {
    expect(sleep.sleepComp('2019/06/15', 3)).to.equal(true);
    expect(sleep.sleepComp('2019/06/17', 3)).to.equal(false);
  });
});