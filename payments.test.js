describe('Should add new payment info', function () {

    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 15
    });

    it('should add a new payment to allPayments', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(15);
    });

    it('should check for defined', function () {
        expect(createCurPayment).toBeDefined()
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
    });

});