import { Component } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
})

export class CpfComponent {

  public cpfList: String[] = [];
  public cpfGerado: string = '';

  geraCpf() : string {
    return this.cpfGerado = String(Math.floor(Math.random()*999999999));
  }

  verificadorValidoCpf(cpf : string) : string {
    while (cpf.length < 9) {
      cpf += '0' + cpf;
    }
    let dig10 = 0;
    let dig11 = 0;
    console.log(cpf);

    for(let i = 1; i <= 9; i++) {
        dig10 += Number(cpf[i-1])*(11-i);
        dig11 += Number(cpf[i-1])*(12-i);
    };
    dig11 += Number(cpf[9]) * 2;
    dig10 = dig10 * 10 % 11;
    dig11 = dig11 * 10 % 11;
    
    return (String(dig10) + String(dig11));
}

  aplicaCpf() {
    let part1 = this.geraCpf();
    let part2 = this.verificadorValidoCpf(part1);
    if (isNaN(Number(part2))){
      // this.cpfList.push('erro');  
      this.aplicaCpf();
    } else {
      console.log(part1);
      console.log(part1.length);
      console.log(part2);
      console.log(part2.length);
      this.cpfList.push(this.maskCpf(part1.concat(part2)));
    }
  }

  maskCpf(cpfUnmasked : string) : string {
    let masked = '';
    let zeros = '';
    for (let i = 0; i < (11 - cpfUnmasked.length); i++){
      zeros += '0'+zeros;
    }
    masked = zeros.concat(cpfUnmasked);
    masked = masked[0]+masked[1]+masked[2]+'.'+masked[3]+masked[4]+masked[5]+'.'+masked[6]+masked[7]+masked[8]+'-'+masked[9]+masked[10];
    return masked;
  }

}
