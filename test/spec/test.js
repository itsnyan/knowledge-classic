describe("unit tests", function () {
  // beforeEach(function () {
  //   player = new Player();
  //   song = new Song();
  // });

  it("should return route ID", function () {
    let test = "www.testurl.com/students/123456/";
    expect(getKnowledgeId(test)).toEqual("123456");
  });

  it("should replace link to Salesforce Classic Link", function () {
    let test = "123456";
    expect(replaceUrl(test)).toEqual(
      "https://supportforce.my.salesforce.com/123456?srPos=0&srKp=kaB&lang=en_US"
    );
  });
});
