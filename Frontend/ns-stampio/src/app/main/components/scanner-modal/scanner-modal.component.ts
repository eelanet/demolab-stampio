import { Component } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { StampService } from '~/app/shared/services/stamp.service';

@Component({
  selector: 'ns-scanner-modal',
  templateUrl: './scanner-modal.component.html',
  styleUrls: ['./scanner-modal.component.css'],
  moduleId: module.id,
})
export class ScannerModalComponent {
  barcodescanner: any;

  constructor(private params: ModalDialogParams, private stampService: StampService) {
    this.barcodescanner = new BarcodeScanner();
  }

  ngOnInit() {
    this.openNotification();
  }
  close() {
    this.params.closeCallback();
  }

  openNotification() {
    console.log("Scanner opened");
    this.close();

    this.barcodescanner.scan({
      formats: "QR_CODE",
      beepOnScan: false,             // Play or Suppress beep on scan (default true)
      closeCallback: () => {
        console.log("Scanner closed");
      }, // invoked when the scanner was closed (success or abort)
    }).then((result) => {
      // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided

      console.log('Scanner Modal end');
      this.stampService.addStampQr(result.text);

    }, (errorMessage) => {
      console.log("No scan. " + errorMessage);
    }
    );
  }
}