## What is API?
APIs are used to send and receive data between different systems.
The systems might have different languages, but they can communicate with each other using APIs.
API stands for Application Programming Interface.
API is kind of complex and hard to understand due to the nesting, for that we can use JSON formatter, thereby creating tree structure which is easy to understand.

## Earlier in JS xmlHttprequest was used.
fetch is new way, before that we used xmlhttprequest
ajaz programming.

## status of fetch.
value = 0 , status=unsent, client created but open() not called
value = 1, status=opened, open() has been called
value = 2, status= headers_received, send() has been called, and headers and status are available 
value = 3, status=loading, downloading the response
value = 4, status=done, the operation is complete