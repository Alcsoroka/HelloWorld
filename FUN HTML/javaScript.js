		
		var elevatorMusic = new Audio("elevatorMusic.mp3");
		elevatorMusic.volume = 0.5;
		elevatorMusic.loop = true;
		elevatorMusic.play();
		
		var e = " Hello World ",
		tiker_helloWorld = 0;
		document.getElementById("demo2").innerHTML = e.toString();
		
		var myVar=setInterval(function () {Updater()}, 500);
		var		src = 'http://traffic.ottawa.ca/map/camera?id=2005&timems=1410958581954' +'.png',
				img = document.createElement('img'),
				number = 0;
				
		var d = new Date();
		document.getElementById("demo").innerHTML = d.toLocaleTimeString();
		
		function Updater()
		{
		imageUpdate();
		textUpdate();
		timeUpdate();
		}
		
		function timeUpdate(){
			d = new Date();
			document.getElementById("demo").innerHTML = d.toLocaleTimeString();
		}
		function textUpdate(){
			
			tiker_helloWorld = tiker_helloWorld + 1;
			
			if (tiker_helloWorld < 14)
			{
			e = "Hello World " + e;
			document.getElementById("demo2").innerHTML = e.toString();
			}
			else
			{
			tiker_helloWorld = 0;
			e = " Hello World ";
			document.getElementById("demo2").innerHTML = e.toString();
			}
		}
		function imageUpdate(){
						
				var myImageElement = document.getElementById('imageOne');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2005&timems=1411740757822' + number + '.png';
				
				var myImageElement = document.getElementById('imageTwo');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=209&timems=1431696393365' + number + '.png';
				
				var myImageElement = document.getElementById('imageThree');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2002&timems=1410959890921' + number + '.png';
				
				var myImageElement = document.getElementById('imageFour');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2006&timems=1410959921406' + number + '.png';
				
				var myImageElement = document.getElementById('imageFive');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2007&timems=1410960671142' + number + '.png';
				
				var myImageElement = document.getElementById('imageSix');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2001&timems=1410960692197' + number + '.png';
				
				var myImageElement = document.getElementById('imageSeven');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2003&timems=1410960716902' + number + '.png';
				
				var myImageElement = document.getElementById('imageEight');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2009&timems=1410960743244' + number + '.png';
				
				var myImageElement = document.getElementById('imageNine');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=2004&timems=1410960777920' + number + '.png';
				
				var myImageElement = document.getElementById('imageTen');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=223&timems=1432055389967' + number + '.png';
				
				var myImageElement = document.getElementById('imageEleven');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=211&timems=1432055272912' + number + '.png';
				
				var myImageElement = document.getElementById('imageTwelve');
				myImageElement.src = 'http://traffic.ottawa.ca/map/camera?id=188&timems=1432055179011' + number + '.png';
				
				number++;
		}