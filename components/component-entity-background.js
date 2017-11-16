//BASIC ENTITY COMPONENT
nJSE.components.backgroundEntity = nJSE.components.base();
nJSE.components.backgroundEntity.onInit = function () {
  this.tagIndices = [];
  this.heirarchyIndices = [];
  this.transformIndices = [];
  this.spriteIndices = [];
  this.sizes = [];
  this.speeds = [];
};
nJSE.components.backgroundEntity.onCreate = function (id) {
  let index = this.entityIDs.length - 1;
  
  this.tagIndices[index] = nJSE.components.heirarchy.indexOf(id, 1);
  this.heirarchyIndices[index] = nJSE.components.heirarchy.indexOf(id, 1);
  this.transformIndices[index] = nJSE.components.heirarchy.indexOf(id, 1);
  this.spriteIndices[index] = nJSE.components.sprite.indexOf(id, 1);
  
  nJSE.components.sprite.setLayer(this.spriteIndices[index], 25);
  nJSE.components.collider.setShape(this.colliderIndices[index], 35, 4, Math.PI/4);
};
nJSE.components.backgroundEntity.onUpdate = function(delta){
  var i = this.entityIDs.length;

  while (i--){
    nJSE.components.transform[i].translate
    
  }
    if (this.activeStates[i] && this.speeds[i] > 0)
      this.frames[i] = (this.frames[i] + deltaTime * this.speeds[i]) % this.images[i].length;
};
nJSE.components.backgroundEntity.onDraw(){
  var i = this.entityIDs.length;

  while (i--) {
    if(!this.activeStates[i])
      continue;
    
    let trns = nJSE.components.transform.matrix[this.transformIndices[i]];
    
    let ctx = this.layers[i];
    let image = this.images[i][this.frames[i] << 0];
    
    ctx.setTransform(trns[0], trns[3], trns[1], trns[4], trns[2], trns[5]);

    this.layers[i].drawImage(image, -image.width * 0.5, -image.height * 0.5);
  }
}