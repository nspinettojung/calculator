import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculator';

  calValue: number = 0;
  funcT: any = 'No Function';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(value: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(value);
    } else if (type === 'function') {
      this.onFunctionClick(value);
    }
  }

  onNumberClick(value: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + value;
    } else {
      this.calNumber = value;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(value: string) {
    if (value == 'C') {
      this.clearAll();
    } else if (this.funcT == 'No Function') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = value;
    } else if (this.funcT != 'No Function') {
      this.secondNumber = this.calValue;

      this.valueCalculate(value);
    }
  }

  valueCalculate(value: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, value);
    }
    if (this.funcT == '%') {
      const Total = (this.firstNumber * this.secondNumber) / 100;
      this.totalAssignValues(Total, value);
    }
  }

  totalAssignValues(Total: number, value: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = value;
    if (value == '=') {
      this.onEqualPress();
    }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = 'No Function';
    this.calValue = 0;
  }
}
