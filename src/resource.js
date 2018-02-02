var res = {
    HelloWorld_png : "res/HelloWorld.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
window.g_resources = g_resources

export default g_resources

export {
  res
}
