const path = require('path');
const supertest = require('supertest');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const td = require('testdouble');
const tdChai = require('testdouble-chai');
const proxyquire = require('proxyquire');

chai.use(sinonChai);
chai.use(tdChai(td));

global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = sinon;
global.path = path;
global.resolve = path.resolve;
global.chai = chai;
global.supertest = supertest;
global.td = td;
global.proxyquire = proxyquire;
global.load = (file, stubs) => proxyquire(path.resolve(`app/${file}`), stubs);
