import {
  Component
} from 'angular2/core';

@Component({
  selector: 'bug',
  templateUrl: 'bug/templates/bug.html',
  styleUrls: ['bug/styles/bug.css']
})
export class BugCmp {
  name: string = 'a123';
}
