import { Profile } from './../../models/profile.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent {

  @Input() profile: Profile;

}
