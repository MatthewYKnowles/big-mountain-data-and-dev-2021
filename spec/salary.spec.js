describe("Salary Tests", ()=> {
  it("should verify employee's salary was increased", ()=> {
    let employee = {
        salary : 50000,
        taxWithheld: 10000
    };

    giveRaise(employee, 2000);

    expect(employee.salary).toEqual(52000)
    expect(employee.taxWithheld).toEqual(10400)
  })
});
