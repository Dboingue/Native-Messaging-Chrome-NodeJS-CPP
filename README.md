# Native-Messaging-Chrome-NodeJS-C++
C++ addon through NodeJS communicating with a Chrome Extension via Native Messaging

# Produces system beeps on Windows when a move is made. 

# Native messaging implementation is taken from this repository:
`https://github.com/simov/native-messaging`
# C++ addon implementation is taken from this repository:
`https://github.com/nodejs/node-addon-examples` 

# Usage:

Windows: 

1. Read Chrome documentation on Native Messaging (path to the native app should be added to the registry)
3. Node should be the default program for opening js files.
3. Read information from the mentioned repositories.
4. Compile C++ files (you need Visual Studio, Build tools, Python, C++ module for Visual Studio)
5. If you have all of the above, `npm install` should compile the C++ file. 
