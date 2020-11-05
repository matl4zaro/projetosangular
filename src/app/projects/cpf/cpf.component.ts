import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})

export class CpfComponent implements OnInit {
  public cpfList: String[] = [];
  public cpfGerado: string = '';
  public mascara: boolean = true;
  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    
    let arr:string[] = [
      ...cpfUnmasked.slice(0,3),
      '.',
      ...cpfUnmasked.slice(3,6),
      '.',
      ...cpfUnmasked.slice(6,9),
      '-',
      ...cpfUnmasked.slice(9,11)
    ]
    
    return arr.join('');
    
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
