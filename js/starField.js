var circles = [], circles2 = [], circle, circle2;

function makeCircles() {
	var material = new THREE.MeshLambertMaterial({
		color: 0xFFFFFF
	});
	var radius = 1;
	var segments = 32;
	var circleGeometry = new THREE.CircleGeometry(radius, segments);

	for (var pos = 999; pos >= -1000; pos -= 10)
	{
		circle = new THREE.Mesh(circleGeometry, material);

		circle.position.x = Math.random() * 1000 - 500;
		circle.position.y = Math.random() * 1000 - 500;
		circle.position.z = pos;

		scene.add(circle);
		circles.push(circle);
	}

	for (var pos = -1000; pos < 1000; pos += 10)
	{
		circle2 = new THREE.Mesh(circleGeometry, material);

		circle2.position.x = Math.random() * 1000 - 500;
		circle2.position.y = Math.random() * 1000 - 500;
		circle2.position.z = pos;

		scene.add(circle2);
		circles2.push(circle2);
	}
}

function updateCircles() {
	for(var i = 0; i < circles.length; i++)
	{
		circle = circles[i];
		circle.position.z -= 20;
		if (circle.position.z < -1000) {
			circle.position.z += 2000;
		}

		circle2 = circles2[i];
		circle2.position.z += 20;
		if (circle2.position.z > 1000) {
			circle2.position.z -= 2000;
		}
	}
	renderer.render(scene, camera);
	requestAnimationFrame(function(){
		updateCircles();
	});
}