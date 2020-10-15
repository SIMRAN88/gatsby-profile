---
path: "/gzip-in-browser-before-uploading-to-S3"
date: "2020-10-02"
title: "Gzip in browser before uploading to S3"
tags: ['gatsby', 'blog', 'fflate']
description: "Using the fflate library to Gzip in browser before uploading to S3"
---

Hello Everyone! Hope you all are fine and taking care of yourself and your families. It is very important to follow the SMS rule S-Sanitize, M-Masks and S-Social Distance. Wish everyone a healthy life.

So this blog is about the fflate library and how easily it helps to gzip the content from the front end as well as the back end.

Customers want things faster now than ever before in our always connected, always-on world.This is the reason companies such as amazon are introducing drone services for faster deliveries, or same day deliveries.The same goes for digital.  If you offer a product or service, your customers expect to have it, see results quickly at any time they please.

Coming on to online educational applications or blogging platforms where we have to store huge amount of write ups in the server. Here comes the pain of downloading and uploading such huge contents while working. So we need an optimized solution for this problem. 


One solution here is the data compressions which makes the application many times lightweight and optimizes the network calls and minimizes the uploading and downloading content speed.HTTP compression is a capability that can be built into web servers and web clients to improve transfer speed and bandwidth utilization.The most common compression schemes include gzip and Deflate

There are many libraries like pako,tiny-inflate and UZIP.js that hepls in achieving compression and decompression but fflate is multiple times more lightweight. Fflate supports high-speed ZIP compression and decompression for an extra 3 kB. In fact, the compressor, in synchronous mode, compresses both more quickly and with a higher compression ratio than most compression software (even Info-ZIP, a C program), and in asynchronous mode it can utilize multiple cores to achieve over 3x the performance of any other utility.
Fflate is the fastest, smallest, and most versatile pure JavaScript compression and decompression library in existence. Data compressed by fflate can be decompressed by other tools, and vice versa.

# Why [`Fflate`](https://github.com/101arrowz/fflate)?[`Documentaion`](https://github.com/101arrowz/fflate/blob/master/docs/README.md)
Fflate takes the brilliant innovations of UZIP.js and optimizes them while adding direct support for GZIP and Zlib data. And unlike all of the above libraries, it uses ES Modules to allow for partial builds through tree shaking, meaning that it can rival even tiny-inflate in size while maintaining excellent performance. The end result is a library that, in total, weighs 8kB minified for the entire build (3kB for decompression only and 5kB for compression only), is about 15% faster than UZIP.js or up to 60% faster than pako, and achieves the same or better compression ratio than the rest.

It is a library which can be easily used in the frameworks like Node.js , Angular , React and more. Its simple and easy methods make it more easy to use. 

Using strings is easy with `TextEncoder` and `TextDecoder`:
```js
const enc = new TextEncoder(), dec = new TextDecoder();
// Here you can pass your html as a string and process it
const buf = enc.encode('Hello world!');

// The default compression method is gzip
// Increasing mem may increase performance at the cost of memory
// The mem ranges from 0 to 12, where 4 is the default
const compressed = fflate.compressSync(buf, { level: 6, mem: 8 });

// When you need to decompress:
const decompressed = fflate.decompressSync(compressed);
const origText = dec.decode(decompressed);
console.log(origText); // Hello world!
```


There are two different ways compression can be done in HTTP. At a lower level, a Transfer-Encoding header field may indicate the payload of a HTTP message is compressed. At a higher level, a Content-Encoding header field may indicate that a resource being transferred, cached, or otherwise referenced is compressed. Compression using Content-Encoding is more widely supported than Transfer-Encoding, and some browsers do not advertise support for Transfer-Encoding compression to avoid triggering bugs in servers. Read more about http compression here [`Http Compression`](https://en.wikipedia.org/wiki/HTTP_compression)

```js
url: the url to upload your compress data
data: the compressed data
function upload(url, data) {
    return axios({
      method: "put",
      headers: {
        'content-type': 'text/html',
        'content-encoding' : 'gzip'
        },
      url,
      data,
    })      
}
````
For number of words 4302 the content lenght without gzip is 880991 and with gzip is 10557. So you can see 83 time reduction which is awesome.
The request header for example

![](https://res.cloudinary.com/dspfh3nrl/image/upload/v1601884504/md1.png)

This is how the payload looks like after after compressing the html string.

![](https://res.cloudinary.com/dspfh3nrl/image/upload/v1601884504/payload.png)

Follow the documentation of fflate here for better usage and understanding . [`Documentation`](https://github.com/101arrowz/fflate/blob/master/docs/README.md)

At last keeping up at pace is more important in todays world and if the output is taking less time then the customers or users are more impressed and happy to use our application.
A network performing at optimum speed is not only essential for business success, but also digital transformation. Without a fast and agile network, digital transformation efforts would stop entirely causing your business to fall behind.


