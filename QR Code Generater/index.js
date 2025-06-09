import {createWriteStream, appendFile, writeFile} from 'fs';
import inquirer from 'inquirer';
import {image} from 'qr-image' ;

inquirer.prompt([{name: "url",message : "Enter the website URL: "}])
    .then(answers => {
        // console.log("Generating QR code for:", answers.url);
        // const qr = require('qr-image');
        // const qr_svg = image(answers.url, {type: 'svg'})
        const qr_svg = image(answers.url)
        qr_svg.pipe(createWriteStream('qr.png'));
        appendFile('qr.txt', `\n${answers.url}`, (err) => {
            if (err) throw err;
            console.log('QR code generated and saved as qr.png');
            console.log('URL saved to qr.txt');
        });
    });