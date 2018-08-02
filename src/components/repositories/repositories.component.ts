import { Repository } from './../../models/repository.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: 'repositories.component.html'
})
export class RepositoriesComponent {

  @Input() repository: Repository;

}
