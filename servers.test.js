describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server to the Server Table', function () {
    submitServerInfo();
    expect(serverTbody.innerHTML.value).toBeUndefined();
  });

  //removes Alice Element Tr from HTML ServerTable
  //removes Alice Server Object and Id
  //updates server count for ID
  //updates the Server Table with new entries
  afterEach(function () {

    delete allServers['server' + serverId];
    serverId--;
    serverTbody.firstElementChild.remove();
    updateServerTable();


  });
});


