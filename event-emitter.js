var eventEmitter={func: [],
  on: (fu)=>{eventEmitter.func.push(fu)},
  emit: ()=> {
    for (var i = 0; i < eventEmitter.func.length; i++) {
      eventEmitter.func[i]();
    }

  }
}
eventEmitter.on(function(){console.log('Hello');})
eventEmitter.on(function(){console.log('Hello2');})
eventEmitter.emit()
