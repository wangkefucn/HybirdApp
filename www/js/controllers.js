angular.module('app.controllers', [])

.controller('investInfoCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  //$http.get('http://192.168.1.109/apis/invinfo.json')
  //.error(function(response){
  //  alert(response);
  //})
  //.success(function(response){
  // alert(JSON.stringify(response));
  //  //if (response.serviceCommon.resultCd === '201' || response.serviceCommon.resultCd === '200' ) {
  //    $scope.peTusJukyuMisiJyuhuOutVoList = response.peTusJukyuMisiJyuhuOutVoList;
  //  //}
  // });
  var testJson = '{"result":0,"errorCode":"","error":"","peTusJukyuMisiJyuhuOutVoList":[{ "ym":"201412" , "hyukkngk":"1453913" , "hyukkngkZngtRate":"-3431" , "shtkKngkGuki":"1434059" , "hyuksnekGuki":"19854" },{ "ym":"201501" , "hyukkngk":"1440824" , "hyukkngkZngtRate":"-13089" , "shtkKngkGuki":"1436219" , "hyuksnekGuki":"4605" },{ "ym":"201502" , "hyukkngk":"1448948" , "hyukkngkZngtRate":"8124" , "shtkKngkGuki":"1440510" , "hyuksnekGuki":"8438" },{ "ym":"201503" , "hyukkngk":"1711235" , "hyukkngkZngtRate":"262287" , "shtkKngkGuki":"1695671" , "hyuksnekGuki":"15564" },{ "ym":"201504" , "hyukkngk":"1711161" , "hyukkngkZngtRate":"-74" , "shtkKngkGuki":"1702406" , "hyuksnekGuki":"8755" },{ "ym":"201505" , "hyukkngk":"1761466" , "hyukkngkZngtRate":"50305" , "shtkKngkGuki":"1702406" , "hyuksnekGuki":"8755" },{ "ym":"201506" , "hyukkngk":"1738774" , "hyukkngkZngtRate":"-22692" , "shtkKngkGuki":"1708899" , "hyuksnekGuki":"29875" },{ "ym":"201507" , "hyukkngk":"1771898" , "hyukkngkZngtRate":"33215" , "shtkKngkGuki":"1707145" , "hyuksnekGuki":"62844" },{ "ym":"201508" , "hyukkngk":"1701285" , "hyukkngkZngtRate":"-70704" , "shtkKngkGuki":"1709353" , "hyuksnekGuki":"-8068" }]}';
  $scope.peTusJukyuMisiJyuhuOutVoList = eval("(" + testJson + ")").peTusJukyuMisiJyuhuOutVoList;

  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady()
  {
    $scope.changeOriantationLandspace = function() {
      alert('landscape');
      screen.lockOrientation('landscape');
    }

    $scope.changeOriantationPortrait = function() {
      alert('portrait');
      screen.lockOrientation('portrait');
    }
  }
}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$state',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state) {
	$scope.loginData = {};

	$scope.login = function(event){
		var serviceCommon = {};
		serviceCommon.ipAdrs = "192.177.11.49";
		serviceCommon.chKbn = "RCH";
		serviceCommon.loginTuskShuknKishCd = "9989";
		serviceCommon.ryushKbn = "ITNRI991";
		serviceCommon.loginTuskGyumRank = "00,50,00,00,00,00,00,00,00,00"
		var aplData = {};
		aplData.loginTuskLoginId = "E40610062";
		aplData.gnziLoginPswd = "a1111111";
		aplData.uriKbn = "01";
		var data = {};
		data.serviceCommon = serviceCommon;
		data.aplData = aplData;
    //$http.post('https://w00sec-trading.uat.starmf.jp/ws/mfCmnCauSysLgiAction_ws.do', data)
    //.success(function(response){
    //  alert(JSON.stringify(response));
    //   if (response.serviceCommon.resultCd === '201' || response.serviceCommon.resultCd === '200' ) {
          $state.go("tabsController.hometop", {}, {reload: true});
    //   }
    //  });
	  };
}])

.controller('hometopCtrl', function($scope, $cordovaCamera) {
  $scope.takePhoto = function () {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageURI) {
      $scope.imgURI = imageURI;
    }, function (err) {
      // An error occured. Show a message to the user
    });
  }

  $scope.choosePhoto = function () {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageURI) {
      $scope.imgURI = imageURI;
    }, function (err) {
      // An error occured. Show a message to the user
    });
  }
})
