import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor() {}

  async generateQRCode(data: string): Promise<string> {
    try {
      return await QRCode.toDataURL(data);
    } catch (err) {
      console.error('Error generando el código QR:', err);
      throw err;
    }
  }
}
