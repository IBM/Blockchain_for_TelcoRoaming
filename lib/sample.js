/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 
 /**
 * Author : Amandeep Singh : singham@us.ibm.com
 */  

/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.discovery} tx1 -transaction 1
 * @transaction
 */
function discovery(tx1) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx1.asset.rp = tx1.rp;
    tx1.asset.location = tx1.location;
    tx1.asset.lat = tx1.lat;
    tx1.asset.long = tx1.long;
    tx1.asset.flag = "";

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx1.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'move');
            event.asset = tx1.asset;
            emit(event);

        });

} 




/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.authentication} tx2 -transaction 2
 * @transaction
 */
function authentication(tx2) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx2.asset.rp = tx2.rp;
    tx2.asset.roaming=tx2.roaming;
    
  var fraud=0;

    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {
            test="222";
            return assetRegistry.getAll();
        })
        .then(function (users) {
              test="333";
              users.forEach(function (user) {
                 if((user.msisdn==tx2.asset.msisdn) && (user.flag!="")){
                    fraud=1;
                 }
           });
      
           
         
       if(fraud==1){
             tx2.asset.flag = "Fraud"; }
       else{
             tx2.asset.flag = "Active"; }
  
 
        // Get the asset registry for the asset.
        return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry2) {

            // Update the asset in the asset registry.
             return assetRegistry2.update(tx2.asset);

          })
          .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'authent');
            event.asset = tx2.asset;
            emit(event);

        });
      
      
      
      
       });
  
  
   

}



/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.updaterate} tx3 -transaction 3
 * @transaction
 */
function updaterate(tx3) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx3.asset.rp = tx3.rp;
    tx3.asset.ratetype = tx3.ratetype;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx3.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'setrate');
            event.asset = tx3.asset;
            emit(event);

        });

} 


/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.callout} tx4 -transaction 4
 * @transaction
 */
function callout(tx4) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx4.asset.rp = tx4.rp;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx4.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'callo');
            event.asset = tx4.asset;
            emit(event);

        });

} 


/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.overagecheck} tx5 -transaction 5
 * @transaction
 */
function overagecheck(tx5) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx5.asset.rp = tx5.rp;
    tx5.asset.flag = tx5.flag;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx5.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'overagec');
            event.asset = tx5.asset;
            emit(event);

        });

} 



/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.callend} tx6 -transaction 6
 * @transaction
 */
function callend(tx6) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx6.asset.rp = tx6.rp;
    tx6.asset.duration = tx6.duration;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx6.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'calle');
            event.asset = tx6.asset;
            emit(event);

        });

} 




/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.callpay} tx7 -transaction 7
 * @transaction
 */
function callpay(tx7) {

    // Save the old value of the asset.
  //  var recept = tx4.cspnew;

    // Update the asset with the new value.
    tx7.asset.rp = tx7.rp;
    tx7.asset.charges = tx7.charges;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.gsc.roaming.rs')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx7.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.gsc.roaming', 'callp');
            event.asset = tx7.asset;
            emit(event);

        });

} 



/////////////////////////////////////////////////////////////////////
/**
 * Helper function for creating broadcasters
*/



function createCSP(name,region) {
return getParticipantRegistry('org.gsc.roaming.CSP')
  .then(function (participantRegistry) {
    var factory = getFactory();
    var csp = factory.newResource('org.gsc.roaming', 'CSP',name);
    csp.region=region;
    return participantRegistry.add(csp);
  })
  .catch(function (error) {
     console.log("Failed to create Participant CSP");
  });
}

 function createMSISDN(publickey,msisdn,address,ho,region1,rp,region2,roaming,location,lat,long,ratetype,flag) {
   //return getParticipantRegistry('org.gsc.roaming.CSP')
  //.then(function (participantRegistry) {
    //return participantRegistry.get(csp);
  //})
  //.then(function (cspObj) {
                   var factory = getFactory();    
                   var newUser = factory.newResource('org.gsc.roaming','rs',publickey);
                   newUser.msisdn = msisdn;
                   newUser.address = address;
                   var temp=factory.newResource('org.gsc.roaming','CSP',ho);
                   temp.region=region1;
                   newUser.ho =temp;
                  if(rp!=""){
                   var temp2=factory.newResource('org.gsc.roaming','CSP',rp);
                   temp2.region=region2;
                   newUser.rp =temp2;
                  }
                  else{
                    var temp2=factory.newResource('org.gsc.roaming','CSP',"NA");
                    temp2.region="NA";
                    newUser.rp =temp2;
                  }
                   newUser.roaming = roaming;
                   newUser.location = location;
                   newUser.lat = lat;
                   newUser.long = long;
                   newUser.ratetype = ratetype;
                   newUser.flag = flag;
                   return getAssetRegistry('org.gsc.roaming.rs')
                   .then(function (assetRegistry) {
                                 return assetRegistry.add(newUser);
                   });
  //})
  //.catch(function (error) {
    // Add optional error handling here.
  //});
   
}

/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.resetCSP} resetCSP -resetdemo1
 * @transaction
 */
function addCSPs(resetCSP){

  //Setup the network Participants, add to the Participant registires
         createCSP("ABC","US");
         createCSP("XYZ","EPAC");
}

/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.resetMSISDN} resetMSISDN -resetdemo2
 * @transaction
 */
function addMSISDNs(resetMSISDN){
  //Build Users, add to asset registry
         createMSISDN("rs1","14691234567","DC","ABC","US","","","FALSE","DC","32.942746", "38.91","","");
         createMSISDN("rs2","14691234568","DALLAS","ABC","US","","","FALSE","DALLAS","32.942746", "-96.994838","","");
         createMSISDN("rs3","14691234569","SF","XYZ","EPAC","","","FALSE","SF","37.776", "-122.414","","");
         createMSISDN("rs4","03097218855","BERLIN","XYZ","EPAC","","","FALSE","BERLIN","52.5200", "13.4050","","");
         createMSISDN("rs5","349091234567","BARCELONA","XYZ","EPAC","","","FALSE","BARCELONA", "41.3851", "2.1734","","");
} 


/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.addUser} addUser -addfraud
 * @transaction
 */
function addFraudUser(addUser){
  //Build Users, add to asset registry
         createMSISDN("rs8","14691234568","DALLAS","ABC","US","","","FALSE","DALLAS","32.942746", "-96.994838","","");

} 


/**
 * Sample transaction processor function.
 * @param {org.gsc.roaming.removeMSISDN} removeMSISDN -resetdemo3
 * @transaction
 */
function deleteMSISDN(removeMSISDN)
{
   return getAssetRegistry('org.gsc.roaming.rs')
  .then(function (assetRegistry) {
    // Get the factory for creating new asset instances.
    var factory = getFactory();
    return assetRegistry.removeAll(['rs1','rs2','rs3','rs4','rs5','rs6']);
  })
  .catch(function (error) {
    // Add optional error handling here.
  });
}

