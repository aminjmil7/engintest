import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EngineService {
  constructor(private httpClient: HttpClient) {}

  start() {
    return this.httpClient.post(
      'https://warp-regulator-bd7q33crqa-lz.a.run.app/api/start',
      { name: 'Juhan Juurikas', email: 'juhan@example.com' },
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          ' Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"
        },
      }
    );
  }

  status(code: string) {
    return this.httpClient.get(
      `https://warp-regulator-bd7q33crqa-lz.a.run.app/api/status?authorizationCode=${code}`
    );
  }

  adjustMatter(code: string, value: number) {
    return this.httpClient.post(
      'https://warp-regulator-bd7q33crqa-lz.a.run.app/api/adjust/matter',
      {
        authorizationCode: code,
        value: value,
      }
    );
  }

  adjustAntimatter(code: string, value: number) {
    return this.httpClient.post(
      'https://warp-regulator-bd7q33crqa-lz.a.run.app/api/adjust/antimatter',
      {
        authorizationCode: code,
        value: value,
      }
    );
  }
}
