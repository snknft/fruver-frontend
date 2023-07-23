import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { SessionService } from 'src/app/shared/service/session.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  login = '';
  user: User = new User('', '', '');

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute, private sessionService: SessionService) { 
  }

  ngOnInit(): void {
    this.login = this.route.snapshot.params['login'];
  }  

  toManagement(){
    this.router.navigate(['/']);
  }

  userSave() {
    console.log(this.user);

    if (this.login) {
      this.service.findUser(this.user.tipo, this.user.cedula).subscribe(
        data =>{
          this.sessionService.login(data);
          this.toManagement();
      });
    }
    else{
      this.service.createUser(this.user).subscribe(
        data =>{
          this.toManagement();
      });
    }
  }

}
