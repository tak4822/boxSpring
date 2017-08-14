
window.addEventListener('DOMContentLoaded', (function(){
    //get window height and width
    var width  = window.innerWidth;
    var height = window.innerHeight;

    //asign variables for scope
    var renderer, scene, camera;
    var theta = 0;

    //call fn
    init();
    anim();

    //collada loader
    var loader = new THREE.ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load( '../img/spoooon.dae', function colladaReady( collada ) {
        var dae = collada.scene;
        dae.position.set( 0, -4,0);
        if(width>1024){
          dae.scale.set( 6.6,3.3,3.3 );
        } else {
          dae.scale.set( 3,3,1 );
        }
        scene.add( dae );

    } );
function init(){

      //grab canvas from dom and ajust renderer in it
      canvas = document.getElementById('canvas');
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      //background in renderer
      renderer.setClearColor(0xffffff, 1);
      canvas.appendChild(renderer.domElement);


       // scene
       scene = new THREE.Scene();

       // camera
       camera = new THREE.PerspectiveCamera( 15, width / height, 1, 1000 );
       scene.add( camera );

       // light
       var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
       directionalLight.position.z = 3;
       directionalLight.position.y = 10;
       scene.add( directionalLight );


   }
   //moving  the camera 
   function anim(){
        renderer.render( scene, camera );
        camera.position.x = 30 * Math.sin( theta * Math.PI / 360 );
        camera.position.y = 0;
        camera.position.z = 30 * Math.cos( theta * Math.PI / 360 );
        camera.lookAt( new THREE.Vector3(0, 0, 0) );
        theta++;
        requestAnimationFrame( anim );
    };

}), false);
