
function importModule(requiredModule){
  return requiredModule && requiredModule.default || requiredModule;
}

function createJSDOMDocument() {
  const { JSDOM } = importModule(require('jsdom'));
  const { window } = new JSDOM('<!DOCTYPE html>');
  return window.document
}

function resolveExports(){
  if (global.isomorphicDocument) {
    return global.isomorphicDocument
  }

  const isServer = typeof window === 'undefined';
  
  global.isomorphicDocument = isServer ? createJSDOMDocument() : document
  return global.isomorphicDocument
}

module.exports = resolveExports()


