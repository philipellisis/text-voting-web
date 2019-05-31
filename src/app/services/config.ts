import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Configuration {
    public serverGet = 'api/results/';
    public serverPost = 'api/setup/'
    public authToken = 'Basic {token}'
}