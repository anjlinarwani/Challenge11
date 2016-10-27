'use strict';

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(ListCtrl.items.length).toBe(3);
  });
});
