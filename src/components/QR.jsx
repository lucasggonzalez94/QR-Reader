import React, { useEffect, useState } from 'react';
import QrReader from 'react-qr-reader';

const QR = (props) => {
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }

    return (
        <>
            <h1>QR Reader</h1>
            <QrReader
                delay={300}
                style={{
                    width: '400px',
                    height: '400px'
                }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
        </>
    );
}
 
export default QR;