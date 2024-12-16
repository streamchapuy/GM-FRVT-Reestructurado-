import { Component, OnInit } from '@angular/core';
import { QrService } from '../../../../services/qr.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QRComponent implements OnInit {
  qrCodeImage: string = '';

  constructor(private qrService: QrService) {}

  ngOnInit() {
    this.generateQRCode('http://localhost:4200/ordenTrabajo');
    this.generateQRCode('http://192.168.0.106:4200/ordenTrabajo');
  }

  async generateQRCode(data: string) {
    try {
      this.qrCodeImage = await this.qrService.generateQRCode(data);
    } catch (err) {
      console.error('Error al generar QR:', err);
    }
  }
}
