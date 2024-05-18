
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