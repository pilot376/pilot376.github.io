(async function(){
  window.cfaObject = '//cfa-js.cafe24.com/cfa.js?v=1736829845374';
  var src_path = window.cfaObject;
  var idx_server_end = src_path.indexOf("/cfa.js");
  var goServer = src_path.substring(0,idx_server_end);

  console.log(src_path);
  console.log(idx_server_end);
  console.log(goServer);

      // var idx_server_end = src_path.indexOf("/cfa.js");
      // var goServer = src_path.substring(0,idx_server_end);
    
      // var s_uid = window.cfaUid ;
      // var s_shop_no = window.cfaSno ;   //shop_no
      // var service_type = window.cfaStype ;  //서비스구분 (e / g / w)
      // var s_etc = window.cfaEtc ;     //기타변수지정
    
      // var cfa_CUK45='' , cfa_CID='' , cfa_CUK1Y='' , utype , cfa_domain , cfa_LC='' , new_visit ='T' , oLc1='' ,oLc2='' , doc_stm_log='' , fi_str ;
      // var today = new Date();
      
      // const cookie_day = 45 ;
      // const cookie_1_year = 365 ;
      
      // cfa_domain = window.cfaDomain ;
      // if( !cfa_domain ) {
      //   var cmc_temp_domain = document.URL.match(/https?\:\/\/(www\.)?([^\/]*)/);
      //   if(cmc_temp_domain&&cmc_temp_domain[2]) { 
      //     cfa_domain = "."+cmc_temp_domain[2];
      //   }
      // }
      // else {
      //   cfa_domain = "."+cfa_domain ;
      // }
})();