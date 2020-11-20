export default class webrtc_test extends godot.Node {
  // Called when the node enters the scene tree for the first time.
  _ready() {
    // creating new peer connection from ECMAScript
    console.log("ECMAScript");
    const nspeer = new godot.WebRTCPeerConnection(); // Error in debugger
    nspeer.initialize({});
    console.log("Done\n");

    // creating peer connection via gdscript wrapper
    console.log("GDScript");
    const webWrapper = this.get_node("/root/Control");
    const gdpeer = webWrapper.call("initialize", {}); // No error, debugging messages found in output from successful call to webrtc-native
    console.log("Done");
  }
}
