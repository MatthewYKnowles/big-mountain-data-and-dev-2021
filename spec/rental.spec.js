describe('Rental', () => {
    let stuff;
    
    beforeEach(function () {
        stuff = new Rental();
    });
    
    it('should return the proper result', () => {
        const properResult =
            'Rental Record for martin\n' +
            '\tRan\t5\n' +
            '\tTrois Couleurs: Bleu\t2\n' +
            'Amount owed is 7\n' +
            'You earned 2 frequent renter points\n';

        const customer = {
            name: 'martin',
            rentals: [{movieID: 'F001', days: 3}, {movieID: 'F002', days: 2}]
        };

        const actualResult = stuff.statement(customer);
        expect(actualResult).toEqual(properResult);
    });
    it('should return the proper result', () => {
        const properResult =
            'Rental Record for martin\n' +
            '\tCars 2\t6\n' +
            '\tCars 2\t1.5\n' +
            '\tCars 2\t1.5\n' +
            'Amount owed is 9\n' +
            'You earned 3 frequent renter points\n';

        const customer = {
            name: 'martin',
            rentals: [{movieID: 'F003', days: 5}, {movieID: 'F003', days: 2}, {movieID: 'F003', days: 3}]
        };

        const actualResult = stuff.statement(customer);
        expect(actualResult).toEqual(properResult);
    });

    it('should return the proper result', () => {
        const properResult =
            'Rental Record for martin\n' +
            '\tAvengers\t15\n' +
            '\tAvengers\t3\n' +
            'Amount owed is 18\n' +
            'You earned 3 frequent renter points\n';

        const customer = {
            name: 'martin',
            rentals: [{movieID: 'F004', days: 5}, {movieID: 'F004', days: 1}]
        };

        const actualResult = stuff.statement(customer);
        expect(actualResult).toEqual(properResult);
    });
    it('should return the proper result', () => {
        const properResult =
            'Rental Record for martin\n' +
            '\tAvengers\t9\n' +
            'Amount owed is 9\n' +
            'You earned 2 frequent renter points\n';

        const customer = {
            name: 'martin',
            rentals: [{movieID: 'F004', days: 3}]
        };

        const actualResult = stuff.statement(customer);
        expect(actualResult).toEqual(properResult);
    });
    it('should return the proper result', () => {
        const properResult =
            'Rental Record for martin\n' +
            '\tAvengers\t6\n' +
            'Amount owed is 6\n' +
            'You earned 1 frequent renter points\n';

        const customer = {
            name: 'martin',
            rentals: [{movieID: 'F004', days: 2}]
        };

        const actualResult = stuff.statement(customer);
        expect(actualResult).toEqual(properResult);
    });
});
