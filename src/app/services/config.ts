import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Configuration {
    public serverWithApiUrl = 'api/results/';
    public authToken = 'Basic {base 64 token}'
}