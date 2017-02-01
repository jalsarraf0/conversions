var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.lengthValue = 0;
		ucc.lengthResult = 0;
		ucc.volumeValue = 0;
		ucc.volumeResult = 0;
		ucc.massValue = 0;
		ucc.massResult = 0;

		//cities to populate the drop-down box
		ucc.volume_units = 
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metric"
			},	
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metric"
			},
			{
				unit_name: "Cubic Inches",
				unit_code: "in3",
				type: "imperial"
			},
			{
				unit_name: "Cubic Feet",
				unit_code: "ft3",
				type: "imperial"
			},
			{
				unit_name: "Fluid Ounces",
				unit_code: "fl oz",
				type: "imperial"
			},
			{
				unit_name: "Pints",
				unit_code: "pt",
				type: "imperial"
			},	
			{
				unit_name: "Gallons",
				unit_code: "gal",
				type: "imperial"
			}
		];		
		
				ucc.length_units = 
		[
			{
				unit_name: "Millimeters",
				unit_code: "mm",
				type: "metric"
			},
			{
				unit_name: "Centimeters",
				unit_code: "cm",
				type: "metric"
			},
			{
				unit_name: "Meters",
				unit_code: "m",
				type: "metric"
			},
			{
				unit_name: "Kilometers",
				unit_code: "km",
				type: "metric"
			},	
			{
				unit_name: "Inches",
				unit_code: "in",
				type: "imperial"
			},
			{
				unit_name: "Feet",
				unit_code: "ft",
				type: "imperial"
			},
			{
				unit_name: "Yards",
				unit_code: "yd",
				type: "imperial"
			},
			{
				unit_name: "Miles",
				unit_code: "ml",
				type: "imperial"
			},	
			{
				unit_name: "Nautical Miles",
				unit_code: "nm",
				type: "imperial"
			}
		];	
		
				ucc.mass_units = 
		[
			{
				unit_name: "Milligrams",
				unit_code: "mg",
				type: "metric"
			},
			{
				unit_name: "Grams",
				unit_code: "g",
				type: "metric"
			},
			{
				unit_name: "Kilograms",
				unit_code: "kg",
				type: "metric"
			},
			{
				unit_name: "Tonnes",
				unit_code: "t",
				type: "metric"
			},	
			{
				unit_name: "Ounces",
				unit_code: "oz",
				type: "imperial"
			},
			{
				unit_name: "Pounds",
				unit_code: "lb",
				type: "imperial"
			},
			{
				unit_name: "Stones",
				unit_code: "s",
				type: "imperial"
			},
			{
				unit_name: "Hundredweights",
				unit_code: "cwt",
				type: "imperial"
			},	
			{
				unit_name: "Long Tons",
				unit_code: "ton",
				type: "imperial"
			}
		];	
		
		function lengthUpdated(){
			ucc.updateLength();
		}
		
		function volumeUpdated(){
		    ucc.updateVolume();
		}
		
		function massUpdated(){
		    ucc.updateMass();
		}
		
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		$scope.$watch('ucc.volumeValue', volumeUpdated);
		$scope.$watch('ucc.massValue', massUpdated);
		
		ucc.selected_volume_unit = ucc.volume_units[0];
		ucc.selected_volume_unit2 = ucc.volume_units[0];
		ucc.selected_length_unit = ucc.length_units[0];
		ucc.selected_length_unit2 = ucc.length_units[0];
		ucc.selected_mass_unit = ucc.mass_units[0];
		ucc.selected_mass_unit2 = ucc.mass_units[0];
		
		ucc.updateVolume = function (){
		    if (ucc.selected_volume_unit.unit_code ==  ucc.selected_volume_unit2.unit_code ){
		        ucc.volumeResult = ucc.volumeValue;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 0.061023759;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue  * 0.00003531;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue  * .0351950085;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 0.00175975043;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.000219968813;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 0.001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.00001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 0.001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "cm3" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.00001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 61.023759;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.0353146625;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 35.1950085;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 1.75975043;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.219968813;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 1000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 1;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "dm3" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.01;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 61023.759;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 35.3146625;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 35195.0085;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 1759.75043;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 219.968813;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 1000000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 1000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 1000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "m3" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 10;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 61.023759;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.0353146625;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 35.1950085;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 1.75975043;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.219968813;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 1000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 1;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.001;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "l" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.01;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 6102.3759;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 3.53146625;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 3519.50085;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 175.975043;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 21.9968813;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 100000;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 100;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.1;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "hl" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 100;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 16.38706;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 0.01638706;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.00001639;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 0.01638706;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.0001638706;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.000578703493;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 0.576742716;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 0.0288371358;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "in3" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.00360464213;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 28316.85;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 28.31685;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.02831685;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 28.31685;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.2831685;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 1728.00063;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 996.611777;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 49.8305888;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "ft3" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 6.22882388;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 28.41312;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 0.02841312;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.00002841;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 0.02841312;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.0002841312;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 1.73387539;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.00100339974;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 0.05;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "fl oz" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.00625000027;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 568.2624;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 0.5682624;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.0005682624;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 0.5682624;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.005682624;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 34.6775077;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.0200679949;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 20;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "pt" && ucc.selected_volume_unit2.unit_code == "gal"){
		        ucc.volumeResult = ucc.volumeValue * 0.125000005;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "cm3"){
		        ucc.volumeResult = ucc.volumeValue * 4546.099;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "dm3"){
		        ucc.volumeResult = ucc.volumeValue * 4.546099;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "m3"){
		        ucc.volumeResult = ucc.volumeValue * 0.004546099;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "l"){
		        ucc.volumeResult = ucc.volumeValue * 4.546099;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "hl"){
		        ucc.volumeResult = ucc.volumeValue * 0.04546099;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "in3"){
		        ucc.volumeResult = ucc.volumeValue * 277.42005;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "ft3"){
		        ucc.volumeResult = ucc.volumeValue * 0.160543952;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "fl oz"){
		        ucc.volumeResult = ucc.volumeValue * 159.999993;
		    }
		    else if (ucc.selected_volume_unit.unit_code == "gal" && ucc.selected_volume_unit2.unit_code == "pt"){
		        ucc.volumeResult = ucc.volumeValue * 7.99999965;
		    }
		    return ucc.volumeResult;
		};
		
				ucc.updateLength = function (){
		    if (ucc.selected_length_unit.unit_code ==  ucc.selected_length_unit2.unit_code ){
		        ucc.lengthResult = ucc.lengthValue;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 0.1;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 0.001;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.000001;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 0.0393700787;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 0.0032808399;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 0.0010936133;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.0000006212;
		    }
		    else if (ucc.selected_length_unit.unit_code == "mm" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.00000054;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 10;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 0.01;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.00001;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 0.393700787;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 0.032808399;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 0.010936133;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.00000621371192;
		    }
		    else if (ucc.selected_length_unit.unit_code == "cm" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.00000539956804;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 100;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 1000;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.001;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 39.3700787;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 3.2808399;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 1.0936133;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.000621371192;
		    }
		    else if (ucc.selected_length_unit.unit_code == "m" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.000539956803;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 100000;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 1000;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 1000000;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 39370.0787;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 3280.8399;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 1093.6133;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.621371192;
		    }
		    else if (ucc.selected_length_unit.unit_code == "km" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.539956803;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 2.54;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 0.0254;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.0000254;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 25.4;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 0.0833333333;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 0.0277777778;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.00001578;
		    }
		    else if (ucc.selected_length_unit.unit_code == "in" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.00001371;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 30.48;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 0.3048;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.0003048;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 12;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 304.8;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 0.333333333;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.000189393939;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ft" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.000164578834;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 91.44;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 0.9144;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 0.0009144;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 36;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 3;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 914.4;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 0.000568181818;
		    }
		    else if (ucc.selected_length_unit.unit_code == "yd" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.000493736501;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 160934.4;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 1609.344;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 1.609344;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 63360;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 5280;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 1760;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 1609344;
		    }
		    else if (ucc.selected_length_unit.unit_code == "ml" && ucc.selected_length_unit2.unit_code == "nm"){
		        ucc.lengthResult = ucc.lengthValue * 0.868976242;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "cm"){
		        ucc.lengthResult = ucc.lengthValue * 185200;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "m"){
		        ucc.lengthResult = ucc.lengthValue * 1852;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "km"){
		        ucc.lengthResult = ucc.lengthValue * 1.852;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "in"){
		        ucc.lengthResult = ucc.lengthValue * 72913.3858;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "ft"){
		        ucc.lengthResult = ucc.lengthValue * 6076.11549;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "yd"){
		        ucc.lengthResult = ucc.lengthValue * 2025.37183;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "ml"){
		        ucc.lengthResult = ucc.lengthValue * 1.15077945;
		    }
		    else if (ucc.selected_length_unit.unit_code == "nm" && ucc.selected_length_unit2.unit_code == "mm"){
		        ucc.lengthResult = ucc.lengthValue * 1852000;
		    }
		    return ucc.lengthResult;
		};
		
				ucc.updateMass = function (){
		    if (ucc.selected_mass_unit.unit_code ==  ucc.selected_mass_unit2.unit_code ){
		        ucc.massResult = ucc.massValue;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 0.001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 0.000001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.000000001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 0.00003527;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 0.0000022048;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 0.0000001575;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.00000001968;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "mg" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.0000000009842;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 1000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 0.001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.000001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 0.0352733686;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 0.00220462262;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 0.000157473044;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.00001968;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "g" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.0000009844;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 1000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 1000000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.001;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 35.2733686;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 2.20462262;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 0.157473044;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.0196841306;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "kg" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.000984206528;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 1000000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 1000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 1000000000;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 35273.3686;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 2204.62262;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 157.473044;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 19.6841306;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "t" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.984206528;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 28.35;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 0.02835;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.00002835;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 28350;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 0.0625010513;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 0.00446436081;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.000558045101;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "oz" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.0000279;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 453.59237;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 0.45359237;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.00045359237;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 15.9997309;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 453592.37;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 0.0714285714;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.00892857143;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "lb" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.000446428571;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 6350.29318;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 6.35029318;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.00635029318;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 223.996232;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 14;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 6350293.18;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 0.125;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "s" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.00625;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 50802.3454;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 50.8023454;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 0.0508023454;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 1791.96986;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 112;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 8;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 50802345.4;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "cwt" && ucc.selected_mass_unit2.unit_code == "ton"){
		        ucc.massResult = ucc.massValue * 0.05;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "g"){
		        ucc.massResult = ucc.massValue * 1016046.91;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "kg"){
		        ucc.massResult = ucc.massValue * 1016.04691;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "t"){
		        ucc.massResult = ucc.massValue * 1.01604691;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "oz"){
		        ucc.massResult = ucc.massValue * 35839.3971;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "lb"){
		        ucc.massResult = ucc.massValue * 2240;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "s"){
		        ucc.massResult = ucc.massValue * 160;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "cwt"){
		        ucc.massResult = ucc.massValue * 20;
		    }
		    else if (ucc.selected_mass_unit.unit_code == "ton" && ucc.selected_mass_unit2.unit_code == "mg"){
		        ucc.massResult = ucc.massValue * 1016046910;
		    }
		    return ucc.massResult;
		};
		
		//behaviors
		
		ucc.showSelectedUnit = function(){
			console.log(ucc.selected_volume_unit.unit_name);
		};
		
	}
]);
