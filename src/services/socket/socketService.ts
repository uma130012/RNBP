import {io} from 'socket.io-client';

/*
The approach is to create a wrapper function from which we will return our class, and in the closure of this function we will create our instance field.
we put an instance in the function closure. Then, in the class constructor, we check if we have an instance of the class and, if not, we assign a value to the instance and return it.
Also you can notice the wrapper function is created and immediately called, thus we have created a closure inaccessible from the outside, and the class can easily read and redefine values from the closure.
As a bonus of that approach is that you can add any variable or logic to the closure, resulting you get real private methods, which you won't be able to access from the instance.
*/

/*REFERENCE-:- https://dev.to/sakhnyuk/how-to-implement-singleton-in-javascript-18o */

const SocketManager = (() => {
  let instance: any = null;

  return class SocketManager {
    private socket = io();

    constructor() {
      if (instance === null) {
        instance = this;
      }
    }

    /*-:- Here initialing the socket -:-*/
    private init(token: string, url: string) {
      this.socket = io(url, {
        reconnection: true,
        transports: ['websocket'],
        auth: {Authorization: 'Bearer ' + token},
      });

      this.socket.on('connect', () => {
        console.log('✅Socket Connected✅');
      });

      this.socket.on('disconnect', reason => {
        console.log('📵Socket Disconnect📵');

        /*-:- the disconnection was initiated by the server, you need to reconnect manually -:-*/
        if (reason === 'io server disconnect') {
          this.socket.connect();
        }
        /*-:- else the socket will automatically try to reconnect -:-*/
      });

      this.socket.on('connect_error', () => {
        console.log('❌Socket Connection Error❌');
        setTimeout(() => {
          this.socket.connect();
        }, 1000);
      });
    }

    /**
    Connect Socket Method, Call it where you want to connect socket with auth token 
     @param {string} token - token is required
  */
    public connectSocket(token: string, url: string) {
      this.init(token, url);
    }

    /*-:- Disconnect Socket Method, Call it whenever you want to disconnect the socket -:-*/
    public disconnectSocket() {
      this.socket.disconnect();
    }
    /*-:- Check the socket is connected or not -:-*/
    public get isSocketConnected() {
      return this.socket.connected;
    }
  };
})();

export const SocketManagerInstance = new SocketManager();
