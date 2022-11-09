import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public static readonly API_URL = "https://api.psychology.ml";

  constructor() { }
}
