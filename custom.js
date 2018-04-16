$(document).ready(function() 											
{	var test1;
	var test2;
	var test3;
	var test4;
	var timeBegan = null
	, timeStopped = null
	, stoppedDuration = 0
	, started = null;
	function start()
	{															
		if (timeBegan === null)
		{
			timeBegan = new Date();
		}
		if (timeStopped !== null)
		{
			stoppedDuration += (new Date() - timeStopped);
		}
		//started = setInterval(clockRunning, 10);	
	}
	function stop()
	{
		timeStopped = new Date();
		clearInterval(started);
	}
	function reset()
	{
		clearInterval(started);
		stoppedDuration = 0;
		timeBegan = null;
		timeStopped = null;
		document.getElementById("display-area").innerHTML = "00:00:00.000";
	}
	function clockRunning()
	{
		var currentTime = new Date()
		, timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
		, hour = timeElapsed.getUTCHours()
		, min = timeElapsed.getUTCMinutes()
		, sec = timeElapsed.getUTCSeconds()
		, ms = timeElapsed.getUTCMilliseconds();
		document.getElementById("display-area").innerHTML = 
		(hour > 9 ? hour : "0" + hour) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec) + "." + (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
		
	};
	var timeBegan1 = null
	, timeStopped1 = null
	, stoppedDuration1 = 0
	, started1 = null;
	function start1()
	{															
		if (timeBegan1 === null)
		{
			timeBegan1 = new Date();
		}
		if (timeStopped1 !== null)
		{
			stoppedDuration1 += (new Date() - timeStopped1);
		}
		started1 = setInterval(clockRunning1, 10);	
	}
	function stop1()
	{
		timeStopped1 = new Date();
		clearInterval(started1);
	}
	function clockRunning1()
	{
		var currentTime1 = new Date()
		, timeElapsed1 = new Date(currentTime1 - timeBegan1 - stoppedDuration1)
		, hour1 = timeElapsed1.getUTCHours()
		, min1 = timeElapsed1.getUTCMinutes()
		, sec1 = timeElapsed1.getUTCSeconds()
		, ms1 = timeElapsed1.getUTCMilliseconds();
		document.getElementById("display-area1").innerHTML = 
		(hour1 > 9 ? hour1 : "0" + hour1) + ":" + (min1 > 9 ? min1 : "0" + min1) + ":" + (sec1 > 9 ? sec1 : "0" + sec1) + "." + (ms1 > 99 ? ms1 : ms1 > 9 ? "0" + ms1 : "00" + ms1);
		test1=hour1*3600*60*1000+min1*60*1000+sec1*1000+ms1;
	};

	/////////////////////////////////////////////////////////////////////////////////////////////////////testing/////////////////////////////////////////////////////////////////////////
	var timeBegan2 = null
	, timeStopped2= null
	, stoppedDuration2 = 0
	, started2 = null;
	function start2()
	{															
		if (timeBegan2 === null)
		{
			timeBegan2 = new Date();
		}
		if (timeStopped2 !== null)
		{
			stoppedDuration2 += (new Date() - timeStopped2);
		}
		started2 = setInterval(clockRunning2, 10);	
	}
	function stop2()
	{
		timeStopped2 = new Date();
		clearInterval(started2);

	}
	function clockRunning2()
	{
		var currentTime2 = new Date()
		, timeElapsed2 = new Date(currentTime2 - timeBegan2 - stoppedDuration2)
		, hour2 = timeElapsed2.getUTCHours()
		, min2 = timeElapsed2.getUTCMinutes()
		, sec2 = timeElapsed2.getUTCSeconds()
		, ms2 = timeElapsed2.getUTCMilliseconds();
		document.getElementById("display-area2").innerHTML = 
		(hour2 > 9 ? hour2 : "0" + hour2) + ":" + (min2 > 9 ? min2 : "0" + min2) + ":" + (sec2 > 9 ? sec2 : "0" + sec2) + "." + (ms2 > 99 ? ms2 : ms2 > 9 ? "0" + ms2 : "00" + ms2);
		test2=hour2*3600*60*1000+min2*60*1000+sec2*1000+ms2;
	};
	var timeBegan3 = null
	, timeStopped3 = null
	, stoppedDuration3 = 0
	, started3 = null;
	function start3()
	{															
		if (timeBegan3 === null)
		{
			timeBegan3 = new Date();
		}
		if (timeStopped3 !== null)
		{
			stoppedDuration3 += (new Date() - timeStopped3);
		}
		started3 = setInterval(clockRunning3, 10);	
	}
	function stop3()
	{
		timeStopped3 = new Date();
		clearInterval(started3);
	}
	function clockRunning3()
	{
		var currentTime3 = new Date()
		, timeElapsed3 = new Date(currentTime3 - timeBegan3 - stoppedDuration3)
		, hour3 = timeElapsed3.getUTCHours()
		, min3 = timeElapsed3.getUTCMinutes()
		, sec3 = timeElapsed3.getUTCSeconds()
		, ms3 = timeElapsed3.getUTCMilliseconds();
		document.getElementById("display-area3").innerHTML = 
		(hour3 > 9 ? hour3 : "0" + hour3) + ":" + (min3 > 9 ? min3 : "0" + min3) + ":" + (sec3 > 9 ? sec3 : "0" + sec3) + "." + (ms3 > 99 ? ms3 : ms3 > 9 ? "0" + ms3 : "00" + ms3);
		test3=hour3*3600*60*1000+min3*60*1000+sec3*1000+ms3;
	};
	var timeBegan4 = null
	, timeStopped4 = null
	, stoppedDuration4 = 0
	, started4 = null;
	function start4()
	{															
		if (timeBegan4 === null)
		{
			timeBegan4 = new Date();
		}
		if (timeStopped4 !== null)
		{
			stoppedDuration4 += (new Date() - timeStopped4);
		}
		started4 = setInterval(clockRunning4, 10);	
	}
	function stop4()
	{
		timeStopped4 = new Date();
		clearInterval(started4);
	}
	function clockRunning4()
	{
		var currentTime4 = new Date()
		, timeElapsed4 = new Date(currentTime4 - timeBegan4 - stoppedDuration4)
		, hour4 = timeElapsed4.getUTCHours()
		, min4 = timeElapsed4.getUTCMinutes()
		, sec4 = timeElapsed4.getUTCSeconds()
		, ms4 = timeElapsed4.getUTCMilliseconds();
		document.getElementById("display-area4").innerHTML = 
		(hour4 > 9 ? hour4 : "0" + hour4) + ":" + (min4 > 9 ? min4 : "0" + min4) + ":" + (sec4 > 9 ? sec4 : "0" + sec4) + "." + (ms4 > 99 ? ms4 : ms4 > 9 ? "0" + ms4 : "00" + ms4);
		test4=hour4*3600*60*1000+min4*60*1000+sec4*1000+ms4;
		};
	//testing
	var val=[];
	$('#submit').click(function()
	{
		if($('#getnumber').val()=="")
		{
			alert("Kindly enter the number of rows you want to sort.");
		}
		else
		{
			$('.btn1').addClass("hidden");
			$('.btn2').removeClass("hidden");
			$('.btn3').removeClass("hidden");
			$('#getnumber').addClass("hidden");
			var i = $('#getnumber').val();
			for (j=0;j<i;j++)
			{
				my_div.innerHTML = my_div.innerHTML +"<div class='row'><input type='number' class='abc form-control mt-1 mb-1' id='getnumber"+j+"' placeholder='Enter Number "+j+"'></div>"
			}	
		}
	});
	$('#submit1').click(function()
	{
			$('.btn1').addClass("hidden");
			$('.btn4').removeClass("hidden");
			$('.btn3').removeClass("hidden");
			$('#getnumber').addClass("hidden");
			var i = 250;
			for (j=0;j<i;j++)
			{
				
				my_div.innerHTML = my_div.innerHTML +"<div class='row'><input type='number' class='abc form-control mt-1 mb-1' id='getnumber"+j+"' value='"+Math.floor((Math.random() * 1000) + 1)+"' placeholder='Enter Number "+j+"'></div>"
			}	
	});
	$('#bubble').click(function()
	{
		var k = $('#getnumber').val();
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				val.length=0;
				return false;	

			}
			else
			{
				val.push($('#getnumber'+j).val());	
			}
		}

		var a=val
		var swapp;
		var x=a;
		var n = parseInt(a.length);
		start();
		do
		{
			swapp = false;
			for (var i=0; i < n; i++)
			{
				if (parseFloat(x[i]) > parseFloat(x[i+1]))
				{
					var temp = x[i];
					x[i] = x[i+1];
					x[i+1] = temp;
					swapp = true;
				}
			}
			n--;
		}
		while (swapp);
		stop();
		clockRunning();
		var l;
		for (l=0; l < k; l++)
		{
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+x[l]+"' placeholder='Enter Number &nbsp'></div>"
			$(".abc").addClass("hidden");
		}
		$('.btn2').addClass("hidden");
	});
	$('#selection').click(function()
	{
		var k = $('#getnumber').val();
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				return false;
			}
			else
			{
				val.push($('#getnumber'+j).val());	
			}
		}
		var arr = val;
		function selectionSort(array)
		{
			start();
			array.forEach(function(element, index)
			{
				smallestVal = element;
				smallestValIndex = index;
				for (var i = smallestValIndex; i < array.length; i++)
				{
					secondVal = array[i];
					if (compare(smallestVal, secondVal) > 0)
					{
						smallestVal = secondVal;
						smallestValIndex = i;
					}
				}
				swap(array, index, smallestValIndex);
			});
			stop();
			clockRunning();
			return array;
		}
		function compare(a, b) {
			if (parseFloat(a) < parseFloat(b))
			{
				return -1;
			}
			if (parseFloat(a) > parseFloat(b))
			{
				return 1;
			}  
			return 0;
		}
		function swap(array, a, b) {
			var tmp1 = array[a];
			var tmp2 = array[b];
			array[a] = tmp2;
			array[b] = tmp1;
			return array;
		}
		selectionSort(arr);
		
		for (l=0; l < arr.length; l++)
		{
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+arr[l]+"' placeholder='Enter Number'></div>"
			$(".abc").addClass("hidden");
		}
		$('.btn2').addClass("hidden");
	});
	$('#merge').click(function()
	{
		var k = $('#getnumber').val();
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				return false;
			}
			else
			{
				val.push($('#getnumber'+j).val());	
			}
		}
		var arr = val;
		start();
		function mergeSort(arr)
		{
			if (arr.length < 2)
				return arr;
			var middle = parseInt(arr.length / 2);
			var left   = arr.slice(0, middle);
			var right  = arr.slice(middle, arr.length);
			return merge(mergeSort(left), mergeSort(right));
		}
		function merge(left, right)
		{
			var result = [];
			while (left.length && right.length) {
				if (parseFloat(left[0]) <= parseFloat(right[0]))
				{
					result.push(left.shift());
				}
				else 
				{
					result.push(right.shift());
				}
			}
			while (left.length)
				result.push(left.shift());
			while (right.length)
				result.push(right.shift());
			return result;
		}
		arr= mergeSort(arr);
		stop();
		clockRunning();	 
		for (var l=0; l < arr.length; l++)
		{
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+arr[l]+"' placeholder='Enter Number'></div>"
			$(".abc").addClass("hidden");
		}
		$('.btn2').addClass("hidden");
	});
	$('#quick').click(function()
	{
		var k = $('#getnumber').val();
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				return false;
			}
			else
			{
				val.push($('#getnumber'+j).val());	
			}
		}
		start();
		function quick_Sort(origArray)
		{
			if (origArray.length <= 1)
			{ 
				return origArray;
			}
			else
			{
				var left = [];
				var right = [];
				var newArray = [];
				var pivot = origArray.pop();
				var length = origArray.length;
				for (var i = 0; i < length; i++)
				{
					if (parseFloat(origArray[i]) <= parseFloat(pivot))
					{
						left.push(origArray[i]);
					}
					else
					{
						right.push(origArray[i]);
					}
				}
				return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
			}
		}
		var myArray = val;
		var arr = quick_Sort(myArray);
		stop();
		clockRunning(); 
		for (var l=0; l < arr.length; l++)
		{
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+arr[l]+"' placeholder='Enter Number'></div>"
			$(".abc").addClass("hidden");
		}
		$('.btn2').addClass("hidden");
	});
	$('#allauto').click(function()
	{
	// 	var k = $('#getnumber').val();
	    var k =250;
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				return false;
			}
			else
			{
				val.push($('#getnumber'+j).val());	

			}
		}
		var myArray = val;
		var arr = val;
		var a = val;
		var arry=val;
		start1();
		var result1=mergeSort(arr);
		stop1();
		clockRunning1();
		start3();
		var result3=bubble(a);
		stop3();
		clockRunning3();
		start4();
		var result4 = selectionSort(arry);
		stop4();
		clockRunning4();
		start2();
		var result2 =quick_Sort(myArray);
		stop2();
		clockRunning2();
		graph();
		for (var l=0; l<k; l++)
		{
			
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result1[l]+"' placeholder='Enter Number'></div>"
			$(".abc").addClass("hidden");
		}
		// for (var l=0; l<k; l++)
		// {
		// 	
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result2[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		// for (var l=0; l<k; l++)
		// {
			
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result2[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		// for (var l=0; l<k; l++)
		// {
		// 	
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result4[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		$('.btn2').addClass("hidden");
	});
	$('#all').click(function()
	{
	 	var k = $('#getnumber').val();
	//   var k =250;
		for (j=0;j<k;j++)
		{	
			if ($('#getnumber'+j).val()=="")
			{
				alert("Please enter appropriate values.");
				return false;
			}
			else
			{
				val.push($('#getnumber'+j).val());	

			}
		}
		var myArray = val;
		var arr = val;
		var a = val;
		var arry=val;
		start1();
		var result1=mergeSort(arr);
		stop1();
		clockRunning1();
		start3();
		var result3=bubble(a);
		stop3();
		clockRunning3();
		start4();
		var result4 = selectionSort(arry);
		stop4();
		clockRunning4();
		start2();
		var result2 =quick_Sort(myArray);
		stop2();
		clockRunning2();
		graph();
		for (var l=0; l<k; l++)
		{
			
			my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result1[l]+"' placeholder='Enter Number'></div>"
			$(".abc").addClass("hidden");
		}
		// for (var l=0; l<k; l++)
		// {
		// 	
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result2[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		// for (var l=0; l<k; l++)
		// {
			
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result2[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		// for (var l=0; l<k; l++)
		// {
		// 	
		// 	my_div2.innerHTML = my_div2.innerHTML +"<div class='row'><input type='number' class='form-control mt-1 mb-1' value='"+result4[l]+"' placeholder='Enter Number'></div>"
		// 	$(".abc").addClass("hidden");
		// }
		$('.btn2').addClass("hidden");
	});
		function quick_Sort(origArray)
		{
			if (origArray.length <= 1)
			{ 
				return origArray;
			}
			else
			{
				var left = [];
				var right = [];
				var newArray = [];
				var pivot = origArray.pop();
				var length = origArray.length;
				for (var i = 0; i < length; i++)
				{
					if (parseInt(origArray[i]) <= parseInt(pivot))
					{
						left.push(origArray[i]);
					}
					else
					{
						right.push(origArray[i]);
					}
				}
				
				return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
			}
		}
		function mergeSort(arr)
		{
			if (arr.length < 2)
				return arr;
			var middle = parseInt(arr.length / 2);
			var left   = arr.slice(0, middle);
			var right  = arr.slice(middle, arr.length);
			return merge(mergeSort(left), mergeSort(right));
		}
		function merge(left, right)
		{
			var result = [];
			while (left.length && right.length) {
				if (parseFloat(left[0]) <= parseFloat(right[0]))
				{
					result.push(left.shift());
				}
				else 
				{
					result.push(right.shift());
				}
			}
			while (left.length)
				result.push(left.shift());
			while (right.length)
				result.push(right.shift());
			
			return result;
		}
		function selectionSort(array)
		{
			array.forEach(function(element, index)
			{
				smallestVal = element;
				smallestValIndex = index;
				for (var i = smallestValIndex; i < array.length; i++)
				{
					secondVal = array[i];
					if (compare(smallestVal, secondVal) > 0)
					{
						smallestVal = secondVal;
						smallestValIndex = i;
					}
				}
				swap(array, index, smallestValIndex);
			});
			return array;
		}
		function compare(a, b) {
			if (parseFloat(a) < parseFloat(b))
			{
				return -1;
			}
			if (parseFloat(a) > parseFloat(b))
			{
				return 1;
			}  
			return 0;
		}
		function swap(array, a, b) {
			
			var tmp1 = array[a];
			var tmp2 = array[b];
			array[a] = tmp2;
			array[b] = tmp1;
			return array;
		}
		function bubble(a) {
		  var swapped = false,
		    i = 1,
		    j = a.length,
		    tmp;
		 
		  for (; i < j; i += 1) {
		    if (a[i - 1] > a[i]) {
		      tmp = a[i];
		      a[i] = a[i - 1];
		      a[i - 1] = tmp;
		      swapped = true;
		    }
		  }
		 
		  if (swapped) {
		    bubble(a);
		  }
		  return a;
		}
		function graph(){
			google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);
      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
         ['sort', 'Merge', 'Quick', 'Bubble', 'Selection'],
         ['',  parseInt(test1),      parseInt(test2),         parseInt(test3),             parseInt(test4)]
      ]);
    var options = {
      title : 'Grapichal repersentation',
      vAxis: {title: 'Timing (In miliseconds)'},
      hAxis: {title: 'Sortings'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
});