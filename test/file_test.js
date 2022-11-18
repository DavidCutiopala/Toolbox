let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../index.js');
let expect = require("chai").expect;
let file = require("../controllers/file");

chai.should();

chai.use(chaiHttp);

describe('FILES API  CSV', () => {


  describe("GET /api/routes/files", () => {
    it("It should GET all the  files", (done) => {
      chai.request(server)
        .get("/api/routes/files")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eq(5);
          done();
        });
    });

    it("It should NOT GET all the files  'only files==null pass this test '", (done) => {
      chai.request(server)
        .get("/api/routes/file")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });

  });


  describe("GET /api/routes/file/:name", () => {
    it("It should GET file by name", (done) => {
      chai.request(server)
        .get("/api/routes/file/" + "test6.csv")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });


});


