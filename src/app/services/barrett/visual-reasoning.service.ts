import { Injectable } from '@angular/core';
import { ConstantsService } from "../../config/constants-service";
import { VisualReasoning } from "../../entities/barrett/visual-reasoning.model";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VisualReasoningService {

  // https://api.psychology.ml/barrett/1000000001/visual-reasoning
  private resourceUrl = ConstantsService.API_URL + "/barrett/:id/visual-reasoning";

  constructor(private http: HttpClient) {
  }

  getUrl(id: string): string {
    return this.resourceUrl.replace(":id", id);
  }

  getByTestId(testId: string): Observable<HttpResponse<VisualReasoning>> {
    const url = this.getUrl(testId);
    return this.http.get<VisualReasoning>(url, {observe: 'response'});
  }

  createByTestId(testId: string): Observable<HttpResponse<VisualReasoning>> {
    const url = this.getUrl(testId);
    return this.http.post<VisualReasoning>(url, {},{observe: 'response'});
  }
}
