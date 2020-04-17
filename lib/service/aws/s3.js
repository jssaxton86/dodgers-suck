const AWS = require('aws-sdk'); 

const s3 = new AWS.S3(); 
const defaultBucket = 'idol-ws';

AWS.config.update({region: 'us-west-2'});

exports.getSong = (song) =>  {
    song = song.toLowerCase();
    const params = { 'Bucket' : defaultBucket, 'Key': 'image-songs/'+song+'.png'}
    return s3.getObject(params).createReadStream();
};

exports.getProfile = (idol) => {
    const params = { 'Bucket' : defaultBucket, 'Key': 'profile-pictures/'+idol.toLowerCase()+'.png'}
    return s3.getObject(params).createReadStream();  
};

exports.getImage =  (image) => {
    const pathBase = "images/";
    const params = { 'Bucket' : defaultBucket, 'Key': pathBase+image.toLowerCase() + ".png"};
    return s3.getObject(params).createReadStream();
};

exports.getSignatureImage = (name) => {
    const params = { 'Bucket' : defaultBucket, 'Key': 'signature/'+name.toLowerCase()+'-signature.png'}
    return s3.getObject(params).createReadStream();
};