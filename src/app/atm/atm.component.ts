import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 


@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  atmcash: FormGroup
  totaltwok: any
  sums1: any = 0;
  sums2: any = 0;
  sums3: any = 0;
  sums4: any = 0;

  constructor(private fb: FormBuilder,   ) {
    this.atmcash = this.fb.group({
      twok: ['0', Validators.required],
      fivek: ['0', Validators.required],
      twook: ['0', Validators.required],
      hundredk: ['0', Validators.required],
      twothoundandnotes: [''],
      fivehundrednotes: [''],
      twohundred: [''],
      hundrednotes: [],
      withmoney: ['']
    });
  }

  ngOnInit() {
  }

  Withdraw() {
    console.log(this.atmcash);



    switch (JSON.parse(this.atmcash.value.withmoney)) {
      case 2000:
        this.totaldatas -= JSON.parse(this.atmcash.value.withmoney);
        this.sums1--
        this.atmcash.controls['twothoundandnotes'].setValue(this.sums1)
 


        break;
      case 500:
        this.totaldatas -= JSON.parse(this.atmcash.value.withmoney);
        this.sums2--
        this.atmcash.controls['twothoundandnotes'].setValue(this.sums2)
        break;
      case 200:
        this.totaldatas -= JSON.parse(this.atmcash.value.withmoney);
        this.sums3--
        this.atmcash.controls['twothoundandnotes'].setValue(this.sums3)

        break;
      case 100:
        this.totaldatas -= JSON.parse(this.atmcash.value.withmoney);
        this.sums4--
        this.atmcash.controls['twothoundandnotes'].setValue(this.sums4)


        break;

      default:
        alert('please only enter 2000, 500, 200, 100')
        break;
    }


  }
  totaldatas: any = 0
  Deposit(a: any, b: any, c: any, d: any) {
    console.log("abcd", a, b, c, d);
    console.log("deposit money");
    // this. totaltwok = this.atmcash.value.twok * 2000
    // let totalfivek = this.atmcash.value.fivek * 500
    // let totaltwook = this.atmcash.value.twook * 200
    // let totalhundred = this.atmcash.value.hundredk * 100
    this.sums1 += JSON.parse(this.atmcash.value.twok)
    this.sums2 += JSON.parse(this.atmcash.value.fivek)
    this.sums3 += JSON.parse(this.atmcash.value.twook)
    this.sums4 += JSON.parse(this.atmcash.value.hundredk)
    this.atmcash.reset()
    this.atmcash.controls['twothoundandnotes'].setValue(this.sums1)  //2000
    this.atmcash.controls['fivehundrednotes'].setValue(this.sums2)  //500
    this.atmcash.controls['twohundred'].setValue(this.sums3)    //200
    this.atmcash.controls['hundrednotes'].setValue(this.sums4)   //100
    this.totaldatas = this.sums1 * 2000 + this.sums2 * 500 + this.sums3 * 200 + this.sums4 * 100
    console.log("total data", this.totaldatas);
    // console.log("2000", this.totaltwok);
    // console.log("500", totalfivek);
    // console.log("200", totaltwook);
    // console.log("100", totalhundred); 
  }
}
