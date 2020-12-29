import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';

@Component({
    selector: 'authors',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ul>    
    `
})

export class AuthorsComponent {
    title = "Authors";
    authors;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }
}