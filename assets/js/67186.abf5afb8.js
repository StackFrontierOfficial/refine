"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67186],{67186:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/devtools-server/src/reload-on-change.ts","description":"","displayName":"reloadOnChange","props":{"options":{"defaultValue":null,"description":"","name":"options","required":true,"type":{"name":"ServerOptions<typeof WebSocket, typeof IncomingMessage>"},"tags":{}},"path":{"defaultValue":null,"description":"","name":"path","required":true,"type":{"name":"string"},"tags":{}},"clients":{"defaultValue":null,"description":"","name":"clients","required":true,"type":{"name":"Set<WebSocket>"},"tags":{}},"address":{"defaultValue":null,"description":"","name":"address","required":true,"type":{"name":"() => string | AddressInfo"},"tags":{}},"close":{"defaultValue":null,"description":"","name":"close","required":true,"type":{"name":"(cb?: ((err?: Error | undefined) => void) | undefined) => void"},"tags":{}},"handleUpgrade":{"defaultValue":null,"description":"","name":"handleUpgrade","required":true,"type":{"name":"(request: IncomingMessage, socket: Duplex, upgradeHead: Buffer, callback: (client: WebSocket, request: IncomingMessage) => void) => void"},"tags":{}},"shouldHandle":{"defaultValue":null,"description":"","name":"shouldHandle","required":true,"type":{"name":"(request: IncomingMessage) => boolean | Promise<boolean>"},"tags":{}},"on":{"defaultValue":null,"description":"Adds the `listener` function to the end of the listeners array for the\\nevent named `eventName`. No checks are made to see if the `listener` has\\nalready been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple\\ntimes.\\n\\n```js\\nserver.on(\'connection\', (stream) => {\\n  console.log(\'someone connected!\');\\n});\\n```\\n\\nReturns a reference to the `EventEmitter`, so that calls can be chained.\\n\\nBy default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the\\nevent listener to the beginning of the listeners array.\\n\\n```js\\nconst myEE = new EventEmitter();\\nmyEE.on(\'foo\', () => console.log(\'a\'));\\nmyEE.prependListener(\'foo\', () => console.log(\'b\'));\\nmyEE.emit(\'foo\');\\n// Prints:\\n//   b\\n//   a\\n```","name":"on","required":true,"type":{"name":"{ (event: \\"connection\\", cb: (this: Server<typeof WebSocket, typeof IncomingMessage>, socket: WebSocket, request: IncomingMessage) => void): Server<...>; (event: \\"error\\", cb: (this: Server<...>, error: Error) => void): Server<...>; (event: \\"headers\\", cb: (this: Server<...>, headers: string[], request: IncomingMessage..."},"tags":{}},"once":{"defaultValue":null,"description":"Adds a **one-time**`listener` function for the event named `eventName`. The\\nnext time `eventName` is triggered, this listener is removed and then invoked.\\n\\n```js\\nserver.once(\'connection\', (stream) => {\\n  console.log(\'Ah, we have our first user!\');\\n});\\n```\\n\\nReturns a reference to the `EventEmitter`, so that calls can be chained.\\n\\nBy default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the\\nevent listener to the beginning of the listeners array.\\n\\n```js\\nconst myEE = new EventEmitter();\\nmyEE.once(\'foo\', () => console.log(\'a\'));\\nmyEE.prependOnceListener(\'foo\', () => console.log(\'b\'));\\nmyEE.emit(\'foo\');\\n// Prints:\\n//   b\\n//   a\\n```","name":"once","required":true,"type":{"name":"{ (event: \\"connection\\", cb: (this: Server<typeof WebSocket, typeof IncomingMessage>, socket: WebSocket, request: IncomingMessage) => void): Server<...>; (event: \\"error\\", cb: (this: Server<...>, error: Error) => void): Server<...>; (event: \\"headers\\", cb: (this: Server<...>, headers: string[], request: IncomingMessage..."},"tags":{}},"off":{"defaultValue":null,"description":"Alias for `emitter.removeListener()`.","name":"off","required":true,"type":{"name":"{ (event: \\"connection\\", cb: (this: Server<typeof WebSocket, typeof IncomingMessage>, socket: WebSocket, request: IncomingMessage) => void): Server<...>; (event: \\"error\\", cb: (this: Server<...>, error: Error) => void): Server<...>; (event: \\"headers\\", cb: (this: Server<...>, headers: string[], request: IncomingMessage..."},"tags":{}},"addListener":{"defaultValue":null,"description":"Alias for `emitter.on(eventName, listener)`.","name":"addListener","required":true,"type":{"name":"{ (event: \\"connection\\", cb: (client: WebSocket, request: IncomingMessage) => void): Server<typeof WebSocket, typeof IncomingMessage>; (event: \\"error\\", cb: (err: Error) => void): Server<...>; (event: \\"headers\\", cb: (headers: string[], request: IncomingMessage) => void): Server<...>; (event: \\"close\\" | \\"listening\\", cb:..."},"tags":{}},"removeListener":{"defaultValue":null,"description":"Removes the specified `listener` from the listener array for the event named`eventName`.\\n\\n```js\\nconst callback = (stream) => {\\n  console.log(\'someone connected!\');\\n};\\nserver.on(\'connection\', callback);\\n// ...\\nserver.removeListener(\'connection\', callback);\\n```\\n\\n`removeListener()` will remove, at most, one instance of a listener from the\\nlistener array. If any single listener has been added multiple times to the\\nlistener array for the specified `eventName`, then `removeListener()` must be\\ncalled multiple times to remove each instance.\\n\\nOnce an event is emitted, all listeners attached to it at the\\ntime of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution\\nwill not remove them from`emit()` in progress. Subsequent events behave as expected.\\n\\n```js\\nconst myEmitter = new MyEmitter();\\n\\nconst callbackA = () => {\\n  console.log(\'A\');\\n  myEmitter.removeListener(\'event\', callbackB);\\n};\\n\\nconst callbackB = () => {\\n  console.log(\'B\');\\n};\\n\\nmyEmitter.on(\'event\', callbackA);\\n\\nmyEmitter.on(\'event\', callbackB);\\n\\n// callbackA removes listener callbackB but it will still be called.\\n// Internal listener array at time of emit [callbackA, callbackB]\\nmyEmitter.emit(\'event\');\\n// Prints:\\n//   A\\n//   B\\n\\n// callbackB is now removed.\\n// Internal listener array [callbackA]\\nmyEmitter.emit(\'event\');\\n// Prints:\\n//   A\\n```\\n\\nBecause listeners are managed using an internal array, calling this will\\nchange the position indices of any listener registered _after_ the listener\\nbeing removed. This will not impact the order in which listeners are called,\\nbut it means that any copies of the listener array as returned by\\nthe `emitter.listeners()` method will need to be recreated.\\n\\nWhen a single function has been added as a handler multiple times for a single\\nevent (as in the example below), `removeListener()` will remove the most\\nrecently added instance. In the example the `once(\'ping\')`listener is removed:\\n\\n```js\\nconst ee = new EventEmitter();\\n\\nfunction pong() {\\n  console.log(\'pong\');\\n}\\n\\nee.on(\'ping\', pong);\\nee.once(\'ping\', pong);\\nee.removeListener(\'ping\', pong);\\n\\nee.emit(\'ping\');\\nee.emit(\'ping\');\\n```\\n\\nReturns a reference to the `EventEmitter`, so that calls can be chained.","name":"removeListener","required":true,"type":{"name":"{ (event: \\"connection\\", cb: (client: WebSocket, request: IncomingMessage) => void): Server<typeof WebSocket, typeof IncomingMessage>; (event: \\"error\\", cb: (err: Error) => void): Server<...>; (event: \\"headers\\", cb: (headers: string[], request: IncomingMessage) => void): Server<...>; (event: \\"close\\" | \\"listening\\", cb:..."},"tags":{}}},"generatedAt":1710248281735}')}}]);