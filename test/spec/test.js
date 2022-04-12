describe("unit tests", function () {
  it("should return route ID from last-two forward-slashes", function () {
    let testUrl = "www.testurl.com/students/123456/";
    expect(getKnowledgeId(testUrl)).toEqual("123456");
  });

  it("should replace link to Salesforce Classic Link", function () {
    let testId = "123456";
    expect(replaceUrl(test)).toEqual(
      `https://supportforce.my.salesforce.com/${testId}?srPos=0&srKp=kaB&lang=en_US`
    );
  });
});
