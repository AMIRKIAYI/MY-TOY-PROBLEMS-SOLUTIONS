# Net Salary Calculator

This is a simple JavaScript program that calculates an individual's net salary based on inputs for basic salary and benefits. The program computes the gross salary, deducts PAYE tax, NHIF contributions, and NSSF contributions to arrive at the net salary.

## How It Works

The program takes two inputs:
- `basicSalary`: The basic salary of the individual.
- `benefits`: Any additional benefits the individual receives.

Using these inputs, the program calculates the following:
- `grossSalary`: The sum of the basic salary and benefits.
- `payee`: PAYE (Pay As You Earn) tax, calculated as 30% of the gross salary.
- `nhif`: NHIF (National Hospital Insurance Fund) contribution, calculated as 2.5% of the gross salary.
- `nssf`: NSSF (National Social Security Fund) contribution, calculated as 6% of the gross salary.
- `netSalary`: The gross salary minus the PAYE, NHIF, and NSSF deductions.

## Code

```javascript
const basicSalary = 30000;
const benefits = 5000;
const result = calculateNetSalary(basicSalary, benefits);

function calculateNetSalary(basicSalary, benefits) {
    // Define rates
    const PAYE_RATE = 0.3;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate deductions
    const payee = grossSalary * PAYE_RATE;
    const nhif = grossSalary * NHIF_RATE;
    const nssf = grossSalary * NSSF_RATE;
  
    // Calculate net salary
    const netSalary = grossSalary - (payee + nhif + nssf);
    
    return {
      grossSalary,
      payee,
      nhif,
      nssf,
      netSalary
    };
}

// Example usage:

console.log(`Gross Salary: ${result.grossSalary}`);
console.log(`PAYE (Tax): ${result.payee}`);
console.log(`NHIF Deduction: ${result.nhif}`);
console.log(`NSSF Deduction: ${result.nssf}`);
console.log(`Net Salary: ${result.netSalary}`);
