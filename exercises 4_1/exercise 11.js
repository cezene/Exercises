/* A person who works with a formal contract in Brazil has the INSS and the IT(Income Tax) deducted from his gross salary. 
Make a program that, given a gross salary, calculates the net to be received.
The notation for a salary of R $ 1500.10, for example, should be 1500.10. For tax ranges, use the following references:
INSS
Gross salary up to R $ 1,556.94: 8% rate
Gross salary from R $ 1,556.95 to R $ 2,594.92: 9% rate
Gross salary from R $ 2,594.93 to R $ 5,189.82: 11% rate
Gross salary above R $ 5,189.82: maximum rate of R $ 570.88
IR
Up to R $ 1,903.98: exempt from income tax
From R $ 1,903.99 to 2,826.65: rate of 7.5% and installment of R $ 142.80 to be deducted from tax
From R $ 2,826.66 to R $ 3,751.05: 15% rate and installment of R $ 354.80 to be deducted from tax
From R $ 3,751.06 to R $ 4,664.68: rate of 22.5% and installment of R $ 636.13 to be deducted from tax
Above R $ 4,664.68: rate of 27.5% and installment of R $ 869.36 to be deducted from tax. */
function salaryCalculator(){
    let salary = 300000;
    let INSS = 1;
    let baseSalary = 2;
    let IR = 3;
    let installment = 4;
    if(salary <= 155694) {
        INSS = salary * 0.08;
    }

    if(salary >=  155695 && salary <= 259492) {
        INSS = salary * 0.09;
    }

    if(salary >=  259493 && salary <=  518982) {
         INSS = salary * 0.11;
        let baseSalary = salary - INSS;
    }

    if (salary > 518982) {
        INSS = 57088;
    }
     baseSalary = salary - INSS;

    if (baseSalary <= 190398) {
         IR = 0;
    }
    if (baseSalary >= 190399 && baseSalary < 282665) {
        IR = baseSalary * 0.075;
        installment = IR - 14280;        
    }
    if (baseSalary >= 282666 && baseSalary <  375105) {
        let IR = baseSalary * 0.15;
        let installment = 35480 - IR;
    } 
    if (baseSalary >= 375106 && baseSalary <  466468) {
        let IR = baseSalary * 0.225;
        let installment = 63613 - IR;
    } 
    if (baseSalary > 466468) {
        let IR = baseSalary * 0.275;
        let installment = 86936  - IR;
    } 
    let realSalary = baseSalary - installment
    return realSalary;
}
console.log(salaryCalculator())