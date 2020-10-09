import { Component } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
})

export class CpfComponent {

  public cpfList: String[] = [];
  public cpfGerado: String = 'oi';

  geraCpf() : String {
    this.cpfGerado = '10';
    return 'oi';
  }

  aplicaCpf() {

    this.cpfList.push(this.geraCpf());
  }

}
