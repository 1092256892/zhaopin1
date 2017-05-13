angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
	$http.get('/data/positionList.json').then(function(resp){
		$scope.list=resp.data;
	});
//	$scope.list=[{
//		id:'1',
//		name:'销售',
//		imgSrc:'image/company-3.png',
//		companyName:'千度',
//		city:'上海',
//		industry:'互联网',
//		time:'2016-06-01 11:05'
//	},{
//		id:'2',
//		name:'web前端工程师',
//		imgSrc:'image/company-1.png',
//		companyName:'千度',
//		city:'上海',
//		industry:'互联网',
//		time:'2016-06-01 11:05'
//	},{
//		id:'3',
//		name:'Java工程师',
//		imgSrc:'image/company-2.png',
//		companyName:'千度',
//		city:'上海',
//		industry:'互联网',
//		time:'2016-06-01 11:05'
//	},{
//		id:'4',
//		name:'产品经理',
//		imgSrc:'image/company-3.png',
//		companyName:'千度',
//		city:'上海',
//		industry:'互联网',
//		time:'2016-06-01 11:05'
//	}];
}]);