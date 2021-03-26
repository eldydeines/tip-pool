describe('checks out the calculations for helpers', function () {

    it('should check tipPercent', function () {
        expect(calculateTipPercent(100, 15)).toEqual(15);
    });

});