import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    public auth = 'auth';
    public account = 'account';
    public isShow1 = 'true';
    public isShow2 = 'true';
    }

//     ngOnInit() {
//         this.nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
//         this.nameControl.valueChanges.subscribe((value) => console.log(value));
//         this.nameControl.statusChanges.subscribe((status) => console.log(status));
//     }
// }
