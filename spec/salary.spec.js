describe("Salary Tests", ()=> {
  xit("should verify employee's salary was increased", ()=> {
    let employee = {
        salary : 50000,
        taxWithheld: 10000
    };

    giveRaise(employee, 2000);

    expect(employee.salary).toEqual(52000)
  })
});
