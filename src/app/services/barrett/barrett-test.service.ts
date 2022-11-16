import { Injectable } from '@angular/core';
import { ConstantsService } from "../../config/constants-service";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BarrettTest } from "../../entities/barrett/barrett-test.model";

@Injectable({
  providedIn: 'root'
})
export class BarrettTestService {

  private resourceUrl = ConstantsService.API_URL + "/barrett";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResponse<BarrettTest[]>> {
    return this.http.get<BarrettTest[]>(this.resourceUrl, {observe: 'response'});
  }

  deleteById(id: Number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  create(): Observable<HttpResponse<BarrettTest>> {
    return this.http.post<BarrettTest>(this.resourceUrl, {}, {observe: 'response'});
  }
}
