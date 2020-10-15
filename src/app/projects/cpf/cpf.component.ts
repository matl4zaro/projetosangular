import { Component } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})

export class CpfComponent {
  public cpfList: String[] = [];
  public cpfGerado: string = '';
  public mascara: boolean = true;
  // public iniciaZero: number = 0; // 1 for: whatever ... 0 for: start with zero ... -1 for: do not start with zero

  geraCpf() : string {
    let gerado = this.cpfGerado = String(Math.floor(Math.random()*999999999));
    while (gerado.length < 9) {
      gerado = String(Math.floor(Math.random()*10)) + gerado;
    }
    return gerado;
  }

  verificadorValidoCpf(cpf : string) : string {
    let dig10 = 0;
    let dig11 = 0;
    console.log(cpf);

    for(let i = 1; i <= 9; i++) {
        dig10 += Number(cpf[i-1]) * (11 - i);
        dig11 += Number(cpf[i-1]) * (12 - i);
      };
    dig10 = (dig10 * 10) % 11;
    
    dig11 += Number(dig10) * 2;
    dig11 = (dig11 * 10) % 11;

    
    return ((dig10 == 10 || dig11 == 10) ? '0' : (String(dig10) + String(dig11)));
}

  aplicaCpf() {
    let part1 = this.geraCpf();
    console.log(part1);
    let part2 = this.verificadorValidoCpf(part1);
    if ( part2 == '0' ) {
      this.aplicaCpf();
    } else {
      let comMascara = true;
    

      comMascara ? this.cpfList.push(this.maskCpf(part1.concat(part2))) : this.cpfList.push(part1.concat(part2));
    }
  }

  maskCpf(cpfUnmasked : string) : string {
    let masked = '';
    masked = cpfUnmasked[0]+cpfUnmasked[1]+cpfUnmasked[2]+'.'+cpfUnmasked[3]+cpfUnmasked[4]+cpfUnmasked[5]+'.'+cpfUnmasked[6]+cpfUnmasked[7]+cpfUnmasked[8]+'-'+cpfUnmasked[9]+cpfUnmasked[10];

    return masked;
  }

  copyClipboard() : void {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    e.clipboardData.setData('text/plain', String(document.activeElement.textContent));
    e.preventDefault();
    document.removeEventListener('copy', null);
  });
  document.execCommand('copy');
  alert('CPF copiado: ' + document.activeElement.textContent);
}
}
